import type { JSX } from "solid-js";
import style from "../styles/Callout.module.scss";

export interface CalloutProps {
	title?: string;
	intent?: CalloutIntent;
	class?: string;
	contentClass?: string;
	children?: JSX.Element;
	style?: JSX.CSSProperties;
	ref?: HTMLDivElement;
	inline?: boolean;
}

export enum CalloutIntent {
	Info = "info",
	Success = "success",
	Warning = "warning",
	Danger = "danger",
}

export const Callout = (props: CalloutProps) => {
	return (
		<div
			ref={props.ref}
			class={`${style.callout} ${props.class}`}
			classList={{
				[style.inline]: props.inline,
				[style.info]: props.intent == undefined || props.intent === CalloutIntent.Info,
				[style.success]: props.intent === CalloutIntent.Success,
				[style.warning]: props.intent === CalloutIntent.Warning,
				[style.danger]: props.intent === CalloutIntent.Danger,
			}}
			style={props.style}
		>
			{props.title && <div class={style.title}>{props.title}</div>}
			<div class={`${style.content} ${props.contentClass}`}>{props.children}</div>
		</div>
	);
};
