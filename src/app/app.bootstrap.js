/* global angular */
//css
import 'angular-material/angular-material.css!';
import 'daneden/animate.css/animate.css!';

import './appBundle.css!';

import appModule from './app.main.js';

angular.element(document).ready(()=>{
  angular.bootstrap(document, [appModule.name], { strictDi: false });
});