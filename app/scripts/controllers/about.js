'use strict';

/**
 * @ngdoc function
 * @name ccApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ccApp
 */
angular.module('ccApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
