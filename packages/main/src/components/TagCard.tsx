import { Card, HeaderDivider, Tag, TagIntent } from "widgets";

import style from "../styles/common.module.scss";

export const TagCard = () => {
	return (
		<Card title={"Tag"} icon={"sell"}>
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<Tag label={"Primary"} intentColor={TagIntent.Primary} />
				<Tag label={"Secondary"} intentColor={TagIntent.Secondary} />
				<Tag label={"Success"} intentColor={TagIntent.Success} />
				<Tag label={"Warning"} intentColor={TagIntent.Warning} />
				<Tag label={"Danger"} intentColor={TagIntent.Danger} />
				<HeaderDivider />
				<Tag label={"Fuchsia"} intentColor={TagIntent.Fuchsia} />
				<Tag label={"Indigo"} intentColor={TagIntent.Indigo} />
				<Tag label={"Lime"} intentColor={TagIntent.Lime} />
				<HeaderDivider />
				<Tag label={"Outlined"} intentColor={TagIntent.Outlined} />
				<Tag label={"Personalized"} intentColor={"#abcdef"} />
			</div>
		</Card>
	);
};
