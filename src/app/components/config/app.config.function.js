import {getIconUrl} from './app.config.icons.customize.helpers';

function appConfig($mdThemingProvider, $mdIconProvider){
	
	  $mdIconProvider
       .icon('menu_24',									getIconUrl('menu', 24))
       .icon('moreVertical',						getIconUrl('moreVertical', 24))
			 .icon('home_24',									getIconUrl('home', 24))
			 .icon('language_24',							getIconUrl('language', 24))
			 .icon('person_24',								getIconUrl('person', 24))
			 .icon('person_add_24',						getIconUrl('person_add', 24))
			 .icon('error_24',								getIconUrl('error', 24))
			 .icon('notifications_24',				getIconUrl('notifications', 24))
			 .icon('notifications_active_24',	getIconUrl('notifications_active', 24))
			 .icon('notifications_none_24',		getIconUrl('notifications_none', 24))
			 .icon('notifications_off_24',		getIconUrl('notifications_off', 24))
			 .icon('error_48',								getIconUrl('error', 48))
			 .icon('warning_24',							getIconUrl('warning', 24))
			 .icon('warning_48',							getIconUrl('warning', 48));
			 
			 
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

