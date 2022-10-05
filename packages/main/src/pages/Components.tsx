import { ActionButtonCard } from "../components/ActionButtonCard";
import { AlertDialogCard } from "../components/AlertDialogCard";
import { CalloutCard } from "../components/CalloutCard";
import { CardCard } from "../components/CardCard";
import { CheckboxCard } from "../components/CheckboxCard";
import { ColoredLabelCard } from "../components/ColoredLabelCard";
import { DialogCard } from "../components/DialogCard";
import { HeaderBarCard } from "../components/HeaderBarCard";
import { ListBoxCard } from "../components/ListBoxCard";
import { ProgressCircleCard } from "../components/ProgressCircleCard";
import { RadioCard } from "../components/RadioCard";
import { SwitchCard } from "../components/SwitchCard";
import { TagCard } from "../components/TagCard";
import { TextFieldCard } from "../components/TextFieldCard";
import { ToolbarCard } from "../components/ToolbarCard";
import { TriggerButtonCard } from "../components/TriggerButtonCard";
import { TriggerButtonGroupCard } from "../components/TriggerButtonGroupCard";
import * as style from "../styles/common.module.scss";

const Components = () => {
	return (
		<div class={style.page}>
			<a href="https://github.com/cedeber/premio" style={{ margin: "0 auto 10px" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="175.39"
					height="35"
					viewBox="0 0 175.39 35"
				>
					<rect class="svg__rect" x="0" y="0" width="83.76" height="35" fill="#C1D72F" />
					<rect
						class="svg__rect"
						x="81.76"
						y="0"
						width="93.63"
						height="35"
						fill="#5D9741"
					/>
					<path
						class="svg__text"
						d="M13.97 18.13L13.97 18.13L13.97 17.46Q13.97 15.53 14.90 14.44Q15.82 13.35 17.48 13.35L17.48 13.35Q18.90 13.35 19.74 14.05Q20.58 14.76 20.75 16.08L20.75 16.08L19.30 16.08Q19.05 14.54 17.51 14.54L17.51 14.54Q16.51 14.54 16.00 15.26Q15.48 15.98 15.46 17.37L15.46 17.37L15.46 18.02Q15.46 19.40 16.04 20.17Q16.63 20.93 17.66 20.93L17.66 20.93Q18.80 20.93 19.28 20.42L19.28 20.42L19.28 18.75L17.52 18.75L17.52 17.62L20.76 17.62L20.76 20.89Q20.29 21.50 19.47 21.81Q18.65 22.12 17.61 22.12L17.61 22.12Q16.54 22.12 15.71 21.63Q14.89 21.14 14.44 20.24Q13.99 19.33 13.97 18.13ZM26.94 22L25.46 22L25.46 13.47L26.94 13.47L26.94 22ZM33.43 14.66L30.79 14.66L30.79 13.47L37.56 13.47L37.56 14.66L34.90 14.66L34.90 22L33.43 22L33.43 14.66ZM42.80 22L41.32 22L41.32 13.47L42.80 13.47L42.80 17.02L46.61 17.02L46.61 13.47L48.09 13.47L48.09 22L46.61 22L46.61 18.21L42.80 18.21L42.80 22ZM52.70 19.16L52.70 19.16L52.70 13.47L54.17 13.47L54.17 19.18Q54.17 20.03 54.61 20.48Q55.04 20.93 55.88 20.93L55.88 20.93Q57.59 20.93 57.59 19.13L57.59 19.13L57.59 13.47L59.07 13.47L59.07 19.17Q59.07 20.53 58.20 21.32Q57.33 22.12 55.88 22.12L55.88 22.12Q54.42 22.12 53.56 21.33Q52.70 20.55 52.70 19.16ZM66.75 22L63.64 22L63.64 13.47L66.56 13.47Q68.01 13.47 68.77 14.05Q69.52 14.63 69.52 15.78L69.52 15.78Q69.52 16.36 69.21 16.83Q68.89 17.30 68.28 17.56L68.28 17.56Q68.97 17.75 69.35 18.26Q69.73 18.78 69.73 19.51L69.73 19.51Q69.73 20.71 68.96 21.36Q68.19 22 66.75 22L66.75 22ZM65.12 18.15L65.12 20.82L66.77 20.82Q67.47 20.82 67.86 20.47Q68.25 20.13 68.25 19.51L68.25 19.51Q68.25 18.18 66.89 18.15L66.89 18.15L65.12 18.15ZM65.12 14.66L65.12 17.06L66.58 17.06Q67.27 17.06 67.66 16.75Q68.05 16.43 68.05 15.86L68.05 15.86Q68.05 15.23 67.69 14.95Q67.33 14.66 66.56 14.66L66.56 14.66L65.12 14.66Z"
						fill="#252423"
					/>
					<path
						class="svg__text"
						d="M98.33 22L95.95 22L95.95 13.60L99.79 13.60Q100.93 13.60 101.77 13.98Q102.61 14.35 103.07 15.06Q103.52 15.76 103.52 16.71L103.52 16.71Q103.52 17.66 103.07 18.35Q102.61 19.05 101.77 19.42Q100.93 19.80 99.79 19.80L99.79 19.80L98.33 19.80L98.33 22ZM98.33 15.47L98.33 17.93L99.65 17.93Q100.38 17.93 100.75 17.61Q101.12 17.29 101.12 16.71L101.12 16.71Q101.12 16.12 100.75 15.80Q100.38 15.47 99.65 15.47L99.65 15.47L98.33 15.47ZM110.65 22L108.28 22L108.28 13.60L112.12 13.60Q113.26 13.60 114.10 13.98Q114.94 14.35 115.40 15.06Q115.85 15.76 115.85 16.71L115.85 16.71Q115.85 17.62 115.42 18.30Q115.00 18.98 114.21 19.36L114.21 19.36L116.02 22L113.47 22L111.95 19.77L110.65 19.77L110.65 22ZM110.65 15.47L110.65 17.93L111.97 17.93Q112.71 17.93 113.08 17.61Q113.45 17.29 113.45 16.71L113.45 16.71Q113.45 16.12 113.08 15.79Q112.71 15.47 111.97 15.47L111.97 15.47L110.65 15.47ZM127.38 22L120.64 22L120.64 13.60L127.23 13.60L127.23 15.44L122.99 15.44L122.99 16.85L126.73 16.85L126.73 18.63L122.99 18.63L122.99 20.17L127.38 20.17L127.38 22ZM134.39 22L132.19 22L132.19 13.60L134.15 13.60L137.10 18.45L139.98 13.60L141.93 13.60L141.96 22L139.78 22L139.75 17.55L137.59 21.17L136.54 21.17L134.39 17.67L134.39 22ZM149.50 22L147.12 22L147.12 13.60L149.50 13.60L149.50 22ZM154.24 17.80L154.24 17.80Q154.24 16.55 154.85 15.55Q155.45 14.56 156.51 14.00Q157.58 13.43 158.91 13.43L158.91 13.43Q160.24 13.43 161.30 14.00Q162.36 14.56 162.97 15.55Q163.58 16.55 163.58 17.80L163.58 17.80Q163.58 19.05 162.97 20.04Q162.36 21.04 161.30 21.60Q160.24 22.17 158.91 22.17L158.91 22.17Q157.58 22.17 156.51 21.60Q155.45 21.04 154.85 20.04Q154.24 19.05 154.24 17.80ZM156.64 17.80L156.64 17.80Q156.64 18.51 156.94 19.05Q157.24 19.60 157.76 19.90Q158.27 20.20 158.91 20.20L158.91 20.20Q159.55 20.20 160.06 19.90Q160.58 19.60 160.88 19.05Q161.17 18.51 161.17 17.80L161.17 17.80Q161.17 17.09 160.88 16.54Q160.58 16 160.06 15.70Q159.55 15.40 158.91 15.40L158.91 15.40Q158.27 15.40 157.76 15.70Q157.24 16 156.94 16.54Q156.64 17.09 156.64 17.80Z"
						fill="#FFFFFF"
						// x="94.76"
					/>
				</svg>
			</a>
			<h1 class={style.title}>Premio Design System</h1>
			<div class={style.subtitle} style={{ "margin-bottom": "40px" }}>
				Condensed UI for Web application
			</div>
			<ProgressCircleCard />
			<ActionButtonCard />
			<TriggerButtonCard />
			<TriggerButtonGroupCard />
			<HeaderBarCard />
			<CardCard />
			<ToolbarCard />
			<DialogCard />
			<AlertDialogCard />
			<TagCard />
			<ColoredLabelCard />
			<CalloutCard />
			<TextFieldCard />
			<CheckboxCard />
			<SwitchCard />
			<RadioCard />
			<ListBoxCard />
		</div>
	);
};

export default Components;
