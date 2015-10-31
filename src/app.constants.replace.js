(function() {
    'use strict';
    angular
        .module('app.constants', [])
        .constant('Config', Const);

    function Const() {
    	var constant = {
    		siteName: '@@siteName'
    	};

    	return constant;
    }
})();
