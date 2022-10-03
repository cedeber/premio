import { createSignal, Show } from "solid-js";
import { ActionButton, AlertDialog, Card, createDialog } from "widgets";

export const AlertDialogCard = () => {
	let alertRef!: HTMLDivElement;
	const alert = createDialog(alertRef);
	const [error, setError] = createSignal<string>();

	return (
		<Card title={"Alert Dialog"} icon={"exclamation"} subtitle={"Show a dangerous Alert"}>
			<div style={{ margin: "10px" }}>
				<ActionButton
					label={"Open AlertDialog"}
					onPress={alert.state.open}
					domProps={alert.triggerProps}
				/>
				<Show when={alert.state.isOpen()}>
					<AlertDialog
						title={"Delete file"}
						closeFn={() => {
							alert.state.close();
							setError(undefined);
						}}
						mainButton={{
							label: "Yes, delete that file",
							icon: "delete",
							onPress: () => setError("This file doesn't exist."),
						}}
						dialogProps={alert.dialogProps}
						underlayProps={alert.underlayProps}
						errorCallout={error() ? { message: error() } : undefined}
						ref={alertRef}
					>
						Are you sure you want to delete <strong>README.md</strong>?
					</AlertDialog>
				</Show>
			</div>
		</Card>
	);
};
