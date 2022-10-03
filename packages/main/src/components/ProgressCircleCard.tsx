import { Card, ProgressCircle } from "widgets";

import style from "../styles/common.module.scss";

export const ProgressCircleCard = () => {
	return (
		<Card
			title={"Progress Circle"}
			subtitle={"Indeterminate or with percentage"}
			icon={"autorenew"}
		>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<ProgressCircle size={24} />
				<ProgressCircle size={24} progress={62} />
			</div>
		</Card>
	);
};
