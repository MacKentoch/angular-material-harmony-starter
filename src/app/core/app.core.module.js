/* global angular */
const CORE_MODULE_NAME = 'app.core.module';

const CORE_MODULE_INJECT = [
	'ngAria',
	'ngAnimate',
	'ngMaterial',
	'ngSanitize',
	'ui.router'
];

export default angular
								.module(CORE_MODULE_NAME, CORE_MODULE_INJECT);