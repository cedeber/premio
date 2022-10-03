import { Show } from "solid-js";
import { ActionButton, Card, createDialog, Dialog, TriggerButton } from "widgets";

export const DialogCard = () => {
	let dialogRef!: HTMLDivElement;
	const dialog = createDialog(dialogRef);

	return (
		<Card title={"Dialog"} icon={"quickreply"} subtitle={"A Card with Buttons"}>
			<div style={{ margin: "10px" }}>
				<ActionButton
					label={"Open Dialog"}
					onPress={dialog.state.open}
					domProps={dialog.triggerProps}
				/>
				<Show when={dialog.state.isOpen()}>
					<Dialog
						closeFn={dialog.state.close}
						underlayProps={dialog.underlayProps}
						dialogProps={dialog.dialogProps}
						style={{ width: "480px" }}
						title={"Sign in to Premio"}
						icon={"face"}
						actions={[
							<TriggerButton
								icon={"install_mobile"}
								label={"Download the application"}
							/>,
						]}
						ref={dialogRef}
						mainButton={{ label: "Sign in", icon: "login" }}
						secondaryButton={{ label: "Create an account", icon: "person_add" }}
					>
						<div style={{ padding: "10px", "background-color": "#fdf4ff" }}>
							This is the un-styled scrollable content. It's up to the developer to
							set the padding and the overflow, as needed.
						</div>
					</Dialog>
				</Show>
			</div>
		</Card>
	);
};
