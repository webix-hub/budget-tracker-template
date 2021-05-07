import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {userMenu} from "./js/userMenu";
import {topbar} from "./js/topbar";
import {budget} from "./js/budget";
import {activity} from "./js/activity";
import {cards} from "./js/cards";
import {category} from "./js/category";
import {history} from "./js/history";
import "./js/headerCheckbox";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		css: "bgLight",
		cols: [
			{},
			{
				maxWidth: 1410,
				gravity: 1000,
				rows: [
					header,
					{
						type: "clean",
						cols: [
							sidebar,
							{
								type: "space",
								rows: [
									topbar,
									{
										margin: 10,
										cols: [
											budget,
											activity
										]
									},
									{
										margin: 10,
										cols: [
											{
												margin: 10,
												rows: [
													cards,
													category
												]
											},
											history
										]
									}
								]
							}
						]
					}
				]
			},
			{}
		]
	});

	webix.ui(userMenu);
});
