import {
	Callout,
	CalloutIntent,
	Card,
	HeaderBar,
	HeaderDivider,
	SimpleTextField,
	TextField,
	TriggerButton,
	TriggerButtonGroup,
} from "widgets";

import style from "../styles/common.module.scss";

export const TextFieldCard = () => {
	return (
		<Card title={"Text Field and Simple Text Field"} icon={"title"} subtitle={"Form"}>
			<div class={style.horizontal} style={{ margin: "10px 0", "align-items": "self-start" }}>
				<div class={style.vertical} style={{ flex: "1" }}>
					<TextField label={"Label"} />
					<TextField label={"Label"} placeholder={"Placeholder"} />
					<TextField label={"Label"} icon={"search"} placeholder={"With an icon"} />
					<TextField
						label={"Label"}
						description={"This is a description of the field."}
					/>
					<TextField
						label={"Label"}
						placeholder={"With an action"}
						action={<TriggerButton icon={"visibility_off"} label={"Delete"} />}
					/>
					<TextField label={"Label"} value={"Hello, world!"} isReadOnly />
					<TextField label={"Label"} errorMessage={"This is an error message."} />
					<TextField
						label={"Label"}
						placeholder={"Placeholder"}
						description={"This is a description of the field."}
						errorMessage={"This is an error message."}
					/>
					<TextField
						label={"Disabled"}
						placeholder={"Placeholder"}
						description={"This is a description of the field."}
						errorMessage={"This is an error message."}
						isDisabled
					/>
				</div>
				<div class={style.vertical} style={{ flex: "1" }}>
					<Callout title={"Usage"} intent={CalloutIntent.Warning}>
						The <strong>Simple Text Field</strong> is dedicated to{" "}
						<strong>HeaderBar</strong>, which does not have that much space for large
						inputs.
					</Callout>
					<SimpleTextField label={"Simple Label"} />
					<SimpleTextField label={"Simple Label"} placeholder={"Placeholder"} />
					<SimpleTextField
						label={"Simple Label"}
						icon={"filter_alt"}
						action={<TriggerButton icon={"expand_more"} label={"Menu"} />}
					/>
					<SimpleTextField
						label={"Simple Label"}
						placeholder={"We have a problem"}
						errorMessage={"This is wrong"}
					/>
					<SimpleTextField label={"Simple Label"} placeholder={"Disabled"} isDisabled />
					<HeaderBar
						actions={[
							<TriggerButtonGroup>
								<TriggerButton icon={"format_align_left"} label={"Left"} />
								<TriggerButton icon={"format_align_center"} label={"Middle"} />
								<TriggerButton icon={"format_align_right"} label={"Right"} />
							</TriggerButtonGroup>,
							<HeaderDivider />,
							<SimpleTextField
								label={"Simple Label"}
								icon={"filter_alt"}
								action={<TriggerButton icon={"expand_more"} label={"Menu"} />}
								style={{ width: "180px" }}
							/>,
						]}
					/>
				</div>
			</div>
		</Card>
	);
};
