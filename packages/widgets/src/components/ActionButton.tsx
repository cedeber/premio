import {
	AriaButtonProps,
	createButton,
	createFocusRing,
	createHover,
} from "@solid-aria/primitives";
import { mergeRefs } from "@solid-primitives/refs";
import { JSX, mergeProps, Ref } from "solid-js";

import style from "../styles/ActionButton.module.scss";
import { ProgressCircle } from "./ProgressCircle";

export interface ActionButtonProps extends Omit<AriaButtonProps, "children"> {
	label: string;
	intent?: ActionButtonIntent;
	ref?: Ref<HTMLButtonElement | undefined>;
	/** Material Symbols Outlined.
	 * @see https://marella.me/material-symbols/demo/
	 * @see https://fonts.google.com/icons?icon.set=Material+Symbols
	 */
	icon?: string;
	iconPlacement?: ActionButtonIconPlacement;
	/** -1 for indeterminate. Automatically disabled. */
	progress?: number;
	domProps?: JSX.HTMLAttributes<HTMLButtonElement>;
}

export const enum ActionButtonIntent {
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

export const enum ActionButtonIconPlacement {
	Right = "right",
	Left = "left",
}

export const ActionButton = (props: ActionButtonProps) => {
	let ref!: HTMLButtonElement;
	const { buttonProps, isPressed } = createButton(
		{ ...props, isDisabled: props.isDisabled || props.progress != undefined },
		() => ref,
	);
	const { hoverProps, isHovered } = createHover();
	const { isFocusVisible, focusProps } = createFocusRing();

	return (
		<button
			{...mergeProps(buttonProps, hoverProps, focusProps, props.domProps)}
			class={style.button}
			classList={{
				[style.filled]:
					props.intent == undefined || props.intent === ActionButtonIntent.Filled,
				[style.tinted]: props.intent === ActionButtonIntent.Tinted,
				[style.gray]: props.intent === ActionButtonIntent.Gray,
				[style.plain]: props.intent === ActionButtonIntent.Plain,
				[style.outlined]: props.intent === ActionButtonIntent.Outlined,
				[style.danger]: props.intent === ActionButtonIntent.Danger,
				[style.hover]: isHovered(),
				[style.press]: isPressed(),
				[style.focus]: isFocusVisible(),
				[style.disabled]: props.isDisabled,
				[style.loading]: props.progress != undefined,
			}}
			ref={mergeRefs((el) => (ref = el), props.ref)}
			data-intent={props.intent}
		>
			{props.iconPlacement !== ActionButtonIconPlacement.Right && props.icon && (
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
			{props.iconPlacement === ActionButtonIconPlacement.Right && props.icon && (
				<span
					class="material-symbols-outlined"
					classList={{ [style.icon]: true, [style.hidden]: props.progress != undefined }}
				>
					{props.icon}
				</span>
			)}
			{props.progress != undefined && (
				<div class={style.loadingCircle}>
					<ProgressCircle size={18} progress={props.progress} />
				</div>
			)}
		</button>
	);
};
