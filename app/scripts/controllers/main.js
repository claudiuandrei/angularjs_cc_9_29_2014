'use strict';

/**
 * @ngdoc function
 * @name ccApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ccApp
 */
angular.module('ccApp')
  .controller('MainCtrl', function ($scope, teamData) {

        $scope.activeFilter = 'passing';

        $scope.setActiveFilter = function(filter) {
            $scope.activeFilter = filter;
        };

        $scope.filters = {
            passing: ['name', 'att', 'cmp', 'yds', 'tds', 'ints'],
            rushing: ['name', 'att', 'yds', 'tds', 'lng', 'lngtd'],
            receiving: ['name', 'rec', 'yds', 'tds', 'lng', 'lngtd'],
            fumbles: ['name', 'tot', 'rcv', 'trcv', 'yds', 'lost'],
            kicking: ['name', 'fgm', 'fga', 'fgyds', 'totpfg', 'xpmade', 'xpmissed']
        };

        $scope.homeTeam = teamData.get('home');
        $scope.awayTeam = teamData.get('away');
        $scope.homeTeamPlayers = teamData.getPlayers(teamData.get('home').stats);
        $scope.findInPlayers = function(name) {
            return teamData.findInPlayers($scope.homeTeamPlayers, name);
        };
  });
