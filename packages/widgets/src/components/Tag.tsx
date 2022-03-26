import type { FC } from "react";
import { classNames } from "@cedeber/frontafino";
import * as style from "./styles/Tag.module.scss";

export interface TagProps {
	intent?: TagIntent;
}

enum TagIntent {
	Default,
	Comment,
	Warning,
	Error,
}

const Tag: FC<TagProps> = (props) => {
	return (
		<span
			className={classNames({
				[style.base]: props.intent === TagIntent.Default || props.intent == undefined,
				[style.comment]: props.intent === TagIntent.Comment,
				[style.warning]: props.intent === TagIntent.Warning,
				[style.error]: props.intent === TagIntent.Error,
			})}
		>
			{props.children}
		</span>
	);
};

export { Tag, TagIntent };
