/* global angular */
import {getIconUrl} from '../config/app.config.icons.customize.helpers';


function runFct($http, $templateCache){
	let svgIconsUrls = [
		getIconUrl('menu', 24),
		getIconUrl('moreVertical', 24),
		getIconUrl('close', 24),
		getIconUrl('home', 24),
		getIconUrl('search', 24),
		getIconUrl('arrow_back', 24),
		getIconUrl('language', 24),
		getIconUrl('person', 24),
		getIconUrl('person_add', 24),
		getIconUrl('error', 24),
		getIconUrl('notifications', 24),
		getIconUrl('notifications_active', 24),
		getIconUrl('notifications_none', 24),
		getIconUrl('notifications_off', 24),
		getIconUrl('error', 48),
		getIconUrl('warning', 24),
		getIconUrl('warning', 48),
		getIconUrl('event_note', 24),
		getIconUrl('account_circle', 48)		
	];
	
	//load in template cache all app svg icons
	angular.forEach(svgIconsUrls, function(url) {
		$http.get(url, {cache: $templateCache});
	});	
		
	
	
}

runFct.$inject= [
	'$http',
	'$templateCache'
];

export default runFct;