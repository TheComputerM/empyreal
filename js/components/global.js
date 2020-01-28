import anime from "animejs";
window.anime = anime;

import AOS from "aos";
AOS.init();

import Waves from "node-waves";
Waves.init();
window.Waves = Waves;

import c from "cash-dom/dist/cash.min";

c.fn.size = function() {
	return this[0].getClientRects()[0]
}

let E = {};

E.keys = {
	TAB: 9,
	ENTER: 13,
	ESC: 27,
	ARROW_UP: 38,
	ARROW_DOWN: 40
};

/**
 * Get Trigger Element
 * @param {Object} QueryObj Details and Attributes of the target elements
 */
E.getTrigger = function(QueryObj) {
	let QueryElements = [];
	for (let element in QueryObj) {
		let ElementObj = QueryObj[element];
		let requiredParameters = `${element}`;
		let ElementQueryStrings = [];

		for (let attribute in ElementObj) {
			let AttributeObj = ElementObj[attribute];
			if (attribute != "optional") {
				if (attribute == "class") requiredParameters += `.${AttributeObj}`;
				else if (attribute == "id") requiredParameters += `#${AttributeObj}`;
				else requiredParameters += `[${attribute}='${AttributeObj}']`;
			}
		}

		for (let OptionalAttr in ElementObj["optional"]) {
			let OptionalAttrObj = ElementObj["optional"][OptionalAttr];
			ElementQueryStrings.push(
				`${requiredParameters}[${OptionalAttr}='${OptionalAttrObj}']`
			);
		}

		QueryElements.push(...ElementQueryStrings);
	}

	return document.querySelectorAll(QueryElements.join(", "));
};

/**
 * Generates UUID for elements
 * @returns {string}
 */
E.generateUUID = () => {
	function uuid() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return `${uuid() + uuid()}-${uuid()}-${uuid()}-${uuid()}-${uuid() +
		uuid() +
		uuid()}`;
};

/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */
E.getDocumentScrollTop = function() {
	return (
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0
	);
};

/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */
E.getDocumentScrollLeft = function() {
	return (
		window.pageXOffset ||
		document.documentElement.scrollLeft ||
		document.body.scrollLeft ||
		0
	);
};

export { anime, Waves, c, E };
