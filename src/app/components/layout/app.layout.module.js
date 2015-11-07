/* global angular */
import layoutController, {
	LAYOUT_CONTROLLER_NAME,
	LAYOUT_CONTROLLERAS_NAME
}	from './app.layout.controller';

const LAYOUT_MODULE_NAME = 'app.layout.module';

export default angular
								.module(LAYOUT_MODULE_NAME, [])
								.controller(LAYOUT_CONTROLLER_NAME, layoutController);