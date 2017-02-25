'use strict';

angular.module('ngApp', [
  'ui.router',
  'ngAnimate',
  'toastr'
]).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        templateUrl: 'southern/southern.html',
        controller: 'SouthernCtrl'
    });

    $locationProvider.html5Mode(true);

}).run(function () {

});
