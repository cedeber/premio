import {
	AriaButtonProps,
	createButton,
	createFocusRing,
	createHover,
} from "@solid-aria/primitives";
import { mergeProps } from "solid-js";
import style from "../styles/Button.module.scss";
import { ProgressCircle } from "./ProgressCircle";

interface ButtonProps extends Omit<AriaButtonProps, "children"> {
	label: string;
	intent?: ButtonIntent;
	ref?: HTMLButtonElement;
	/** Material Symbols Outlined.
	 * @see https://marella.me/material-symbols/demo/
	 * @see https://fonts.google.com/icons?icon.set=Material+Symbols
	 */
	icon?: string;
	iconPlacement?: ButtonIconPlacement;
	/** -1 for indeterminate. Automatically disabled. */
	progress?: number;
}

export const enum ButtonIntent {
	/** Primary */
	Filled = "filled",
	/** Secondary */
	Tinted = "tinted",
	/** Cancel */
	Gray = "gray",
	/** Specific case */
	Plain = "plain",
	/** Specific case */
	Outlined = "outlined",
	/** Destructive */
	Danger = "danger",
}

export const enum ButtonIconPlacement {
	Right = "right",
	Left = "left",
}

export const Button = (props: ButtonProps) => {
	const { buttonProps, isPressed } = createButton(
		{ ...props, isDisabled: props.isDisabled || props.progress != undefined },
		() => props.ref,
	);
	const { hoverProps, isHovered } = createHover();
	const { isFocusVisible, focusProps } = createFocusRing();

	return (
		<button
			{...mergeProps(buttonProps, hoverProps, focusProps)}
			class={style.button}
			classList={{
				[style.filled]: props.intent == undefined || props.intent === ButtonIntent.Filled,
				[style.tinted]: props.intent === ButtonIntent.Tinted,
				[style.gray]: props.intent === ButtonIntent.Gray,
				[style.plain]: props.intent === ButtonIntent.Plain,
				[style.outlined]: props.intent === ButtonIntent.Outlined,
				[style.danger]: props.intent === ButtonIntent.Danger,
				[style.hover]: isHovered(),
				[style.press]: isPressed(),
				[style.focus]: isFocusVisible(),
				[style.disabled]: props.isDisabled,
			}}
			ref={props.ref}
		>
			{props.iconPlacement !== ButtonIconPlacement.Right && props.icon && (
				<span
					class="material-symbols-outlined"
					classList={{ [style.icon]: true, [style.hidden]: props.progress != undefined }}
				>
					{props.icon}
				</span>
			)}
			{props.label && (
				<span classList={{ [style.hidden]: props.progress != undefined }}>
					{props.label}
				</span>
			)}
			{props.iconPlacement === ButtonIconPlacement.Right && props.icon && (
				<span
					class="material-symbols-outlined"
					classList={{ [style.icon]: true, [style.hidden]: props.progress != undefined }}
				>
					{props.icon}
				</span>
			)}
			{props.progress != undefined && (
				<div class={style.loading}>
					<ProgressCircle size={18} progress={props.progress} />
				</div>
			)}
		</button>
	);
};
