import { FC, useEffect, useRef, useState } from "react";

const useAnimationFrame = (callback: (d: number) => void) => {
	// Use useRef for mutable variables that we want to persist
	// without triggering a re-render on their change
	const requestRef = useRef<number>();
	const previousTimeRef = useRef<number>();

	const animate = (time: number) => {
		if (previousTimeRef.current != undefined) {
			const deltaTime = time - previousTimeRef.current;
			callback(deltaTime);
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		requestRef.current = window.requestAnimationFrame(animate);
		return () => window.cancelAnimationFrame(requestRef.current ?? 0);
	}, []); // Make sure the effect runs only once
};

const Anim: FC = (props) => {
	const [rotate, setRotate] = useState(0);

	useAnimationFrame((deltaTime) => {
		setRotate((prevCount) => (prevCount + deltaTime * (30 / 100)) % 360);
	});

	return (
		<svg
			className="-ml-1 mr-3 h-5 w-5 text-white"
			style={{ transform: `rotate(${rotate}deg)` }}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			></circle>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	);
};

export { Anim };
