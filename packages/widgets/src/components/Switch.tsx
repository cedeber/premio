import {
	AriaSwitchProps,
	createFocusRing,
	createSwitch,
	createVisuallyHidden,
} from "@solid-aria/primitives";
import { Show } from "solid-js";

import * as style from "../styles/Switch.module.scss";

export const Switch = (props: AriaSwitchProps) => {
	let ref!: HTMLInputElement;

	const { inputProps, state } = createSwitch(props, () => ref);
	const { isFocusVisible, focusProps } = createFocusRing();
	const { visuallyHiddenProps } = createVisuallyHidden();

	const isDisabled = () => props.isDisabled ?? false;
	const isSelected = () => state.isSelected();
	const isReadOnly = () => props.isReadOnly ?? false;

	return (
		<label
			class={style.group}
			classList={{
				[style.disabled]: isDisabled(),
				[style.hasPointer]: !props.isDisabled && !props.isReadOnly,
			}}
		>
			<div {...visuallyHiddenProps}>
				<input {...inputProps} {...focusProps} ref={ref} />
			</div>
			<div
				class={style.checkbox}
				classList={{
					[style.checked]: isSelected(),
					[style.focus]: isFocusVisible(),
					[style.readOnly]: isReadOnly(),
				}}
				aria-hidden="true"
			>
				<Show when={isSelected()}>
					<span class={`${style.check} material-symbols-outlined`}>check</span>
				</Show>
			</div>
			{props.children}
		</label>
	);
};
