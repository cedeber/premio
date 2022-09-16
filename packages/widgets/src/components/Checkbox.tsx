import {
	AriaCheckboxProps,
	createCheckbox,
	createFocusRing,
	createVisuallyHidden,
} from "@solid-aria/primitives";
import { Show } from "solid-js";

import style from "../styles/Checkbox.module.scss";

export const Checkbox = (props: AriaCheckboxProps) => {
	let ref!: HTMLInputElement;

	const { inputProps, state } = createCheckbox(props, () => ref);
	const { isFocusVisible, focusProps } = createFocusRing();
	const { visuallyHiddenProps } = createVisuallyHidden();

	return (
		<label
			class={style.group}
			classList={{
				[style.disabled]: props.isDisabled,
				[style.hasPointer]: !props.isDisabled && !props.isReadOnly,
			}}
		>
			<div {...visuallyHiddenProps}>
				<input {...inputProps} {...focusProps} ref={ref} />
			</div>
			<div
				class={style.checkbox}
				classList={{
					[style.checked]: state.isSelected(),
					[style.focus]: isFocusVisible(),
					[style.readOnly]: props.isReadOnly,
				}}
				aria-hidden="true"
			>
				<Show when={state.isSelected()}>
					<span class={`${style.check} material-symbols-outlined`}>
						{props.isIndeterminate ? "check_indeterminate_small" : "check"}
					</span>
				</Show>
			</div>
			{props.children}
		</label>
	);
};
