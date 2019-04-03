/**
* A hello world controller. This file is in cartridge/controllers folder
* @module controllers JHelloWorld
*/
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	ISML.renderTemplate(
			'Hello.isml', {
			myParameteronISML:
			"Hello from Controllers"
			}
			); 
};

function start2() {
	ISML.renderTemplate(
			'a1.isml'
			);
};
exports.Start = guard.ensure(['get'], start);
exports.Start2 = guard.ensure(['get'], start2); 