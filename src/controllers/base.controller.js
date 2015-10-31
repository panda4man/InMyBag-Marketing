(function() {
    'use strict';
    angular
        .module('app.controller.base', [])
        .controller('BaseCtrl', Controller);

    Controller.$inject = ['$scope', 'Config'];

    function Controller($scope, Config) {
    	var vm = this;
        $scope.siteName = Config.siteName;

    	init();

    	function init () {
            console.log('Init the base controller.');
    		vm.data = {};
    	}
    }
})();
