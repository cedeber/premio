import { Card, TriggerButton, TriggerButtonGroup, TriggerButtonIntent } from "widgets";

import style from "../styles/common.module.scss";

export const TriggerButtonGroupCard = () => {
	return (
		<Card
			title={"Trigger Button Group"}
			subtitle={"Group Trigger Buttons"}
			icon={"view_column"}
		>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<TriggerButtonGroup>
					<TriggerButton icon={"format_align_left"} label={"Left"} />
					<TriggerButton icon={"format_align_center"} label={"Middle"} />
					<TriggerButton icon={"format_align_right"} label={"Right"} />
				</TriggerButtonGroup>
				<TriggerButtonGroup>
					<TriggerButton
						icon={"format_bold"}
						label={"Bold"}
						intent={TriggerButtonIntent.Tinted}
					/>
					<TriggerButton
						icon={"format_italic"}
						label={"Italic"}
						intent={TriggerButtonIntent.Tinted}
					/>
					<TriggerButton icon={"format_underlined"} label={"Underline"} />
				</TriggerButtonGroup>
			</div>
		</Card>
	);
};
