import type { AriaTextFieldProps } from "@solid-aria/primitives";
import { createFocusWithin, createTextField } from "@solid-aria/primitives";
import { createSignal, JSX, Show } from "solid-js";

import style from "../styles/Fields.module.scss";

interface TextFieldProps extends AriaTextFieldProps<"input"> {
	style?: JSX.CSSProperties;
}

export const TextField = (props: TextFieldProps) => {
	let ref!: HTMLInputElement;
	const { labelProps, inputProps, descriptionProps, errorMessageProps } = createTextField(
		props,
		() => ref,
	);
	const [isFocusWithin, onFocusWithinChange] = createSignal(false);
	const { focusWithinProps } = createFocusWithin({ onFocusWithinChange });

	return (
		<div
			{...focusWithinProps}
			class={style.group}
			classList={{
				[style.disabled]: !!props.isDisabled,
				[style.error]: !!props.errorMessage,
				[style.readOnly]: props.isReadOnly,
				[style.focus]: isFocusWithin(),
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
			<input class={style.input} {...inputProps} ref={ref} />
			<Show when={props.errorMessage && !props.isDisabled} keyed>
				<div {...errorMessageProps} class={style.errorMessage}>
					{props.errorMessage}
				</div>
			</Show>
			<Show when={props.description} keyed>
				<div {...descriptionProps} class={style.description}>
					{props.description}
				</div>
			</Show>
		</div>
	);
};
