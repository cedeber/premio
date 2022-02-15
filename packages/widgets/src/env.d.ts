/**
 * @see https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
 * We trick TS with `export = *` in order to make it accept `import * as style from *.scss`
 */

// CSS modules
type CSSModuleClasses = { readonly [key: string]: string };

declare module "*.module.css" {
	const classes: CSSModuleClasses;
	export default classes;
	export = classes;
}
declare module "*.module.scss" {
	const classes: CSSModuleClasses;
	export default classes;
	export = classes;
}
declare module "*.module.sass" {
	const classes: CSSModuleClasses;
	export default classes;
	export = classes;
}

// CSS
declare module "*.css" {
	const css: string;
	export default css;
	export = classes;
}
declare module "*.scss" {
	const css: string;
	export default css;
	export = classes;
}
declare module "*.sass" {
	const css: string;
	export default css;
	export = classes;
}
