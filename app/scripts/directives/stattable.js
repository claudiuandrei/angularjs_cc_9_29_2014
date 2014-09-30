'use strict';

/**
 * @ngdoc directive
 * @name ccApp.directive:statTable
 * @description
 * # statTable
 */
angular.module('ccApp')
    .directive('statTable', function () {
        return {
            templateUrl: 'templates/stat-table.html',
            restrict: 'E',
            scope: {
                team: "="
            }
        };
    });
