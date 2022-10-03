import { Card, Switch } from "widgets";

import style from "../styles/common.module.scss";

export const SwitchCard = () => {
	return (
		<Card title={"Switch"} subtitle={"Single Checkbox"} icon={"toggle_on"}>
			<div class={style.vertical} style={{ margin: "10px" }}>
				<Switch>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur.
				</Switch>
				<Switch>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</Switch>
				<Switch isReadOnly defaultSelected>
					Anim id est laborum.
				</Switch>
				<Switch isDisabled defaultSelected>
					Anim id est laborum.
				</Switch>
			</div>
		</Card>
	);
};
