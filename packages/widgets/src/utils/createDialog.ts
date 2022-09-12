import type { AriaOverlayProps } from "@solid-aria/primitives";
import { createOverlay, createOverlayTrigger } from "@solid-aria/primitives";
import { mergeProps } from "solid-js";

export const createDialog = <R extends HTMLElement>(
	dialogRef: R,
	options: AriaOverlayProps = {},
) => {
	const {
		triggerProps,
		overlayProps: overlayTriggerProps,
		state,
	} = createOverlayTrigger({ type: "dialog" });
	const { overlayProps, underlayProps } = createOverlay(
		{
			onClose: state.close,
			isOpen: state.isOpen,
			...options,
		},
		() => dialogRef,
	);

	return {
		triggerProps,
		dialogProps: mergeProps(overlayTriggerProps, overlayProps),
		underlayProps,
		state,
	};
};
