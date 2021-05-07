import {dataHistory} from "../data/dataHistory";

export const history = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "History"
				}
			]
		},
		{
			view: "datatable",
			css: "historyTable webix_data_border webix_header_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 41},
				{id: "date", header: "Date", width: 86},
				{id: "description", header: "Description", minWidth: 400, fillspace: true, template: "<span class='ellipsis'>#description#</span>"},
				{id: "category", header: "Category", width: 124, template: "<span class='strong'>#category#</span>"},
				{id: "spent", header: "Spent", width: 102, template: "<span class='sign'>$</span>#spent#"},
				{id: "remaining", header: "Remaining", width: 110, template: "<span class='sign'>$</span>#remaining#"}
			],
			rowHeight: 54,
			data: dataHistory
		}
	]
};
