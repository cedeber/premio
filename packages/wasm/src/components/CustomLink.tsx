import {classNames} from "@cedeber/frontafino";
import type { FC } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink: FC<LinkProps> = (props) => {
	const resolved = useResolvedPath(props.to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Link
			to={props.to}
			className={classNames("rounded-full px-3 py-1", {
				"hover:bg-violet-200": !match,
				"bg-violet-600": !!match,
				"text-white": !!match,
			})}
		>
			{props.children}
		</Link>
	);
};

export { CustomLink };
