
import {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLERAS_NAME	
}													  from '../components/home/app.home.controller';
import homeTemplate 				from '../components/home/app.home.template.html!text';

import {
	NEWS_CONTROLLER_NAME,
	NEWS_CONTROLLERAS_NAME	
}														from '../components/news/app.news.controller';
import newsTemplate 				from '../components/news/app.news.template.html!text';


function routeconfig($stateProvider, $urlRouterProvider, $locationProvider){
  
  $urlRouterProvider.otherwise('/'); //default route :  
   
  $stateProvider
    .state('home', {
      url         : '/',
      template    : homeTemplate,
      controller  : HOME_CONTROLLER_NAME,
      controllerAs: HOME_CONTROLLERAS_NAME,
    })
    .state('news', {
      url         : '/news',
      template    : newsTemplate,
      controller  : NEWS_CONTROLLER_NAME,
      controllerAs: NEWS_CONTROLLERAS_NAME,
    });
    // .state('acount', {
    //     url       : '/account',
    //     template  : '',
    //     resolve   : {
    //       registerCalled : () => {
    //         console.info('account called');
    //       }
    //     },
    //     data      : {
    //       requireLogin    : true, //force autentification before entering here
    //       currentChoice : 'account'
    //     }                    
    // });
    
    $locationProvider.html5Mode(true);    
        	
}

routeconfig.$inject = [
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider'
 ];

export default routeconfig;