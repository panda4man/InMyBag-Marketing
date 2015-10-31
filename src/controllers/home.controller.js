(function() {
    'use strict';
    angular
        .module('app.controller.home', [])
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {
    	var vm = this;

    	init();

    	function init () {
            console.log('Init the home controller');
    		vm.data = {};
    	}
    }
})();
