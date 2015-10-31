/* global angular */
import './app.vendors';
import appConfig			from './config/app.config.function';
import coreModule			from './core/app.core.module';
import homeCtrlModule from './components/home/app.home.module';

const APP_MODULE_NAME = 'appDemo';

const APP_MODULE_INJECT = [
	coreModule.name,
	homeCtrlModule.name
];

let appModule = angular
								.module(APP_MODULE_NAME, APP_MODULE_INJECT)
								.config(appConfig);
								
export default appModule;