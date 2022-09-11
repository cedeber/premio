import type { JSX } from "solid-js";
import { readableColor, shade, tint } from "polished";
import style from "../styles/Tag.module.scss";
import { createVisuallyHidden } from "@solid-aria/primitives";

export enum TagIntent {
	Primary = "primary",
	Secondary = "secondary",
	Success = "success",
	Warning = "warning",
	Danger = "danger",
	Fuchsia = "fuchsia",
	Indigo = "indigo",
	Lime = "lime",
	Outlined = "outlined",
}

interface TagProps {
	intentColor?: TagIntent | string;
	label?: string; // has the priority on children
	children?: JSX.Element;
	ref?: HTMLDivElement;
}

export const Tag = (props: TagProps) => {
	const { visuallyHiddenProps } = createVisuallyHidden();
	let bgColor, txtColor;

	try {
		if (!Object.values(TagIntent).includes(props.intentColor as TagIntent)) {
			bgColor = props.intentColor || TagIntent.Secondary;
			txtColor = readableColor(bgColor, shade(0.8, bgColor), tint(0.9, bgColor), false);
		}
	} catch {
		/* do nothing, will use default color: Secondary */
	}

	return (
		<div
			class={style.tag}
			classList={{
				[style.secondary]:
					props.intentColor == undefined || props.intentColor === TagIntent.Secondary,
				[style.primary]: props.intentColor === TagIntent.Primary,
				[style.success]: props.intentColor === TagIntent.Success,
				[style.warning]: props.intentColor === TagIntent.Warning,
				[style.danger]: props.intentColor === TagIntent.Danger,
				[style.fuchsia]: props.intentColor === TagIntent.Fuchsia,
				[style.indigo]: props.intentColor === TagIntent.Indigo,
				[style.lime]: props.intentColor === TagIntent.Lime,
				[style.outlined]: props.intentColor === TagIntent.Outlined,
			}}
			style={bgColor ? { "background-color": bgColor, color: txtColor } : undefined}
			ref={props.ref}
		>
			<div {...visuallyHiddenProps}>(</div>
			{props.label || props.children}
			<div {...visuallyHiddenProps}>)</div>
		</div>
	);
};
