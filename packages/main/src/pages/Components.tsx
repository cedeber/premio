import {
	ActionButton,
	ActionButtonIconPlacement,
	ActionButtonIntent,
	HeaderBar,
	ProgressCircle,
	Tag,
	TagIntent,
} from "widgets";
import style from "../styles/common.module.scss";

const Components = () => {
	return (
		<div class={style.page}>
			<HeaderBar
				title={"Progress Circle"}
				subtitle={"Indeterminate or with percentage"}
				icon={"autorenew"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
				<ProgressCircle size={24} />
				<ProgressCircle size={24} progress={62} />
			</div>
			<HeaderBar
				title={"Action Button"}
				subtitle={"Mutate data"}
				icon={"bolt"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
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
				|
				<ActionButton
					label={"Danger"}
					intent={ActionButtonIntent.Danger}
					onPress={() => {}}
					icon="delete"
				/>
				|
				<ActionButton label={"Disabled"} onPress={() => {}} isDisabled />
			</div>
			<HeaderBar title={"Tag"} icon={"sell"} class={style.headerBar} />
			<div class={style.horizontal}>
				<Tag label={"Primary"} intentColor={TagIntent.Primary} />
				<Tag label={"Secondary"} intentColor={TagIntent.Secondary} />
				<Tag label={"Outlined"} intentColor={TagIntent.Outlined} />
				<Tag label={"Success"} intentColor={TagIntent.Success} />
				<Tag label={"Warning"} intentColor={TagIntent.Warning} />
				<Tag label={"Danger"} intentColor={TagIntent.Danger} />
				|
				<Tag label={"Fuchsia"} intentColor={TagIntent.Fuchsia} />
				<Tag label={"Indigo"} intentColor={TagIntent.Indigo} />
				<Tag label={"Lime"} intentColor={TagIntent.Lime} />
				|
				<Tag label={"#ec4899"} intentColor={"#ec4899"} />
			</div>
			<HeaderBar
				title={"Header Bar"}
				icon={"format_h1"}
				subtitle={"Use me in Dialogs, Pages, Cards..."}
				class={style.headerBar}
			/>
			<HeaderBar
				title={"Header Bar"}
				subtitle={"A subtitle"}
				tag={"a tag"}
				icon={"settings"}
				style={{ width: "320px" }}
			/>
		</div>
	);
};

export default Components;
