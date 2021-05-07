import {dataBudget} from "../data/dataBudget";

export const budget = {
	height: 204,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "All Budget"
				}
			]
		},
		{
			view: "scrollview",
			scroll: "auto",
			body: {
				rows: [
					{
						view: "dataview",
						xCount: 3,
						type: {
							width: 251,
							height: 151,
							type: "tiles",
							css: "budgetItem"
						},
						template(obj) {
							const html = `
								<div class='flex'>
									<div class='budgetCell flex'>
										<span class='budgetTitle'>${obj.title}</span>
										<span class='budgetType'>${obj.type}</span>
									</div>
									<div class='budgetCellTotal flex' style='border-color: ${obj.color}'>
										<span class='sign'>$</span>
										<span class='budgetTotal'>${obj.total}</span>
									</div>
								</div>
							`;
							return html;
						},
						data: dataBudget
					}
				]
			}
		}
	]
};
