import { Card, HeaderDivider, TriggerButton, TriggerButtonIntent } from "widgets";

export const CardCard = () => {
	return (
		<Card title={"Card"} icon={"dashboard"} subtitle={"Inception"}>
			<div style={{ padding: "10px", "background-color": "#d6d3d1" }}>
				<Card
					title={"Header Bar"}
					subtitle={"A subtitle"}
					tag={"a tag"}
					icon={"settings"}
					actions={[
						<TriggerButton icon={"save"} label={"Save"} />,
						<TriggerButton icon={"input"} label={"Export"} />,
						<HeaderDivider />,
						<TriggerButton
							icon={"delete"}
							label={"Delete"}
							intent={TriggerButtonIntent.Danger}
						/>,
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
