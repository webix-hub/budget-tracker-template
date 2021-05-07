import {dataSidebar} from "../data/dataSidebar";

export const sidebar = {
	view: "sidebar",
	css: "webix_dark darkSidebar",
	select: true,
	width: 158,
	data: dataSidebar,
	ready() {
		this.select(1);
	}
};
