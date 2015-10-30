/* global angular */
import _ from 'lodash';

const ROOT_ICONS_URL = 'public/svg/navigation/';
const ICON_TANK = [
	
	{
		name : 'menu',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_ICONS_URL}ic_menu_18px.svg`
				
			},
			{
				size 	: 24,
				url		: `${ROOT_ICONS_URL}ic_menu_24px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_ICONS_URL}ic_menu_36px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_ICONS_URL}ic_menu_48px.svg`
			}										
		]
	},
	
	{
		name : 'moreVertical',
		icons : [
			{
				size 	: 18,
				url		: `${ROOT_ICONS_URL}ic_more_vert_18px.svg`
				
			},
			{
				size 	: 24,
				url		: `${ROOT_ICONS_URL}ic_more_vert_18px.svg`
			},
			{
				size 	: 36,
				url		: `${ROOT_ICONS_URL}ic_more_vert_18px.svg`
			},
			{
				size 	: 48,
				url		: `${ROOT_ICONS_URL}ic_more_vert_18px.svg`
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