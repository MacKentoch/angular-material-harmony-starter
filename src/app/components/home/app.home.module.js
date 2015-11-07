/* global angular */
import homeController, {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLERAS_NAME
}													from './app.home.controller';

const HOME_MODULE_NAME = 'app.home.module';

export default angular
								.module(HOME_MODULE_NAME, [])
								.controller(HOME_CONTROLLER_NAME, homeController);