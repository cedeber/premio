import { Card, ColoredLabel, ColoredLabelIntent } from "widgets";

import style from "../styles/common.module.scss";

export const ColoredLabelCard = () => {
	return (
		<Card title={"Colored Label"} subtitle={"Use in Table"} icon={"sell"}>
			<div class={style.horizontal} style={{ margin: "10px", "align-items": "self-start" }}>
				<div class={style.vertical}>
					<ColoredLabel label={"Primary"} intentColor={ColoredLabelIntent.Primary} />
					<ColoredLabel label={"Secondary"} intentColor={ColoredLabelIntent.Secondary} />
					<ColoredLabel label={"Success"} intentColor={ColoredLabelIntent.Success} />
					<ColoredLabel label={"Warning"} intentColor={ColoredLabelIntent.Warning} />
					<ColoredLabel label={"Danger"} intentColor={ColoredLabelIntent.Danger} />
				</div>
				<div class={style.vertical}>
					<ColoredLabel label={"Fuchsia"} intentColor={ColoredLabelIntent.Fuchsia} />
					<ColoredLabel label={"Indigo"} intentColor={ColoredLabelIntent.Indigo} />
					<ColoredLabel label={"Lime"} intentColor={ColoredLabelIntent.Lime} />
					<ColoredLabel label={"Personalized"} intentColor={"#abcdef"} />
					<ColoredLabel label={"White"} intentColor={"white"} />
				</div>
			</div>
		</Card>
	);
};
