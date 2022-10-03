import {
	Card,
	HeaderDivider,
	TriggerButton,
	TriggerButtonGroup,
	TriggerButtonIntent,
} from "widgets";

import style from "../styles/common.module.scss";

export const ToolbarCard = () => {
	return (
		<Card title={"Toolbar"} icon={"brush"} subtitle={"HeaderBar with actions only"}>
			<div
				class={style.horizontal}
				style={{ margin: "0", padding: "10px", "background-color": "#d6d3d1" }}
			>
				<Card
					actions={[
						<TriggerButtonGroup>
							<TriggerButton icon={"format_align_left"} label={"Left"} />
							<TriggerButton icon={"format_align_center"} label={"Middle"} />
							<TriggerButton icon={"format_align_right"} label={"Right"} />
						</TriggerButtonGroup>,
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
						</TriggerButtonGroup>,
					]}
				>
					<div style={{ padding: "10px", "background-color": "#fdf4ff" }}>
						This is the un-styled scrollable content. It's up to the developer to set
						the padding and the overflow, as needed.
					</div>
				</Card>
				<Card
					actions={[
						<TriggerButton icon={"format_align_left"} label={"Left"} />,
						<TriggerButton icon={"format_align_center"} label={"Middle"} />,
						<TriggerButton icon={"format_align_right"} label={"Right"} />,
						<HeaderDivider />,
						<TriggerButton
							icon={"format_bold"}
							label={"Bold"}
							intent={TriggerButtonIntent.Tinted}
						/>,
						<TriggerButton
							icon={"format_italic"}
							label={"Italic"}
							intent={TriggerButtonIntent.Tinted}
						/>,
						<TriggerButton icon={"format_underlined"} label={"Underline"} />,
					]}
				>
					<div style={{ padding: "10px", "background-color": "#fdf4ff" }}>
						This is the un-styled scrollable content. It's up to the developer to set
						the padding and the overflow, as needed.
					</div>
				</Card>
			</div>
		</Card>
	);
};
