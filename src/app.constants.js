(function() {
    'use strict';
    angular
        .module('app.constants', [])
        .constant('Config', (function Const() {
            var constant = {
                siteName: 'InMyBag'
            };
            return constant;
        })());
})();
