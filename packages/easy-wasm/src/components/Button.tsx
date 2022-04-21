import type { ButtonHTMLAttributes, FC } from "react";
import cx from "clsx";
import { Anim } from "./Anim";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
	<button
		{...props}
		className={cx(
			props.className,
			"flex rounded-md bg-blue-500 py-3 pl-5 pr-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 hover:bg-blue-600 focus:outline-none",
		)}
	>
		<Anim />
		{props.children}
	</button>
);

export { Button };
