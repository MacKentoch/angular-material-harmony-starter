/* global angular */
import signinController, {
	SIGIN_CONTROLLER_NAME,
	SIGIN_CONTROLLERAS_NAME
}														from './app.signin.controller';


const SIGIN_MODULE_NAME = 'app.signin.module';

export default angular
								.module(SIGIN_MODULE_NAME, [])
								.controller(SIGIN_CONTROLLER_NAME, signinController);