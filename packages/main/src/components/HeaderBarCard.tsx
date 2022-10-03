import { Card, HeaderBar, HeaderDivider, TriggerButton, TriggerButtonIntent } from "widgets";

export const HeaderBarCard = () => {
	return (
		<Card
			title={"Header Bar"}
			icon={"format_h1"}
			subtitle={"Use me in Dialogs, Pages, Cards..."}
		>
			<div style={{ margin: "10px" }}>
				<HeaderBar
					title={"Lorem Elsass ipsum nüdle bredele"}
					subtitle={"Elsass frei"}
					tag={"fotmi!"}
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
				/>
			</div>
		</Card>
	);
};
