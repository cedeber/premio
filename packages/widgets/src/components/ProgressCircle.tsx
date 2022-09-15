import { createProgressBar } from "@solid-aria/primitives";

interface ProgressCircleProps {
	size?: number;
	progress?: number;
}

export const ProgressCircle = (props: ProgressCircleProps) => {
	const isIndeterminate = props.progress == undefined || props.progress === -1;

	const { progressBarProps } = createProgressBar({
		isIndeterminate,
		minValue: 0,
		maxValue: 100,
		value: isIndeterminate ? undefined : props.progress,
		"aria-label": "Loading...",
	});

	const size = props.size ?? 32;
	const center = size / 2;
	const strokeWidth = 2;
	const r = center - strokeWidth;
	const c = 2 * r * Math.PI;
	const offset = c - ((isIndeterminate ? 30 : props.progress ?? 30) / 100) * c;

	return (
		<svg
			{...progressBarProps}
			width={center * 2}
			height={center * 2}
			viewBox={`0 0 ${center * 2} ${center * 2}`}
			fill="none"
			stroke-width={strokeWidth}
		>
			<circle cx={center} cy={center} r={r} stroke="currentColor" opacity={0.13} />
			<circle
				cx={center}
				cy={center}
				r={r}
				stroke="currentColor"
				stroke-dasharray={c.toString()}
				stroke-dashoffset={offset}
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					begin="0s"
					dur={isIndeterminate ? "1s" : "0s"}
					from={`90 ${center} ${center}`}
					to={`450 ${center} ${center}`}
					repeatCount={isIndeterminate ? "indefinite" : 0}
				/>
			</circle>
		</svg>
	);
};
