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
	
	
	
	
	openMyProfile() {
		this.$mdDialog.show(
			this.$mdDialog.alert()
				.targetEvent(this.originatorEv)
				.clickOutsideToClose(true)
				.parent('body')
				.title('My profile')
				.content('Content coming soon')
				.ok('see you soon')
		);
		this.originatorEv = null;
	};	
	
	
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