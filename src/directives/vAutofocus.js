// Directives must be camel case, starting with lower case v
// vAutofocus becomes v-autofocus.  Don't use vAutoFocus!
export const vAutofocus = {
	mounted: (el) => {
		el.focus()
	}
}