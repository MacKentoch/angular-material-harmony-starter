/* global angular */
const HOME_CONTROLLER_NAME 		= 'homeController';
const HOME_CONTROLLERAS_NAME 	= 'homeCtrl';


class homeController{
	
	constructor($mdSidenav, $mdDialog){
		this.$mdSidenav = $mdSidenav;
		this.$mdDialog	= $mdDialog;
		
		this.init();
	}
	
	init(){
		this.showSearch						= false;
		this.originatorEv					= null;
		this.notificationsEnabled	= false;
		this.user									= angular.extend({}, {
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
	'$mdDialog'
];

export default homeController;

export {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLERAS_NAME	
};