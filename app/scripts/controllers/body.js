'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:BodyCtrl
 * @description
 * # BodyCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('BodyCtrl', function($scope, common) {
        $scope.common = common;
        $scope.isHeader = function() {
            return (!common.user && (common.section === 'bloqsproject' || common.section === 'codeproject')) || (common.section !== 'bloqsproject' && common.section !== 'codeproject' && common.section !== '' && common.section !== 'features' && common.section !== 'offline' && common.section !== 'downloads' && common.section !== 'bitbloq-help' && common.section !== 'aboutus' && common.section !== 'login' && common.section !== 'recovery' && common.section !== 'unsupported' && common.section !== 'register');
        };
    });