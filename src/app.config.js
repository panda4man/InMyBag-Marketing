(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                controller: 'BaseCtrl as Base',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('app.home', {
            	url: '/home',
            	controller: 'HomeCtrl as Home',
            	templateUrl: 'templates/home.html'
            });

        $urlRouterProvider.otherwise('/home');
    }
})();
