import { Card, HeaderDivider, TriggerButton, TriggerButtonIntent } from "widgets";

import style from "../styles/common.module.scss";

export const TriggerButtonCard = () => {
	return (
		<Card title={"Trigger Button"} subtitle={"Open Menus, Popovers, Dialogs..."} icon={"menu"}>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<TriggerButton icon={"save"} label={"Hello"} />
				<TriggerButton icon={"save"} label={"Hello"} progress={-1} />
				<TriggerButton icon={"save"} label={"Hello"} intent={TriggerButtonIntent.Tinted} />
				<TriggerButton
					icon={"save"}
					label={"Hello"}
					intent={TriggerButtonIntent.Outlined}
				/>
				<HeaderDivider />
				<TriggerButton
					icon={"delete"}
					label={"Delete"}
					intent={TriggerButtonIntent.Danger}
				/>
				<HeaderDivider />
				<TriggerButton icon={"save"} label={"Hello"} isDisabled />
			</div>
		</Card>
	);
};
