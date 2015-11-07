import newsModel from './app.news.model.json!json';

const NEWS_CONTROLLER_NAME 		= 'newsController';
const NEWS_CONTROLLERAS_NAME 	= 'newsCtrl';


class newsController{
	
	constructor(){
		this.init();
	}
	
	init(){
		this.newsList = newsModel;
		console.info(`newsController loaded`);
	}
	
}


newsController.$inject = [];

export default newsController;

export {
	NEWS_CONTROLLER_NAME,
	NEWS_CONTROLLERAS_NAME
};