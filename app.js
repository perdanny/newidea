//app.js

(function () {
    'use strict';

    var myApp = angular.module('myApp', []);

    myApp.controller('GreetingController', ['$scope', function ($scope) {
        var vm = this;

        vm.name = "danny";

        $scope.greeting = 'Hola!';
    }]);
})();