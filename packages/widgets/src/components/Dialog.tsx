import style from "../styles/Dialog.module.scss";
import { ActionButton, ActionButtonIntent } from "./ActionButton";
import { HeaderBar, HeaderDivider } from "./HeaderBar";
import { TriggerButton, TriggerButtonIntent } from "./TriggerButton";

export const Dialog = (props) => {
	return (
		<div
			class={style.dialog}
			classList={{ [style.centered]: false }}
			style={{ width: "510px" }}
		>
			<div class={style.roundedContainer}>
				<HeaderBar
					icon={"face"}
					title={"Sign in to Premio"}
					actions={[
						<TriggerButton
							icon={"install_mobile"}
							label={"Download the application"}
						/>,
						<HeaderDivider />,
						<TriggerButton
							icon={"close"}
							label={"Close"}
							intent={TriggerButtonIntent.Danger}
						/>,
					]}
					class={style.headerBar}
				/>
				{props.children}
			</div>
			<div class={`${style.footer} ${style.footerBar}`}>
				{/*<Callout title={"Incorrect username or password."} intent={CalloutIntent.Danger} />*/}
				<div class={style.buttons}>
					<div>
						<ActionButton
							intent={ActionButtonIntent.Gray}
							label={"Create an account"}
							icon="person_add"
						/>
					</div>
					<div class={style.buttonGroup}>
						<ActionButton
							label={"Cancel"}
							onPress={() => props.closeFn?.()}
							intent={ActionButtonIntent.Plain}
						/>
						<ActionButton
							intent={ActionButtonIntent.Filled}
							label={"Sign in"}
							icon="login"
						/>
					</div>
				</div>
			</div>
			{props.arrowProps && <div class={style.arrow} {...props.arrowProps} />}
		</div>
	);
};
