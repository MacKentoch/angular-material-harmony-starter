/* global angular */
const HOME_CONTROLLER_NAME 		= 'homeController';
const HOME_CONTROLLERAS_NAME 	= 'homeCtrl';


class homeController{
	
	constructor($mdSidenav, $mdDialog, $mdBottomSheet){
		this.$mdSidenav 		= $mdSidenav;
		this.$mdDialog			= $mdDialog;
		this.$mdBottomSheet = $mdBottomSheet
		
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
	
	showSearchOptionsSheet(event){
    this.alert = '';
    this.$mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: event || this.originatorEv
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