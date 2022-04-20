import clsx from "clsx";
import type { FC } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink: FC<LinkProps> = (props) => {
	let resolved = useResolvedPath(props.to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Link
			to={props.to}
			className={clsx("rounded-full", "px-3", "py-1", {
				"hover:bg-violet-200": !match,
				"bg-violet-600": match,
				"text-white": match,
			})}
		>
			{props.children}
		</Link>
	);
};

export { CustomLink };
