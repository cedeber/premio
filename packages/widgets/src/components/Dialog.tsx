import style from "../styles/Dialog.module.scss";
import { ActionButton, ActionButtonIntent, ActionButtonProps } from "./ActionButton";
import { HeaderBar, HeaderDivider } from "./HeaderBar";
import type { JSX, Ref } from "solid-js";
import { mergeProps, Show } from "solid-js";
import { Callout, CalloutIntent } from "./Callout";
import {
	createDialog,
	createModal,
	createPreventScroll,
	FocusScope,
	OverlayContainer,
} from "@solid-aria/primitives";
import { mergeRefs } from "@solid-primitives/refs";
import { TriggerButton, TriggerButtonIntent } from "./TriggerButton";

interface DialogProps {
	ref?: Ref<HTMLDivElement | undefined>;
	underlayProps: JSX.HTMLAttributes<HTMLElement>;
	id?: string;
	dialogProps?: JSX.HTMLAttributes<HTMLElement>;
	closeFn: () => void;
	mainButton: Pick<ActionButtonProps, "icon" | "progress" | "onPress" | "isDisabled" | "label">;
	secondaryButton: Pick<
		ActionButtonProps,
		"icon" | "progress" | "onPress" | "isDisabled" | "label"
	>;
	class?: string;
	/** Will be a Danger Callout by default */
	errorCallout?: { title?: string; intent?: CalloutIntent; message?: JSX.Element | string };
	children: JSX.Element;
	cancelButtonLabel?: string;
	style?: JSX.CSSProperties;
	title: string;
	subtitle?: string;
	icon?: string;
	actions?: JSX.Element[];
}

export const Dialog = (props: DialogProps) => {
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
						<HeaderBar
							icon={props.icon}
							title={props.title}
							actions={[
								...(props.actions ?? []),
								<HeaderDivider />,
								<TriggerButton
									icon={"close"}
									label={"Close"}
									intent={TriggerButtonIntent.Danger}
									onPress={() => props.closeFn()}
								/>,
							]}
							class={style.headerBar}
							titleProps={titleProps}
						/>
						{props.children}
					</div>
					<div class={`${style.footer} ${style.footerBar}`}>
						<Show when={!!props.errorCallout}>
							<Callout
								title={props.errorCallout?.title}
								intent={props.errorCallout?.intent ?? CalloutIntent.Danger}
								inline
							>
								{props.errorCallout?.message}
							</Callout>
						</Show>
						<div class={style.buttons}>
							<div>
								<Show when={!!props.secondaryButton}>
									<ActionButton
										intent={ActionButtonIntent.Gray}
										{...props.secondaryButton}
									/>
								</Show>
							</div>
							<div class={style.buttonGroup}>
								<ActionButton
									label={props.cancelButtonLabel ?? "Cancel"}
									onPress={() => props.closeFn?.()}
									intent={ActionButtonIntent.Plain}
								/>
								<ActionButton
									intent={ActionButtonIntent.Filled}
									{...props.mainButton}
								/>
							</div>
						</div>
					</div>
					{/*{props.arrowProps && <div class={style.arrow} {...props.arrowProps} />}*/}
				</div>
			</FocusScope>
		</OverlayContainer>
	);
};
