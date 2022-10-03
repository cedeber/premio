import { createSignal, For } from "solid-js";
import { Card, Checkbox, CheckboxGroup } from "widgets";

import style from "../styles/common.module.scss";

export const CheckboxCard = () => {
	const [values, setValues] = createSignal(["Indeterminate", "Read only", "Required"]);

	return (
		<Card title={"Checkbox"} icon={"check"} subtitle={"In a Group"}>
			<div class={style.vertical} style={{ margin: "10px" }}>
				<CheckboxGroup
					defaultValue={values()}
					label="Favorite selection"
					onChange={(value) => setValues(value)}
				>
					<Checkbox value={"checkbox"}>Checkbox</Checkbox>
					<Checkbox isIndeterminate value={"Indeterminate"}>
						Indeterminate
					</Checkbox>
					<Checkbox isReadOnly value={"Read only"}>
						Read only
					</Checkbox>
					<Checkbox isRequired value={"Required"}>
						Required?
					</Checkbox>
					<Checkbox isDisabled value={"Disabled"}>
						Disabled
					</Checkbox>
				</CheckboxGroup>
			</div>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<strong>Values:</strong>
				<For each={values()}>{(value) => <span>{value}</span>}</For>
			</div>
		</Card>
	);
};
