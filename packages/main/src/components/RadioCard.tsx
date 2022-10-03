import { createSignal } from "solid-js";
import { Card, Radio, RadioGroup } from "widgets";

import style from "../styles/common.module.scss";

export const RadioCard = () => {
	const [value, setValue] = createSignal<string>();

	return (
		<Card title={"Radio"} icon={"radio_button_checked"} subtitle={"Single selection"}>
			<div class={style.vertical} style={{ margin: "10px" }}>
				<RadioGroup label="Favorite pet" onChange={setValue}>
					<Radio value="dogs">Dogs</Radio>
					<Radio value="cats">Cats</Radio>
					<Radio value="spiders" isDisabled>
						Spiders
					</Radio>
				</RadioGroup>
			</div>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<strong>Value:</strong>
				<span>{value()}</span>
			</div>
		</Card>
	);
};
