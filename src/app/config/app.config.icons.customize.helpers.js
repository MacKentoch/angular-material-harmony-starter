/* global angular */
import _ from 'lodash';

const ROOT_NAVIGATION_ICONS_URL	= 'public/svg/navigation/';
const ROOT_ALERT_ICONS_URL 			= 'public/svg/alert/';
const ROOT_ACTION_ICONS_URL 		= 'public/svg/action/';
const ROOT_SOCIAL_ICONS_URL 		= 'public/svg/social/';
const ROOT_NOTIFICATION					= 'public/svg/notification/';

const ICON_TANK = [
	
	{
		name : 'menu',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_menu_18px.svg`	
			},
			{
				size 	: 24,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_menu_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_menu_36px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_menu_48px.svg`
			}										
		]
	},
	
	{
		name : 'event_note',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_NOTIFICATION}ic_event_note_18px.svg`	
			},
			{
				size 	: 24,
				url		: `${ROOT_NOTIFICATION}ic_event_note_24px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_NOTIFICATION}ic_event_note_48px.svg`
			}										
		]
	},	
	
	{
		name : 'moreVertical',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_more_vert_18px.svg`
			},
			{
				size 	: 24,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_more_vert_18px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_more_vert_18px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_more_vert_18px.svg`
			}										
		]
	},
	
	{
		name : 'arrow_back',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_arrow_back_18px.svg`
			},
			{
				size 	: 24,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_arrow_back_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_arrow_back_36px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_NAVIGATION_ICONS_URL}ic_arrow_back_48px.svg`
			}										
		]
	},	
	
	{
		name : 'home',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_ACTION_ICONS_URL}ic_home_24px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_ACTION_ICONS_URL}ic_home_48px.svg`
			}										
		]
	},

	{
		name : 'search',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_ACTION_ICONS_URL}ic_search_24px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_ACTION_ICONS_URL}ic_search_48px.svg`
			}										
		]
	},
	
	{
		name : 'language',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_ACTION_ICONS_URL}ic_language_24px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_ACTION_ICONS_URL}ic_language_48px.svg`
			}										
		]
	},	
	
	{
		name : 'warning',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_ALERT_ICONS_URL}ic_warning_18px.svg`
			},
			{
				size 	: 24,
				url		: `${ROOT_ALERT_ICONS_URL}ic_warning_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_ALERT_ICONS_URL}ic_warning_36px.svg`
			},			
			{
				size 	: 48,
				url		: `${ROOT_ALERT_ICONS_URL}ic_warning_48px.svg`
			}										
		]
	},
	
	{
		name : 'error',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_ALERT_ICONS_URL}ic_error_18px.svg`
			},
			{
				size 	: 24,
				url		: `${ROOT_ALERT_ICONS_URL}ic_error_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_ALERT_ICONS_URL}ic_error_36px.svg`
			},			
			{
				size 	: 48,
				url		: `${ROOT_ALERT_ICONS_URL}ic_error_48px.svg`
			}										
		]
	},	

	{
		name : 'person',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_18px.svg`
			},
			{
				size 	: 24,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_36px.svg`
			},			
			{
				size 	: 48,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_48px.svg`
			}										
		]
	},

	{
		name : 'person_add',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_add_18px.svg`
			},
			{
				size 	: 24,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_add_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_add_36px.svg`
			},			
			{
				size 	: 48,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_person_add_48px.svg`
			}										
		]
	},
	
	{
		name : 'notifications',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_24px.svg`
			},	
			{
				size 	: 48,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_48px.svg`
			}										
		]
	},		
	
	{
		name : 'notifications_active',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_active_24px.svg`
			},	
			{
				size 	: 48,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_active_48px.svg`
			}										
		]
	},
	
	{
		name : 'notifications_none',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_none_24px.svg`
			},	
			{
				size 	: 48,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_none_48px.svg`
			}										
		]
	},	
		
	{
		name : 'notifications_off',
		icons : [
			{
				size 	: 24,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_off_24px.svg`
			},	
			{
				size 	: 48,
				url		: `${ROOT_SOCIAL_ICONS_URL}ic_notifications_off_48px.svg`
			}										
		]
	}			
		
];

const getIconUrl = (name, size) => {
	
	let iconGroup = _.chain(ICON_TANK)
				.filter((icons) => icons.name === name)
				.pluck('icons')
				.first(1)
				.value();
	
	if(!angular.isArray(iconGroup)) return '';
	
	let iconUrl = _.chain(iconGroup)
				.filter((icon) => icon.size === size)
				.pluck('url')
				.first(1)
				.value();
	
	if(!angular.isString(iconUrl)) return '';
	
	return iconUrl;		
				
};


export {
	getIconUrl
};