import {
	createDialog,
	createModal,
	createPreventScroll,
	FocusScope,
	OverlayContainer,
} from "@solid-aria/primitives";
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, Ref } from "solid-js";
import { mergeProps, Show } from "solid-js";

import style from "../styles/Dialog.module.scss";
import { ActionButton, ActionButtonIntent, ActionButtonProps } from "./ActionButton";
import { Callout, CalloutIntent } from "./Callout";

interface AlertDialogProps {
	ref?: Ref<HTMLDivElement | undefined>;
	underlayProps: JSX.HTMLAttributes<HTMLElement>;
	id?: string;
	dialogProps?: JSX.HTMLAttributes<HTMLElement>;
	closeFn: () => void;
	mainButton: Pick<ActionButtonProps, "icon" | "progress" | "onPress" | "isDisabled" | "label">;
	class?: string;
	/** Will be a Danger Callout by default */
	errorCallout?: { title?: string; intent?: CalloutIntent; message?: JSX.Element | string };
	children: JSX.Element;
	cancelButtonLabel?: string;
	// Just to make the title optional (unlike for HeaderBar)
	style?: JSX.CSSProperties;
	title?: string;
}

export const AlertDialog = (props: AlertDialogProps) => {
	let ref!: HTMLDivElement;

	const { dialogProps, titleProps } = createDialog({ role: "dialog" }, () => ref);
	const { modalProps } = createModal();

	createPreventScroll();

	return (
		<OverlayContainer
			{...(props.underlayProps ?? {})}
			class={props.underlayProps ? style.overlay : undefined}
		>
			<FocusScope contain restoreFocus autofocus>
				<div
					ref={mergeRefs((el) => (ref = el), props.ref)}
					class={style.dialog}
					style={props.style}
					{...mergeProps(props.dialogProps, dialogProps, modalProps)}
				>
					<div class={style.roundedContainer}>
						<div class={style.alertTitle} {...titleProps}>
							{props.title}
						</div>
						<div class={style.alertContent}>{props.children}</div>
					</div>
					<div class={style.footer}>
						<Show when={!!props.errorCallout}>
							<Callout
								title={props.errorCallout?.title}
								intent={props.errorCallout?.intent ?? CalloutIntent.Error}
								inline
							>
								{props.errorCallout?.message}
							</Callout>
						</Show>
						<div class={style.buttons}>
							<div>{/* No secondary button */}</div>
							<div class={style.buttonGroup}>
								<ActionButton
									label={props.cancelButtonLabel ?? "Cancel"}
									onPress={() => props.closeFn?.()}
									intent={ActionButtonIntent.Gray}
								/>
								<ActionButton
									intent={ActionButtonIntent.Danger}
									{...props.mainButton}
								/>
							</div>
						</div>
					</div>
					{/*<div*/}
					{/*	class={style.arrow}*/}
					{/*	data-placement={"top"}*/}
					{/*	style={{ left: "160px", top: "100%" }}*/}
					{/*	{...props.arrowProps}*/}
					{/*/>*/}
				</div>
			</FocusScope>
		</OverlayContainer>
	);
};
