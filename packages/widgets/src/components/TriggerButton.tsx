import type { AriaButtonProps } from "@solid-aria/primitives";
import { createButton, createFocusRing, createHover } from "@solid-aria/primitives";
import type { JSX } from "solid-js";
import { mergeProps } from "solid-js";

import * as style from "../styles/TriggerButton.module.scss";
import { ProgressCircle } from "./ProgressCircle";

interface TriggerButtonProps extends Omit<AriaButtonProps, "children"> {
	/** No Primary intent */
	intent?: TriggerButtonIntent;
	icon: string;
	label: string;
	shortcut?: string;
	domProps?: JSX.HTMLAttributes<HTMLButtonElement>;
	class?: string;
	tooltip?: string;
	ref?: HTMLButtonElement;
	/** -1 for indeterminate. Automatically disabled. */
	progress?: number;
}

export const enum TriggerButtonIntent {
	/** Primary */
	Plain = "plain",
	/** Active */
	Tinted = "tinted",
	/** Specific case */
	Outlined = "outlined",
	/** Destructive */
	Danger = "danger",
}

export const TriggerButton = (props: TriggerButtonProps) => {
	const { buttonProps, isPressed } = createButton(
		{ ...props, isDisabled: props.isDisabled || props.progress != undefined },
		() => props.ref,
	);
	const { hoverProps, isHovered } = createHover();
	const { isFocusVisible, focusProps } = createFocusRing();

	return (
		<button
			{...mergeProps(buttonProps, hoverProps, focusProps, props.domProps)}
			class={style.triggerButton}
			classList={{
				[style.plain]:
					props.intent == undefined || props.intent === TriggerButtonIntent.Plain,
				[style.tinted]: props.intent === TriggerButtonIntent.Tinted,
				[style.outlined]: props.intent === TriggerButtonIntent.Outlined,
				[style.danger]: props.intent === TriggerButtonIntent.Danger,
				[style.hover]: isHovered(),
				[style.press]: isPressed(),
				[style.focus]: isFocusVisible(),
				[style.disabled]: props.isDisabled,
				[style.loading]: props.progress != undefined,
			}}
			ref={props.ref}
			data-intent={props.intent}
		>
			{props.progress != undefined ? (
				<span class={style.loadingCircle}>
					<ProgressCircle size={18} progress={props.progress} />
				</span>
			) : (
				<span class={`${style.icon} material-symbols-outlined`}>{props.icon}</span>
			)}
		</button>
	);
};

interface TriggerButtonGroupProps {
	children: JSX.Element;
}

export const TriggerButtonGroup = (props: TriggerButtonGroupProps) => {
	return <div class={style.group}>{props.children}</div>;
};
