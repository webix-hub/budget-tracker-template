import {userTemplate} from "./userTemplate";

export const header = {
	view: "toolbar",
	css: "webix_dark darkHeader",
	paddingX: 10,
	paddingY: 6,
	cols: [
		{
			view: "icon",
			icon: "mdi mdi-menu"
		},
		{
			view: "label",
			label: "BUDGET TRACKER"
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-information"
		},
		{
			view: "icon",
			icon: "mdi mdi-bell",
			badge: 5
		},
		{
			view: "icon",
			icon: "mdi mdi-settings"
		},
		{
			width: 10
		},
		userTemplate
	]
};
