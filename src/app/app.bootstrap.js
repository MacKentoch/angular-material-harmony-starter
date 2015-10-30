/* global angular */
//css
import 'angular-material/angular-material.css!';
//import 'angular-material/angular-material.layouts.css!';

import './appBundle.css!';

import appModule from './app.main.js';

angular.element(document).ready(()=>{
  angular.bootstrap(document, [appModule.name], { strictDi: false });
});