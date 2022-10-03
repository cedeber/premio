import {
	ActionButton,
	ActionButtonIconPlacement,
	ActionButtonIntent,
	Card,
	HeaderDivider,
} from "widgets";

import style from "../styles/common.module.scss";

export const ActionButtonCard = () => {
	return (
		<Card title={"Action Button"} subtitle={"Will Mutate data"} icon={"bolt"}>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<ActionButton
					label={"Filled"}
					onPress={() => {
						console.log("click");
					}}
				/>
				<ActionButton label={"Filled"} onPress={() => {}} progress={-1} />
				<ActionButton
					label={"Tinted"}
					intent={ActionButtonIntent.Tinted}
					onPress={() => {}}
				/>
				<ActionButton label={"Gray"} intent={ActionButtonIntent.Gray} onPress={() => {}} />
				<ActionButton
					label={"Outlined"}
					intent={ActionButtonIntent.Outlined}
					onPress={() => {}}
					icon={"arrow_right_alt"}
					iconPlacement={ActionButtonIconPlacement.Right}
				/>
				<ActionButton
					label={"Plain"}
					intent={ActionButtonIntent.Plain}
					onPress={() => {}}
				/>
				<HeaderDivider />
				<ActionButton
					label={"Danger"}
					intent={ActionButtonIntent.Danger}
					onPress={() => {}}
					icon="delete"
				/>
				<HeaderDivider />
				<ActionButton label={"Disabled"} onPress={() => {}} isDisabled />
			</div>
		</Card>
	);
};
