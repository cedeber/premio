import type { GUIController } from "dat.gui";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGuiStore } from "../stores/gui";
import { uid as getUid } from "@cedeber/frontafino";

/**
 * @param name The text that will ne shown on the UI
 * @param value The value of the default controller
 * @param props Other controller properties like min, max...
 */
function useDatGui<T>(name: string, value: T, ...props: any): T {
	// GUI is defined only once for all instances
	const gui = useGuiStore(useCallback((state) => state.gui, []));

	// For Fast Refresh we need different uid for each updates
	const [uid] = useState("__" + getUid());

	// dat.gui needs an object but we return directly the value
	const [obj, setObj] = useState({
		[uid]: value,
	});

	// Keep a ref of the controller to be able to remove it once the component is unmounted
	const controller = useRef<GUIController>();

	useEffect(() => {
		controller.current = gui
			.add(obj, uid, ...props)
			.name(name)
			.onChange((val) => setObj({ [uid]: val }));

		// remove the controller from dat.gui
		return function cleanup() {
			controller.current?.remove();
		};
	}, []);

	// Return directly the value, no need for destructuring
	// It also allows to choose the variable name freely
	return obj[uid];
}

export { useDatGui };
