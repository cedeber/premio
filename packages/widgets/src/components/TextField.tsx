import type { AriaTextFieldProps } from "@solid-aria/primitives";
import { createFocus, createTextField } from "@solid-aria/primitives";
import { createSignal, JSX, mergeProps, Show } from "solid-js";

import * as style from "../styles/TextField.module.scss";
import { Callout, CalloutIntent } from "./Callout";

interface TextFieldProps extends AriaTextFieldProps<"input"> {
	style?: JSX.CSSProperties;
	action?: JSX.Element;
	icon?: string;
}

export const TextField = (props: TextFieldProps) => {
	let ref!: HTMLInputElement;
	const { labelProps, inputProps, descriptionProps, errorMessageProps } = createTextField(
		props,
		() => ref,
	);
	const [isFocus, onFocusChange] = createSignal(false);
	const { focusProps } = createFocus({ onFocusChange });

	return (
		<div
			class={style.group}
			classList={{
				[style.disabled]: !!props.isDisabled,
			}}
			style={props.style}
		>
			<Show when={props.isReadOnly} keyed>
				<div class={style.readOnlyTag}>read only</div>
			</Show>
			<Show when={!props.isRequired && !props.isReadOnly} keyed>
				<div class={style.optional}>optional</div>
			</Show>
			<label class={style.label} {...labelProps}>
				{props.label}
			</label>
			<div
				class={style.inputAction}
				classList={{
					[style.focus]: isFocus(),
					[style.error]: !!props.errorMessage,
					[style.readOnly]: props.isReadOnly,
				}}
			>
				<Show when={!!props.icon}>
					<span class={`${style.icon} material-symbols-outlined`}>{props.icon}</span>
				</Show>
				<input class={style.input} {...mergeProps(inputProps, focusProps)} ref={ref} />
				<Show when={!!props.action}>
					<div class={style.action}>{props.action}</div>
				</Show>
			</div>
			<Show when={props.errorMessage && !props.isDisabled} keyed>
				<Callout
					intent={CalloutIntent.Error}
					messageProps={errorMessageProps}
					class={style.errorMessage}
				>
					{props.errorMessage}
				</Callout>
			</Show>
			<Show when={props.description} keyed>
				<div {...descriptionProps} class={style.description}>
					{props.description}
				</div>
			</Show>
		</div>
	);
};

type SimpleTextFieldProps = Omit<TextFieldProps, "isRequired" | "isReadOnly" | "description">;

export const SimpleTextField = (props: SimpleTextFieldProps) => {
	let ref!: HTMLInputElement;
	const { labelProps, inputProps } = createTextField(props, () => ref);
	const [isFocus, onFocusChange] = createSignal(false);
	const { focusProps } = createFocus({ onFocusChange });

	return (
		<div
			class={`${style.inputAction} ${style.simple}`}
			classList={{
				[style.disabled]: !!props.isDisabled,
				[style.error]: !!props.errorMessage,
				[style.focus]: isFocus(),
			}}
			style={props.style}
		>
			<label {...labelProps} class={style.hiddenLabel}>
				{props.label}
			</label>
			<Show when={!!props.icon}>
				<span class={`${style.icon} material-symbols-outlined`}>{props.icon}</span>
			</Show>
			<input class={style.input} {...mergeProps(inputProps, focusProps)} ref={ref} />
			<Show when={!!props.action}>
				<div class={style.action}>{props.action}</div>
			</Show>
		</div>
	);
};
