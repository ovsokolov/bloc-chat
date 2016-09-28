 (function() {
     function config($stateProvider, $locationProvider, $mdThemingProvider) {
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
        $stateProvider
         .state('home', {
             url: '/',
             controller: 'RoomsCtrl as rooms',
             templateUrl: '/templates/home.html'
         });
         
        $mdThemingProvider
            .theme('default')
            .primaryPalette('lime')
            .accentPalette('yellow')
            .warnPalette('orange')
            .backgroundPalette('blue-grey');
     }
          
    angular
         .module('blocChat', ['ui.router','firebase','ngMaterial'])
         .config(config);
 })();