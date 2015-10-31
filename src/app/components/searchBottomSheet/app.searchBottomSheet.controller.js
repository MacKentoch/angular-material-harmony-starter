/* global angular */
//import searchBottomSheetModel from 	'./app.searchBottomSheet.model.json!json';

const SEARCH_BOTTOM_SHEET_CONTROLLER_NAME 		= 'searchBottomSheetController';
const SEARCH_BOTTOM_SHEET_CONTROLLERAS_NAME 	= 'searchBottomSheetCtrl';

class searchBottomSheetController{
	
	constructor($mdBottomSheet, searchBottomSheetModel){
		this.$mdBottomSheet = $mdBottomSheet;
		this.searchBottomSheetModel = searchBottomSheetModel;
		this.init();
	}
	
	init(){
		this.searchSheetModel = this.searchBottomSheetModel;
		console.info(`searchBottomSheetController : model : ${this.searchSheetModel}`);
		console.dir(this.searchSheetModel);
	}


	optionClick($index) {
		this.updateCheckBoxModel($index);
    let clickedItem = this.searchSheetModel[$index];
    this.$mdBottomSheet.hide(clickedItem);
  }
	
	checkBoxClicked($index){
		this.updateCheckBoxModel($index);
	}
	
	updateCheckBoxModel(selectIndex){
		angular.forEach(this.searchSheetModel, (value, index) => value.checked = false); //loop to reset all checked option 
		this.searchSheetModel[selectIndex].checked = true; //then check selected one (faster when done outside a loop)		
	}
	
	
}


searchBottomSheetController.$inject = [
	'$mdBottomSheet',
	'searchBottomSheetModel'
];

export default searchBottomSheetController;

export {
	SEARCH_BOTTOM_SHEET_CONTROLLER_NAME,
	SEARCH_BOTTOM_SHEET_CONTROLLERAS_NAME
};