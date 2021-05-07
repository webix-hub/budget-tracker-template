import {dataCategory} from "../data/dataCategory";

export const category = {
	width: 294,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Category"
				}
			]
		},
		{
			view: "list",
			type: {
				width: 294,
				height: 86,
				css: "categoryItemWrapp"
			},
			template(obj) {
				const html = `
                    <div class='categorytItem flex'>
                        <span class='categoryTitle'>${obj.title}</span>
						<span class='categoryLevel flex ${obj.color}'>
							<span style='width: ${obj.level}%'></span>
						</span>
						<span class='categoryInfo flex'>
							<span class='categoryTransactions'>${obj.transactions} transactions</span>
							<span>
								<span class='sign'>$</span>
								<span>${obj.total}</span>
							</span>
						</span>
                    </div>
                `;
				return html;
			},
			data: dataCategory
		}
	]
};
