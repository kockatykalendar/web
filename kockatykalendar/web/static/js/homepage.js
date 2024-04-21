const load_json = async url => {
	const response = await fetch(url)
	if (response.ok) {
		const jsonValue = await response.json()
		return Promise.resolve(jsonValue)
	} else {
		return []
	}
}

const DEFAULT_ORGANIZERS = ['trojsten', 'p-mat', 'riesky', 'sezam', 'strom']
const DATA_URL_PREFIX = 'https://data.kockatykalendar.sk'

let ORGANIZERS = load_json(`${DATA_URL_PREFIX}/organizers.json`)


document.addEventListener('DOMContentLoaded', async () => {
	ORGANIZERS = await ORGANIZERS
	DEFAULT_ORGANIZERS.forEach(org => {
		let element = document.createElement("organizer-element");
		element.setAttribute("color", ORGANIZERS[org].color);
		element.setAttribute("link", ORGANIZERS[org].web);
		element.setAttribute("icon", `${DATA_URL_PREFIX}/${ORGANIZERS[org].icon}`);
		element.setAttribute("name", ORGANIZERS[org].name);
		let info =document.createElement("p");
		info.textContent = ORGANIZERS[org].info;
		info.setAttribute("slot", "info");
		element.appendChild(info);
		document.getElementById('organizations').appendChild(element);
	});
})
