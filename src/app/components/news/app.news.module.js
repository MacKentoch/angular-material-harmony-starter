/* global angular */
import newsController, {
	NEWS_CONTROLLER_NAME,
	NEWS_CONTROLLERAS_NAME	
}														from './app.news.controller';


const NEWS_MODULE_NAME = 'app.news.module';

export default angular
								.module(NEWS_MODULE_NAME, [])
								.controller(NEWS_CONTROLLER_NAME, newsController);