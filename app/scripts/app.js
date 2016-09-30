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
         })
        .state("home.messages", {
            url: "/messages/:roomId?:roomName",
            controller: 'ListMessagesCtrl as msgs',
            templateUrl: "/templates/messages.html"
        });
         
        $mdThemingProvider
            .theme('default')
            .primaryPalette('indigo')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('blue-grey');
     }
          
    angular
         .module('blocChat', ['ui.router','firebase','ngMaterial','ngCookies'])
         .config(config);
 })();