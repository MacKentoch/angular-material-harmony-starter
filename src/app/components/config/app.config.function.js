import {getIconUrl} from './app.config.icons.customize.helpers';

function appConfig($mdThemingProvider, $mdIconProvider){
	let menuIcon = getIconUrl('menu', 24);
	
	//$mdThemingProvider.theme('default') .dark();
}


appConfig.$inject = [
	'$mdThemingProvider',
	'$mdIconProvider'
];

export default appConfig;

