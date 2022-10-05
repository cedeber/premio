import { createFocusRing, createVisuallyHidden } from "@solid-aria/primitives";
import {
	AriaRadioGroupProps,
	AriaRadioProps,
	createRadio,
	createRadioGroup,
} from "@solid-aria/radio";
import { Show } from "solid-js";

import * as style from "../styles/Radio.module.scss";

export const RadioGroup = (props: AriaRadioGroupProps) => {
	const { RadioGroupProvider, groupProps, labelProps, state } = createRadioGroup(props);

	return (
		<div {...groupProps} class={style.checkboxesGroup}>
			<span {...labelProps} class={style.checkboxesGroupLabel}>
				{props.label}
			</span>
			<RadioGroupProvider>
				<div class={style.groupInline}>{props.children}</div>
			</RadioGroupProvider>
		</div>
	);
};

export const Radio = (props: AriaRadioProps) => {
	let ref!: HTMLInputElement;

	const { inputProps, state } = createRadio(props, () => ref);
	const { isFocusVisible, focusProps } = createFocusRing();
	const { visuallyHiddenProps } = createVisuallyHidden();

	const isDisabled = () => state.isDisabled() || props.isDisabled;
	const isSelected = () => state.isSelected(props.value);
	const isReadOnly = () => state.isReadOnly();

	return (
		<label
			class={style.group}
			classList={{
				[style.disabled]: isDisabled(),
				[style.hasPointer]: !isDisabled() && !isReadOnly(),
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
					<span class={`${style.check} material-symbols-outlined`}>check_small</span>
				</Show>
			</div>
			{props.children}
		</label>
	);
};
