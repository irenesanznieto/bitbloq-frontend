/*jshint camelcase: false */
'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('ResetPasswordCtrl', function($scope, $routeParams, userApi, alertsService, $location, _) {

        $scope.createPassword = function(form) {
            $scope.errorPassword = false;
            if (_.isEmpty(form.$error)) {
                if (form.passwordMain.$modelValue === form.passwordRepeat.$modelValue) {
                    var token = $routeParams.token;
                    userApi.updateByToken({
                        password: form.passwordMain.$modelValue
                    }, token).success(function() {
                        alertsService.add('recovery-create-password-ok', 'password', 'ok', 5000);
                        $location.path('login');
                    }).error(function() {
                        alertsService.add('recovery-create-password-error', 'password', 'warning');
                    });
                } else {
                    $scope.errorPassword = true;
                }
            }
        };

        $scope.errorPassword = false;
        $scope.common.section = 'recovery';
    });
