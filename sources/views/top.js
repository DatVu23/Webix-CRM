import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		const header = {
			id: "header",
			type: "header",
			template: "Contacts",
			css: "app-left-panel top-header",
			borderless: true
		};

		let menu = {
			view: "menu",
			id: "top:menu",
			width: 180,
			layout: "y",
			select: true,
			template: "<span class='webix_icon fa-#icon#'></span> #value# ",
			data: [
				{value: _("Contacts"), id: "contacts", icon: "mail"},
				{value: _("Activities"), id: "activities"},
				{value: _("Settings"), id: "settings"}
			]
		};

		const ui = {
			rows: [header, {cols: [
				{type: "clean",
					css: "app-left-panel",
					padding: 10,
					margin: 20,
					borderless: true,
					rows: [menu]},
				{rows: [{height: 10},
					{type: "clean",
						css: "app-right-panel",
						padding: 4,
						rows: [
							{$subview: true}
						]}
				]}
			]
			}
			]
		};

		return ui;
	}
	init() {
		this.use(plugins.Menu, "top:menu");
	}

	urlChange(view, url) {
		let header = $$("header");
		header.config.template = webix.template(url[1].page);
		header.refresh();
	}
}
