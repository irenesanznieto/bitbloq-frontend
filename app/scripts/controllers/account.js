/*jshint camelcase: false */
'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('AccountCtrl', function($scope, $rootScope, $timeout, $translate, $location, $q, $auth, envData, imageApi, userApi, _, alertsService, ngDialog, utils) {

        $scope.authenticate = function(provider) {

            $auth.authenticate(provider).then(function(response) {
                userApi.getSocialProfile(provider, response.access_token).success(function(userData) {
                    var dataProvider = {
                        oauthService: provider,
                        oauthId: userData.id
                    };
                    userApi.addSocialNetwork(dataProvider).then(function() {
                        alertsService.add('social-networks-add', 'social-network-user', 'ok', 5000);
                        $scope.avatarUpdate = false;
                        getSocialNetwork();
                    }, function(error) {
                        if (error.status === 409) {
                            if (error.data.error === 'oauth_service_duplicated') {
                                alertsService.add('social-networks-error-has-identity', 'social-network-user', 'warning');
                                getSocialNetwork();
                            }
                            if (error.data.error === 'identity_exists') {
                                alertsService.add('social-networks-error-exist', 'social-network-user', 'warning');
                            }
                        } else {
                            alertsService.add('social-networks-error', 'social-network-user', 'warning');
                        }
                    });
                }, function() {
                    alertsService.add('social-networks-error', 'social-network-user', 'warning');
                });
            }, function() {
                alertsService.add('social-networks-error', 'social-network-user', 'warning');
            });
        };

        $scope.saveProfile = function() {
            var defered = $q.defer();

            alertsService.add('account-saving', 'saved-user', 'info', 5000);
            if ($scope.tempAvatar.size && $scope.tempAvatar.type !== 'google' && $scope.tempAvatar.type !== 'facebook') {
                if ($scope.common.user && $scope.tempAvatar.type !== $scope.common.user.properties.imageType) {
                    imageApi.delete($scope.common.user.id, $scope.common.user.properties.imageType, 'Avatar');
                }
                $scope.common.user.properties.imageType = $scope.tempAvatar.type;
            }
            userApi.update($scope.common.user).success(function() {
                $scope.common.setUser($scope.common.user);
                if ($scope.tempAvatar.size && $scope.tempAvatar.type !== 'google' && $scope.tempAvatar.type !== 'facebook') {
                    imageApi.save($scope.common.user.id, $scope.tempAvatar, 'Avatar').success(function() {
                        $scope.common.oldTempAvatar = $scope.tempAvatar;
                        alertsService.add('account-saved', 'saved-user', 'ok', 5000);
                        defered.resolve();
                    }).error(function(error) {
                        alertsService.add('account-saved-error', 'saved-user', 'warning');
                        defered.reject(error);
                    });
                } else {
                    alertsService.add('account-saved', 'saved-user', 'ok', 5000);
                    defered.resolve();
                }
            }).error(function(error) {
                alertsService.add('account-saved-error', 'saved-user', 'warning');
                defered.reject(error);
            });
            return defered.promise;
        };

        $scope.changeLanguage = function(language) {
            $translate.use(language);
            $scope.common.user.properties.language = language;
            $scope.saveProfile();
        };

        $scope.uploadImageTrigger = function(type) {
            $timeout(function() {
                if (type === 'main') {
                    $('.main-image--input').click();

                } else {
                    $('.other-image--input').click();
                }
            }, 0);
        };

        $scope.uploadImage = function(e) {
            var properties = {
                minWidth: 100,
                minHeight: 100,
                containerDest: 'avatarUser',
                without: /image.gif/
            };
            utils.uploadImage(e, properties).then(function(response) {
                $scope.tempAvatar = response.blob;
                $scope.saveProfile();
            }).catch(function(response) {
                switch (response.error) {
                    case 'heavy':
                        alertsService.add('account-image-heavy-error', 'user-avatar', 'warning');
                        break;
                    case 'small':
                        alertsService.add('account-image-small-error', 'user-avatar', 'warning');
                        break;
                    case 'no-image':
                        alertsService.add('account-image-read-error', 'user-avatar', 'warning');
                        break;
                }
            });
        };

        $scope.resetPasswordModal = function() {
            var dialog,
                modalScope = $rootScope.$new(),
                confirmAction = function(form) {
                    modalScope.errorPassword = false;
                    if (_.isEmpty(form.$error)) {
                        if (form.passwordMain.$modelValue === form.passwordRepeat.$modelValue) {
                            $scope.common.user.password = form.passwordMain.$modelValue;
                            dialog.close();
                            userApi.update($scope.common.user).success(function() {
                                alertsService.add('reset-password-saved', 'saved-password', 'ok', 5000);
                            }).error(function() {
                                alertsService.add('reset-password-saved-error', 'error-password', 'warning');
                            });
                        } else {
                            modalScope.errorPassword = true;
                        }
                    }
                };
            _.extend(modalScope, {
                title: 'modal-reset-password-title',
                confirmButton: 'modal-reset-password-button-ok',
                contentTemplate: 'views/modals/password-reset.html',
                confirmAction: confirmAction,
                submitted: false,
                errorPassword: false
            });

            dialog = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container password-reset--modal',
                scope: modalScope,
                showClose: false
            });

            $('textarea.msd-elastic').autogrow({
                onInitialize: true
            });
        };

        function getSocialNetwork() {
            userApi.getSocialNetwork().then(function(userProviders) {
                if (userProviders.length > 0) {
                    var avatar = {
                        size: 200
                    };
                    if (userProviders.indexOf('google') > -1) {
                        $scope.userProviders.google = true;
                        avatar.type = 'google';
                    }
                    if (userProviders.indexOf('facebook') > -1) {
                        $scope.userProviders.facebook = true;
                        avatar.type = 'facebook';
                    }
                    $scope.avatarUpdate = true;
                    $scope.common.oldTempAvatar = avatar;
                    $scope.tempAvatar = avatar;
                } else {
                    $scope.avatarUpdate = false;
                }
            });
        }

        $scope.common.oldTempAvatar = {};
        $scope.test = envData.config.supportedLanguages;
        $scope.translate = $translate;
        $scope.tempAvatar = {};
        $scope.userProviders = {
            google: false,
            facebook: false
        };
        $scope.avatarUpdate = false;

        $scope.common.itsUserLoaded().then(function() {

            $scope.$watch('common.user.firstName', function(oldValue, newValue) {
                if (oldValue && oldValue !== newValue) {
                    $scope.saveProfile();
                }
            });

            $scope.$watch('common.user.properties.newsletter', function(newVal, oldVal) {
                if (newVal !== oldVal && newVal !== '' && $scope.common.user !== null) {
                    $scope.saveProfile();
                }
            });

            $scope.$watch('common.user.lastName', function(oldValue, newValue) {
                if (oldValue && oldValue !== newValue) {
                    $scope.saveProfile();
                }
            });

            getSocialNetwork();

        }, function() {
            alertsService.add('view-need-tobe-logged', 'login', 'warning');
            $location.path('/login');
        });
    });
