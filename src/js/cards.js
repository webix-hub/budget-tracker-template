let img = obj => `<img src='${obj.src}' />`;

export const cards = {
	width: 294,
	height: 200,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "My Credit Card"
				}
			]
		},
		{
			view: "carousel",
			css: "cards",
			height: 155,
			cols: [
				{template: img, data: {src: "./cards/payCard.png"}},
				{template: img, data: {src: "./cards/payCard.png"}}
			],
			navigation: {
				type: "side",
				items: false
			}
		}
	]
};
