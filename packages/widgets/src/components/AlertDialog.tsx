import style from "../styles/Dialog.module.scss";
import { ActionButton, ActionButtonIntent } from "./ActionButton";

export const AlertDialog = (props) => {
	return (
		<div
			class={style.dialog}
			classList={{ [style.centered]: false }}
			style={{ width: "320px" }}
		>
			<div class={style.roundedContainer}>
				<div class={style.alertTitle}>Delete file</div>
				<div class={style.alertContent}>{props.children}</div>
			</div>
			<div class={style.footer}>
				{/*<Callout title={"Error"} intent={CalloutIntent.Danger}>*/}
				{/*	The file doesn't exist anymore. Deleted by someone else?*/}
				{/*</Callout>*/}
				<div class={style.buttons}>
					<div>{/* No secondary button */}</div>
					<div class={style.buttonGroup}>
						<ActionButton
							label={"Cancel"}
							onPress={() => props.closeFn?.()}
							intent={ActionButtonIntent.Gray}
						/>
						<ActionButton
							intent={ActionButtonIntent.Danger}
							label={"Delete"}
							icon="delete"
						/>
					</div>
				</div>
			</div>
			<div
				class={style.arrow}
				data-placement={"top"}
				style={{ left: "160px", top: "100%" }}
				{...props.arrowProps}
			/>
		</div>
	);
};
