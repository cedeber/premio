import { Callout, CalloutIntent, Card } from "widgets";

import style from "../styles/common.module.scss";

export const CalloutCard = () => {
	return (
		<Card title={"Callout"} icon={"sticky_note_2"} subtitle={"Info Messages"}>
			<div class={style.horizontal} style={{ margin: "10px" }}>
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
			<div class={style.horizontal} style={{ margin: "10px" }}>
				<Callout title={"Inline Callout."} style={{ "max-width": "320px" }} inline>
					Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf
					gal non Gal ! yeuh. Pfourtz ! Christkindelsmärik leo auctor, leo ac geht's sit
					und Richard Schirmeck vulputate ftomi!
				</Callout>
				<Callout
					title={"Error Callout."}
					style={{ "max-width": "320px" }}
					intent={CalloutIntent.Error}
				>
					This one is always inline and is designed to be used on forms.
				</Callout>
			</div>
		</Card>
	);
};
