import type { ButtonHTMLAttributes, FC } from "react";
import cx from "clsx";
import { Anim } from "./Anim";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
	<button
		{...props}
		className={cx(
			props.className,
			"py-3",
			"pl-5",
			"pr-4",
			"bg-blue-500",
			"text-white",
			"text-sm",
			"font-semibold",
			"rounded-md",
			"shadow-lg",
			"shadow-blue-500/50",
			"focus:outline-none",
			"hover:bg-blue-600",
			"flex",
		)}
	>
		<Anim />
		{props.children}
	</button>
);

export { Button };
