import {dataActivity} from "../data/dataActivity";

export const activity = {
	height: 204,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Activity"
				}
			]
		},
		{
			type: "clean",
			cols: [
				{
					view: "chart",
					type: "stackedBar",
					barWidth: 14,
					width: 328,
					padding: {top: 12, left: 12, right: 6},
					xAxis: {
						template(obj) {
							return webix.Date.dateToStr("%D")(obj.day);
						}
					},
					yAxis: {
						template: "",
						start: 0,
						step: 25,
						end: 100
					},
					series: [
						{
							value: "#income#",
							color: "#1CA1C1"
						},
						{
							value: "#spent#",
							color: "#FF5C4C"
						}
					],
					legend: {
						layout: "x",
						toggle: false,
						values: [
							{text: "Income", color: "#1CA1C1"},
							{text: "Spent", color: "#FF5C4C"}
						],
						marker: {type: "round", width: 5, height: 5},
						valign: "bottom",
						align: "center"
					},
					data: dataActivity
				},
				{
					css: "bgWhite",
					margin: 8,
					padding: 8,
					width: 126,
					rows: [
						{
							view: "richselect",
							value: 1,
							width: 112,
							height: 30,
							options: [
								{id: 1, value: "Weekly"},
								{id: 2, value: "Monthly"}
							]
						},
						{
							view: "template",
							css: "activityMap",
							borderless: true,
							template() {
								let html = `
									<div class='activityTotal flex'>
										<div class='activityItem flex income'>
											<span class='sign'>$</span>
											<span>20, 000.00</span>
										</div>
										<div class='activityItem flex spent'>
											<span class='sign'>$</span>
											<span>9, 500.00</span>
										</div>
									</div>
								`;
								return html;
							}
						}
					]
				}
			]
		}
	]
};
