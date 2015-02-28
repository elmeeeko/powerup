angular.module('Powerapp', [
  'ngRoute',
  'mobile-angular-ui',
  'Powerapp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});