import { createSeparator } from "@solid-aria/primitives";
import type { JSX } from "solid-js";

import * as style from "../styles/HeaderBar.module.scss";
import { Tag, TagIntent } from "./Tag";

interface HeaderBarProps {
	title?: string;
	subtitle?: string;
	icon?: string | JSX.Element;
	actions?: JSX.Element[];
	titleProps?: JSX.HTMLAttributes<HTMLDivElement>;
	class?: string;
	tag?: string | { label: string; intent?: TagIntent };
	style?: JSX.CSSProperties;
	ref?: HTMLDivElement;
}

export const HeaderBar = (props: HeaderBarProps) => {
	const hasLeft = props.icon || props.title || props.subtitle || props.tag;

	return (
		<div
			class={`${style.bar} ${props.class}`}
			classList={{ [style.toolbar]: !hasLeft }}
			style={props.style}
			ref={props.ref}
		>
			{hasLeft && (
				<div class={style.left}>
					{props.icon && (
						<div
							class={style.icon}
							classList={{
								"material-symbols-outlined": typeof props.icon === "string",
							}}
						>
							{props.icon}
						</div>
					)}
					<div class={style.titleWrapper}>
						<h3 class={style.title} {...props.titleProps}>
							{props.title}
						</h3>
						{props.subtitle && <div class={style.subtitle}>{props.subtitle}</div>}
					</div>
					{props.tag && (
						<Tag
							label={typeof props.tag === "string" ? props.tag : props.tag.label}
							intentColor={
								typeof props.tag === "string"
									? TagIntent.Outlined
									: props.tag.intent ?? TagIntent.Secondary
							}
						/>
					)}
				</div>
			)}
			<div class={style.actions}>{props.actions}</div>
		</div>
	);
};

export const HeaderDivider = (props) => {
	const { separatorProps } = createSeparator({ orientation: "horizontal" });

	return (
		<div
			{...separatorProps}
			class={style.divider}
			classList={{ [style.dividerInvisible]: props.invisible }}
		/>
	);
};
