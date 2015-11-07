/* global angular */

const initSearchModel = ()=>{
	let _initSearchModel = {
		what 	: '',
		by		: 'name'
	};
	return angular.copy(_initSearchModel);
};



const initUserModel = ()=>{
	let _initUserModel = {
		userLogged 	: false
	};
	return angular.copy(_initUserModel);
};




export {
	initSearchModel,
	initUserModel
};