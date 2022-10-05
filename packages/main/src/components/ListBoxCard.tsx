import { Item, Section } from "@solid-aria/collection";
import type { ItemKey } from "@solid-aria/primitives";
import { createSignal, For } from "solid-js";
import { Card, ListBox } from "widgets";

import style from "../styles/common.module.scss";

export const ListBoxCard = () => {
	const [values, setValues] = createSignal<ItemKey[]>();

	return (
		<Card title={"List Box"} icon={"checklist"}>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<ListBox
					label="Choose an option"
					selectionMode="multiple"
					onSelectionChange={(selection) => setValues([...selection])}
					disabledKeys={["five"]}
				>
					<Section key="section-one" title="Section 1">
						<Item key="one">One</Item>
						<Item key="two">Two</Item>
						<Item key="three">Three</Item>
					</Section>
					<Section key="section-two" title="Section 2">
						<Item key="four">Four</Item>
						<Item key="five">Five</Item>
						<Item key="six">Six</Item>
					</Section>
				</ListBox>
			</div>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<strong>Values:</strong>
				<For each={values()}>{(value) => <span>{value}</span>}</For>
			</div>
		</Card>
	);
};
