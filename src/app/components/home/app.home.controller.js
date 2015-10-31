/* global angular */
import searchBottomSheetModel 						from 	'../searchBottomSheet/app.searchBottomSheet.model.json!json';
import {
	SEARCH_BOTTOM_SHEET_CONTROLLER_NAME,
	SEARCH_BOTTOM_SHEET_CONTROLLERAS_NAME
}																					from '../searchBottomSheet/app.searchBottomSheet.controller';

import searchBottomSheetTemplate 					from '../searchBottomSheet/app.searchBottomSheet.template.html!text';

const HOME_CONTROLLER_NAME 		= 'homeController';
const HOME_CONTROLLERAS_NAME 	= 'homeCtrl';


class homeController{
	
	constructor($mdSidenav, $mdDialog, $mdBottomSheet){
		this.$mdSidenav 		= $mdSidenav;
		this.$mdDialog			= $mdDialog;
		this.$mdBottomSheet = $mdBottomSheet;
		
		this.init();
	}
	
	init(){
		this.showSearch							= false;
		this.searchBottomSheetModel = angular.copy(searchBottomSheetModel);
		this.originatorEv						= null;
		this.notificationsEnabled		= false;
		this.user										= angular.extend({}, {
			'userLogged' :	false
		});
	}
	
	toggleSidenav(menuId) {
    this.$mdSidenav(menuId).toggle();
  }
	
	toggleNotifications(){
		this.notificationsEnabled	= !this.notificationsEnabled;
	}
	
	openConfigurationMenu($mdOpenMenu, ev) {
		this.originatorEv = ev;
		$mdOpenMenu(ev);
  }
	
	showSearchOptionsSheet(event){
    this.alert = '';
    this.$mdBottomSheet.show({
      template		: searchBottomSheetTemplate,
      controller	: SEARCH_BOTTOM_SHEET_CONTROLLER_NAME,
			controllerAs: SEARCH_BOTTOM_SHEET_CONTROLLERAS_NAME,
      targetEvent	: event || this.originatorEv,
			resolve			: {
				'searchBottomSheetModel' : () => this.searchBottomSheetModel
			}
    }).then(
			(clickedItem) => { this.alert = clickedItem.name + ' clicked!';}
		);		
	}

	
	
	openMyProfile(event) {
		this.$mdDialog.show(
			this.$mdDialog.alert()
				.targetEvent(event || this.originatorEv)
				.clickOutsideToClose(true)
				.parent('body')
				.title('My profile')
				.content('Content coming soon')
				.ok('see you soon')
		);
		this.originatorEv = null;
	}
	
	
	openLanguageSettings(event){
		this.$mdDialog.show(
			this.$mdDialog.alert()
				.targetEvent(event || this.originatorEv)
				.clickOutsideToClose(true)
				.parent('body')
				.title('Language settings')
				.content('Content coming soon, please wait.')
				.ok('see you soon')
		);
		this.originatorEv = null;		
	}	
	
	
}

homeController.$inject = [
	'$mdSidenav',
	'$mdDialog',
	'$mdBottomSheet'
];

export default homeController;

export {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLERAS_NAME	
};