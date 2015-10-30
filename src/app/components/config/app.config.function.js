import {getIconUrl} from './app.config.icons.customize.helpers';

function appConfig($mdThemingProvider, $mdIconProvider){
	
	let menuIcon24Url = getIconUrl('menu', 24);
	
	  $mdIconProvider
       .icon('menu_24', menuIcon24Url);
			 
		$mdThemingProvider.theme('default')
			.primaryPalette('grey')
			.accentPalette('deep-orange')
			.warnPalette('red')
			.backgroundPalette('grey');

}


appConfig.$inject = [
	'$mdThemingProvider',
	'$mdIconProvider'
];

export default appConfig;

