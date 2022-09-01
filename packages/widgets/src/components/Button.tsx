import { AriaButtonProps, createButton } from "@solid-aria/primitives";
import style from "../styles/Button.module.scss";

interface ButtonProps extends Omit<AriaButtonProps, "children"> {
	label: string;
}

const Button = (props: ButtonProps) => {
	let ref: HTMLButtonElement | undefined;

	const { buttonProps } = createButton(props, () => ref);

	return (
		<button {...buttonProps} class={style.button} ref={ref}>
			{props.label}
		</button>
	);
};

export { Button };
