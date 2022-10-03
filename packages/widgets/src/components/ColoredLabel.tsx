import { darken, saturate } from "polished";
import type { JSX } from "solid-js";

import * as style from "../styles/ColoredLabel.module.scss";
import { TagIntent } from "./Tag";

export enum ColoredLabelIntent {
	Primary = "primary",
	Secondary = "secondary",
	Success = "success",
	Warning = "warning",
	Danger = "danger",
	Fuchsia = "fuchsia",
	Indigo = "indigo",
	Lime = "lime",
}

interface ColoredLabelProps {
	intentColor?: ColoredLabelIntent | string;
	label?: string; // has the priority on children
	children?: JSX.Element;
	ref?: HTMLDivElement;
}

export const ColoredLabel = (props: ColoredLabelProps) => {
	let bgColor, borderColor;

	try {
		if (!Object.values(ColoredLabelIntent).includes(props.intentColor as ColoredLabelIntent)) {
			bgColor = props.intentColor || TagIntent.Secondary;
			borderColor = darken(0.15, saturate(0.1, bgColor));
		}
	} catch {
		/* do nothing, will use default color: Secondary */
	}

	return (
		<div
			class={style.coloredLabel}
			classList={{
				[style.secondary]:
					props.intentColor == undefined ||
					props.intentColor === ColoredLabelIntent.Secondary,
				[style.primary]: props.intentColor === ColoredLabelIntent.Primary,
				[style.success]: props.intentColor === ColoredLabelIntent.Success,
				[style.warning]: props.intentColor === ColoredLabelIntent.Warning,
				[style.danger]: props.intentColor === ColoredLabelIntent.Danger,
				[style.fuchsia]: props.intentColor === ColoredLabelIntent.Fuchsia,
				[style.indigo]: props.intentColor === ColoredLabelIntent.Indigo,
				[style.lime]: props.intentColor === ColoredLabelIntent.Lime,
			}}
			ref={props.ref}
		>
			<span
				class={style.color}
				style={{ "background-color": bgColor, "border-color": borderColor }}
			/>
			{props.label || props.children}
		</div>
	);
};
