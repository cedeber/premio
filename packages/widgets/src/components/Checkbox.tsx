import {
	AriaCheckboxGroupItemProps,
	AriaCheckboxGroupProps,
	createCheckboxGroup,
	createCheckboxGroupItem,
	createFocusRing,
	createVisuallyHidden,
} from "@solid-aria/primitives";
import { Show } from "solid-js";

import * as style from "../styles/Checkbox.module.scss";

export const CheckboxGroup = (props: AriaCheckboxGroupProps) => {
	const { CheckboxGroupProvider, groupProps, labelProps, state } = createCheckboxGroup(props);

	return (
		<div {...groupProps} class={style.checkboxesGroup}>
			<span {...labelProps} class={style.checkboxesGroupLabel}>
				{props.label}
			</span>
			<CheckboxGroupProvider>{props.children}</CheckboxGroupProvider>
		</div>
	);
};

/** Only use in a CheckboxGroup. If you want a single Checkbox, use the Switch instead. */
export const Checkbox = (props: AriaCheckboxGroupItemProps) => {
	let ref!: HTMLInputElement;

	const { inputProps, state } = createCheckboxGroupItem(props, () => ref);
	const { isFocusVisible, focusProps } = createFocusRing();
	const { visuallyHiddenProps } = createVisuallyHidden();

	const isDisabled = () => state.isDisabled() || props.isDisabled;
	const isSelected = () => state.isSelected(props.value);
	const isReadOnly = () => state.isReadOnly() || props.isReadOnly;

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
					<span class={`${style.check} material-symbols-outlined`}>
						{props.isIndeterminate ? "check_indeterminate_small" : "check"}
					</span>
				</Show>
			</div>
			{props.children}
		</label>
	);
};
