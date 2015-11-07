/* global angular */

import './app.vendors';

import appConfig								from './config/app.config.function';
import appRun										from './run/app.run.function';
import coreModule								from './core/app.core.module';
import appRoute									from './route/app.route';
import avatarDirective					from './components/avatar/app.avatar.module';
import layoutCtrlModule 				from './components/layout/app.layout.module';
import homeCtrlModule 					from './components/home/app.home.module';
import newsCtrlModule 					from './components/news/app.news.module';
import signinCtrlModule 				from './components/signin/app.signin.module';
import searchBottomSheetModule	from './components/searchBottomSheet/app.searchBottomSheet.module';

const APP_MODULE_NAME = 'appDemo';

const APP_MODULE_INJECT = [
	coreModule.name,
	layoutCtrlModule.name,
	avatarDirective.name,
	searchBottomSheetModule.name,
	homeCtrlModule.name,
	newsCtrlModule.name,
	signinCtrlModule.name
];

let appModule = angular
								.module(APP_MODULE_NAME, APP_MODULE_INJECT)
								.config(appConfig)
								.config(appRoute)
								.run(appRun);
								
export default appModule;