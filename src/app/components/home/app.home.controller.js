const HOME_CONTROLLER_NAME 		= 'homeController';
const HOME_CONTROLLERAS_NAME 	= 'homeCtrl';


class homeController{
	
	constructor($mdSidenav){
		this.$mdSidenav = $mdSidenav;
		this.init();
	}
	
	init(){
		
	}
	
	toggleSidenav(menuId) {
    this.$mdSidenav(menuId).toggle();
  }
	
	
}

homeController.$inject = [
	'$mdSidenav'
];

export default homeController;

export {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLERAS_NAME	
};