const SIGIN_CONTROLLER_NAME 	= 'siginController';
const SIGIN_CONTROLLERAS_NAME = 'siginCtrl';


class siginController {
	
	constructor($mdDialog){
		this.$mdDialog = $mdDialog;
		this.init();	
	}
	
	init(){
		this.isLoggin = true;
	}
	
	answer(textAnswer){
		this.$mdDialog.hide(textAnswer);
	}
	
	hide () {
    this.$mdDialog.hide();
  }
	
  cancel () {
    this.$mdDialog.cancel();
  }

	
}

siginController.$inject = [
	'$mdDialog'
];

export default siginController;

export {
	SIGIN_CONTROLLER_NAME,
	SIGIN_CONTROLLERAS_NAME
};
