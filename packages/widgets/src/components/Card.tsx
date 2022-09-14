import type { JSX } from "solid-js";
import { Show } from "solid-js";

import style from "../styles/Card.module.scss";
import { HeaderBar } from "./HeaderBar";
import type { TagIntent } from "./Tag";

interface CardProps {
	title?: string;
	subtitle?: string;
	icon?: string | JSX.Element;
	actions?: JSX.Element[];
	class?: string;
	tag?: string | { label: string; intent?: TagIntent };
	ref?: HTMLDivElement;
	children: JSX.Element;
}

export const Card = (props: CardProps) => {
	return (
		<div class={style.card}>
			<Show when={!!props.title || !!props.actions}>
				<HeaderBar
					title={props.title}
					subtitle={props.subtitle}
					tag={props.tag}
					icon={props.icon}
					actions={props.actions}
					class={style.headerBar}
				/>
			</Show>
			<div>{props.children}</div>
		</div>
	);
};
