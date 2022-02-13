import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { OverlayContainer } from "react-aria";
import style from "./styles/Tooltip.module.scss";

interface TooltipProps {
	tooltipProps: HTMLAttributes<Element>;
	arrowProps?: HTMLAttributes<Element>;
	children?: ReactNode;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
	return (
		<OverlayContainer>
			<div className={style.tooltip} {...props.tooltipProps} ref={ref}>
				{props.children}
				{props.arrowProps && <div className={style.arrow} {...props.arrowProps} />}
			</div>
		</OverlayContainer>
	);
});

export { Tooltip };
