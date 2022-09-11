import {
	ActionButton,
	ActionButtonIconPlacement,
	ActionButtonIntent,
	AlertDialog,
	Callout,
	CalloutIntent,
	Dialog,
	HeaderBar,
	HeaderDivider,
	ProgressCircle,
	Tag,
	TagIntent,
	TriggerButton,
	TriggerButtonGroup,
	TriggerButtonIntent,
} from "widgets";
import style from "../styles/common.module.scss";

const Components = () => {
	return (
		<div class={style.page}>
			Lorem Elsass ipsum nüdle bredele ornare purus placerat sagittis.
			<HeaderBar
				title={"Progress Circle"}
				subtitle={"Indeterminate or with percentage"}
				icon={"autorenew"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
				<ProgressCircle size={24} />
				<ProgressCircle size={24} progress={62} />
			</div>
			<HeaderBar
				title={"Action Button"}
				subtitle={"Will Mutate data"}
				icon={"bolt"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
				<ActionButton
					label={"Filled"}
					onPress={() => {
						console.log("click");
					}}
				/>
				<ActionButton label={"Filled"} onPress={() => {}} progress={-1} />
				<ActionButton
					label={"Tinted"}
					intent={ActionButtonIntent.Tinted}
					onPress={() => {}}
				/>
				<ActionButton label={"Gray"} intent={ActionButtonIntent.Gray} onPress={() => {}} />
				<ActionButton
					label={"Outlined"}
					intent={ActionButtonIntent.Outlined}
					onPress={() => {}}
					icon={"arrow_right_alt"}
					iconPlacement={ActionButtonIconPlacement.Right}
				/>
				<ActionButton
					label={"Plain"}
					intent={ActionButtonIntent.Plain}
					onPress={() => {}}
				/>
				<HeaderDivider />
				<ActionButton
					label={"Danger"}
					intent={ActionButtonIntent.Danger}
					onPress={() => {}}
					icon="delete"
				/>
				<HeaderDivider />
				<ActionButton label={"Disabled"} onPress={() => {}} isDisabled />
			</div>
			<HeaderBar
				title={"Trigger Button"}
				subtitle={"Open Menus, Popovers, Dialogs..."}
				icon={"menu"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
				<TriggerButton icon={"save"} label={"Hello"} />
				<TriggerButton icon={"save"} label={"Hello"} progress={-1} />
				<TriggerButton icon={"save"} label={"Hello"} intent={TriggerButtonIntent.Tinted} />
				<TriggerButton
					icon={"save"}
					label={"Hello"}
					intent={TriggerButtonIntent.Outlined}
				/>
				<HeaderDivider />
				<TriggerButton
					icon={"delete"}
					label={"Delete"}
					intent={TriggerButtonIntent.Danger}
				/>
				<HeaderDivider />
				<TriggerButton icon={"save"} label={"Hello"} isDisabled />
			</div>
			<HeaderBar
				title={"Trigger Button Group"}
				subtitle={"Group Trigger Buttons"}
				icon={"view_column"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
				<TriggerButtonGroup>
					<TriggerButton icon={"format_align_left"} label={"Left"} />
					<TriggerButton icon={"format_align_center"} label={"Middle"} />
					<TriggerButton icon={"format_align_right"} label={"Right"} />
				</TriggerButtonGroup>
			</div>
			<HeaderBar title={"Tag"} icon={"sell"} class={style.headerBar} />
			<div class={style.horizontal}>
				<Tag label={"Primary"} intentColor={TagIntent.Primary} />
				<Tag label={"Secondary"} intentColor={TagIntent.Secondary} />
				<Tag label={"Success"} intentColor={TagIntent.Success} />
				<Tag label={"Warning"} intentColor={TagIntent.Warning} />
				<Tag label={"Danger"} intentColor={TagIntent.Danger} />
				<HeaderDivider />
				<Tag label={"Fuchsia"} intentColor={TagIntent.Fuchsia} />
				<Tag label={"Indigo"} intentColor={TagIntent.Indigo} />
				<Tag label={"Lime"} intentColor={TagIntent.Lime} />
				<HeaderDivider />
				<Tag label={"Outlined"} intentColor={TagIntent.Outlined} />
			</div>
			<HeaderBar
				title={"Header Bar"}
				icon={"format_h1"}
				subtitle={"Use me in Dialogs, Pages, Cards..."}
				class={style.headerBar}
			/>
			<HeaderBar
				title={"Header Bar"}
				subtitle={"A subtitle"}
				tag={"a tag"}
				icon={"settings"}
				actions={[
					<TriggerButton icon={"save"} label={"Save"} />,
					<TriggerButton icon={"input"} label={"Export"} />,
					<HeaderDivider />,
					<TriggerButton
						icon={"delete"}
						label={"Delete"}
						intent={TriggerButtonIntent.Danger}
					/>,
				]}
				style={{ width: "320px" }}
			/>
			<HeaderBar
				title={"Callout"}
				icon={"sticky_note_2"}
				subtitle={"Info Messages"}
				class={style.headerBar}
			/>
			<div class={style.horizontal}>
				<Callout title={"Info"} style={{ "max-width": "320px" }}>
					Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf
					gal non Gal ! yeuh. Pfourtz ! Christkindelsmärik leo auctor, leo ac geht's sit
					und Richard Schirmeck vulputate ftomi!
				</Callout>
				<Callout
					title={"Success"}
					intent={CalloutIntent.Success}
					style={{ "max-width": "320px" }}
				>
					Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf
					gal non Gal ! yeuh. Pfourtz ! Christkindelsmärik leo auctor, leo ac geht's sit
					und Richard Schirmeck vulputate ftomi!
				</Callout>
				<Callout
					title={"Warning"}
					intent={CalloutIntent.Warning}
					style={{ "max-width": "320px" }}
				>
					Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf
					gal non Gal ! yeuh. Pfourtz ! Christkindelsmärik leo auctor, leo ac geht's sit
					und Richard Schirmeck vulputate ftomi!
				</Callout>
				<Callout
					title={"Danger"}
					intent={CalloutIntent.Danger}
					style={{ "max-width": "320px" }}
				>
					Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf
					gal non Gal ! yeuh. Pfourtz ! Christkindelsmärik leo auctor, leo ac geht's sit
					und Richard Schirmeck vulputate ftomi!
				</Callout>
			</div>
			<HeaderBar
				title={"Dialog"}
				icon={"quickreply"}
				subtitle={"Styling only"}
				class={style.headerBar}
			/>
			<div>
				<Dialog>
					<div style={{ padding: "10px", "background-color": "#fdf4ff" }}>
						This is the un-styled scrollable content. It's up to the developer to set
						the padding and the overflow, as needed.
					</div>
				</Dialog>
			</div>
			<HeaderBar
				title={"Alert Dialog"}
				icon={"exclamation"}
				subtitle={"Styling only"}
				class={style.headerBar}
			/>
			<div>
				<AlertDialog>
					Are you sure you want to delete <strong>README.md</strong>?
				</AlertDialog>
			</div>
		</div>
	);
};

export default Components;
