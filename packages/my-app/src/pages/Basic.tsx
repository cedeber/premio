import type { FC } from "react";
import { useMessageFormatter } from "react-aria";
import messages from "../intl";
import * as style from "./styles/default.module.scss";

const Basic: FC = () => {
	const formatMessage = useMessageFormatter(messages);

	return (
		<>
			<h1 className="bg-slate-100">Basic</h1>
			<p>{formatMessage("greeting", { name: "World" })}</p>
		</>
	);
};

export { Basic };
