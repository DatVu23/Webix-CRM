export const users = new webix.DataCollection({
	url: "http://localhost:8096/api/v1/contacts/", save: "rest-> http://localhost:8096/api/v1/contacts/"
});

export function getInfo() {
	return users.waitData.then(webix.bind(function () {
		let options = [];
		users.data.each(function (obj) {
			options.push({id: obj.id, value: `${obj.FirstName} ${obj.LastName} ${obj.Email}`});
		});
		return options;
	}));
}

export function setUsers(id, data) {
	if (!id) {
		users.add(data);
	}
	else {
		users.updateItem(id, data);
	}
}

export function removeUsers(id, data) {
	users.remove(id, data);
}
