import {getIconUrl} from './app.config.icons.customize.helpers';

function appConfig($mdThemingProvider, $mdIconProvider){
	
	  $mdIconProvider
       .icon('menu_24', getIconUrl('menu', 24))
       .icon('moreVertical', getIconUrl('moreVertical', 24));			 
			 
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

