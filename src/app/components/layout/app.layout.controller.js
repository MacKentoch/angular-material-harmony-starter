/* global angular */
import searchBottomSheetModel 					from 	'../searchBottomSheet/app.searchBottomSheet.model.json!json';
import leftSidenavModel 								from 	'./app.layout.leftSidenav.model.json!json';
import {
	initSearchModel,
	initUserModel
}																				from './app.layout.controller.helpers';
import {
	SEARCH_BOTTOM_SHEET_CONTROLLER_NAME,
	SEARCH_BOTTOM_SHEET_CONTROLLERAS_NAME
}																				from '../searchBottomSheet/app.searchBottomSheet.controller';

import {
	SIGIN_CONTROLLER_NAME,
	SIGIN_CONTROLLERAS_NAME	
}																				from '../signin/app.signin.controller';
import signinTemplate										from '../signin/app.signin.template.html!text';


import searchBottomSheetTemplate 				from '../searchBottomSheet/app.searchBottomSheet.template.html!text';

const LAYOUT_CONTROLLER_NAME 		= 'layoutController';
const LAYOUT_CONTROLLERAS_NAME 	= 'layoutCtrl';


class layoutController{
	
	constructor($mdSidenav, $mdDialog, $mdBottomSheet, $state){
		this.$mdSidenav 		= $mdSidenav;
		this.$mdDialog			= $mdDialog;
		this.$mdBottomSheet = $mdBottomSheet;
		this.$state					= $state;
		
		this.init();
	}
	
	init(){
		this.showSearch							= false;
		this.searchBottomSheetModel = angular.copy(searchBottomSheetModel);
		this.originatorEv						= null;
		this.notificationsEnabled		= false;
		this.user										= initUserModel();			//user model
		this.search 								= initSearchModel();		//search model (input + 'by' = search option)
		this.leftSidenavModel				= leftSidenavModel;			//left sidenav menu model
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
			(clickedItem) => this.search.by = clickedItem.name
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
	
	
  showSignin(ev) {
		
		const sidenavId = 'left';
		this.$mdSidenav(sidenavId)
					.close()
					.then(()=>this.status=`sidenav ${sidenavId} close from navigation click`);
		
		
    this.$mdDialog.show({
      controller					: SIGIN_CONTROLLER_NAME,
			controllerAs				: SIGIN_CONTROLLERAS_NAME,
      template						: signinTemplate,
      parent							: angular.element(document.body),
      targetEvent					: ev || this.originatorEv,
      clickOutsideToClose	: true
    })
        .then(
					(answer) => this.status = `You said the information was "${answer}".`,
       		() => this.status = 'You cancelled the dialog.'
				);
		this.originatorEv = null;	
  }

	navigateTo(uiSref, event, sidenavId){
		//console.info(`sidenav '${sidenavId}' is opened = ${this.$mdSidenav(sidenavId).isOpen()}`);
		
		this.$mdSidenav(sidenavId)
					.close()
					.then(()=>this.status=`sidenav ${sidenavId} close from navigation click`);
		this.$state.go(uiSref);
	}
	
	
}

layoutController.$inject = [
	'$mdSidenav',
	'$mdDialog',
	'$mdBottomSheet',
	'$state'
];

export default layoutController;

export {
	LAYOUT_CONTROLLER_NAME,
	LAYOUT_CONTROLLERAS_NAME	
};