const HOME_CONTROLLER_NAME 		= 'homeController';
const HOME_CONTROLLERAS_NAME 	= 'homeCtrl';


class homeController{
	
	constructor(){
		this.init();
	}
	
	init(){
		console.info(`homeController loaded`);
	}
	
}


homeController.$inject = [];

export default homeController;

export {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLERAS_NAME
};