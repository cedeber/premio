import { ForItems } from "@solid-aria/collection";
import { createFocusRing } from "@solid-aria/focus";
import {
	AriaListBoxOptionProps,
	AriaListBoxProps,
	AriaListBoxSectionProps,
	createListBox,
	createListBoxOption,
	createListBoxSection,
} from "@solid-aria/listbox";
import { createHover } from "@solid-aria/primitives";
import { combineProps } from "@solid-primitives/props";
import { ParentProps, Show } from "solid-js";

import * as style from "../styles/Listbox.module.scss";

export const ListBox = (props: AriaListBoxProps) => {
	let ref: HTMLUListElement | undefined;

	const { ListBoxProvider, listBoxProps, labelProps, state } = createListBox(props, () => ref);

	return (
		<div class={style.component}>
			<span {...labelProps} class={style.componentLabel}>
				{props.label}
			</span>
			<ListBoxProvider>
				<ul {...listBoxProps} ref={ref} class={style.container}>
					<ForItems in={state.collection()}>
						{(section) => (
							<ListBoxSection heading={section().title}>
								<ForItems in={section().childNodes}>
									{(item) => <Option key={item().key}>{item().children}</Option>}
								</ForItems>
							</ListBoxSection>
						)}
					</ForItems>
				</ul>
			</ListBoxProvider>
		</div>
	);
};

const ListBoxSection = (props: ParentProps<AriaListBoxSectionProps>) => {
	const { itemProps, headingProps, groupProps } = createListBoxSection(props);

	return (
		<li {...itemProps} class={style.section}>
			<Show when={props.heading}>
				<span {...headingProps} class={style.sectionLabel}>
					{props.heading}
				</span>
			</Show>
			<ul {...groupProps} class={style.list}>
				{props.children}
			</ul>
		</li>
	);
};

const Option = (props: ParentProps<AriaListBoxOptionProps>) => {
	let ref: HTMLLIElement | undefined;

	const { optionProps, isSelected, isDisabled, isFocused } = createListBoxOption(
		props,
		() => ref,
	);
	const { isFocusVisible, focusProps } = createFocusRing();
	const { hoverProps, isHovered } = createHover({ isDisabled });
	const rootProps = combineProps(optionProps, focusProps, hoverProps);

	// const isDisabled = () =>

	return (
		<li
			{...rootProps}
			ref={ref}
			class={style.line}
			classList={{
				[style.checked]: isSelected(),
				[style.focus]: isFocusVisible(),
				[style.disabled]: isDisabled(),
				[style.hover]: isHovered(),
				[style.hasPointer]: isFocused() || isHovered(),
			}}
		>
			<div class={style.checkbox} aria-hidden="true">
				<Show when={!isSelected()}>
					<span class={`${style.check} material-symbols-outlined`}>check_small</span>
				</Show>
				<Show when={isSelected()}>
					<span class={`${style.check} material-symbols-outlined`}>check</span>
				</Show>
			</div>
			{props.children}
		</li>
	);
};
