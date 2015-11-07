/* global angular */
import avatarDirective, {
	AVATAR_DIRECTIVE_NAME
}	from './app.avatar.directive';

const AVATAR_MODULE_NAME = 'app.avatar.module';

export default angular
								.module(AVATAR_MODULE_NAME, [])
								.directive(AVATAR_DIRECTIVE_NAME, avatarDirective);