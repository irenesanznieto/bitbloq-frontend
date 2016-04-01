/*jshint camelcase: false */
'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('LoginCtrl', function($scope, envData, $log, userApi, _, $auth, $location, $q, $rootScope, moment, alertsService, ngDialog, $routeParams, $translate) {

        $scope.focusHandler = function(evt) {
            $scope.focus = evt.currentTarget.name;
        };

        $scope.authenticate = function(prov) {
            localStorage.removeItem('satellizer_token');
            $auth.authenticate(prov).then(function(response) {
                $log.debug(response);
                userApi.loginUser({
                    'oauth.service': prov,
                    'oauth.access_token': response.access_token
                }).success(function() {
                    userApi.me().success(function(user) {
                        $scope.common.setUser(user);
                        if (user.properties.hasBeenAskedIfTeacher || user.properties.newsletter) {
                            _goToHome();
                        } else {
                            teacherModal();
                        }
                    });

                }).error(function(error) {
                    $log.debug('Login error: ', error);
                    if (error.error === 'no_such_principal') {
                        provider = prov;
                        access_token = response.access_token;
                        userApi.getSocialProfile(provider, access_token).success(function(userData) {
                            userSocialData = userData;
                            userApi.getUserId(userData.email).success(function() {
                                fireShakeEffect();
                                $scope.errors.register.socialEmail = true;
                            }).error(function() {
                                $scope.isSocialRegister = true;
                            });
                        }).error(function(error) {
                            $log.debug('Social login error (', provider, '): ', error);
                        });
                    } else if (error.error === 'unauthorized') {
                        alertsService.add('login_alert_errorConnectSocialNetwork', 'login-error', 'error');
                    } else if (error.error !== 'invalid_time') {
                        alertsService.add('login_text_errorAlert', 'login-error', 'error');
                    }
                });
            }, function(error) {
                alertsService.add('login_text_socialErrorAlert', 'login-error', 'error');
                $log.debug('Social Network error:', error);
            });
        };

        $scope.loginSubmit = function(form) {
            $scope.errors.login.emailUserName = false;
            $scope.errors.login.password = false;
            if (!form.emailusername.$invalid && !form.password.$invalid) {
                if (_.indexOf(form.emailUserNameModel, '@') !== -1) {
                    $scope.user.email = form.emailUserNameModel;
                    delete $scope.user.username;
                } else {
                    $scope.user.username = form.emailUserNameModel.toLowerCase();
                    delete $scope.user.email;
                }
                login();
            } else {
                fireShakeEffect();
            }
        };

        $scope.register = function(form) {
            $scope.errors.register = {
                email: false,
                birthday: false,
                emptyBirthday: false,
                disconnect: false
            };
            if (form.birthday && form.birthday.day && form.birthday.month && form.birthday.year) {
                $scope.errors.emptyBirthday = !moment(form.birthday.day + ', ' + form.birthday.month + ', ' + form.birthday.year, 'DD, MM, YYYY').isValid();
                if (!$scope.errors.emptyBirthday) {
                    $scope.user.properties.birthday = new Date(form.birthday.year, form.birthday.month - 1, form.birthday.day);
                    var older = new Date();
                    older.setYear(older.getFullYear() - 14);
                    $scope.errors.birthday = $scope.user.properties.birthday >= older;
                } else {
                    fireShakeEffect();
                }
            } else {
                fireShakeEffect();
                $scope.errors.emptyBirthday = true;
                $scope.errors.birthday = false;
            }
            if (!form.email.$invalid && !form.password.$invalid && !$scope.username.invalid && !form.username.$error.required && $scope.username.free && $scope.user.properties.term && !$scope.errors.birthday && !$scope.errors.emptyBirthday) {
                $scope.user.username = $scope.user.username.toLowerCase();
                $scope.user.properties.hasBeenAskedIfTeacher = true;
                $scope.user.properties.language = $translate.use();
                userApi.registerUser($scope.user).success(function() {
                    login(true);
                }).error(function(response) {
                    fireShakeEffect();
                    if (response.error === 'entity_exists') { //el user ya existe
                        if (response.errorDescription === 'email duplicated') {
                            $scope.errors.register.email = true;
                        } else if (response.errorDescription === 'username duplicated') {
                            $scope.username.free = false;
                        }
                    } else if (response.error === 'invalid_entity') {
                        //error al registrar - Unprocessable Entity: may not be empty
                    }
                    $log.debug('register error: ', response);
                });
            } else {
                fireShakeEffect();
            }
        };

        $scope.registerSocial = function(form) {
            $scope.checkUserName().then(function() {
                if ($scope.username.search && $scope.username.free && !$scope.username.invalid && !form.readServiceTerm.$error.required && !form.usernameSocial.$error.required) {
                    var socialuser = getUserSocial(userSocialData);
                    socialuser.properties.hasBeenAskedIfTeacher = true;
                    userApi.registerUser(socialuser).success(function() {
                        userApi.loginUser({
                            'oauth.service': provider,
                            'oauth.access_token': access_token
                        }).success(function() {
                            userApi.me().success(function(user) {
                                $scope.common.setUser(user);
                                _goToHome();
                            });
                        });
                    }).error(function(error) {
                        fireShakeEffect();
                        $log.debug('Register error:', error);
                    });
                } else {
                    fireShakeEffect();
                }
            });
        };

        $scope.checkUserName = function() {
            var defered = $q.defer();
            $scope.focus = false;
            if ($scope.user.username !== userName) {
                $scope.username.search = false;
                userName = $scope.user.username;
                $scope.username.invalid = false;
                if ($scope.user.username && $scope.user.username !== '') {
                    if (isUserName()) {
                        $scope.username.empty = false;
                        $scope.username.searching = true;
                        userApi.validateUserName($scope.user.username.toLowerCase()).success(function() {
                            $scope.username.searching = false;
                            $scope.username.search = true;
                            $scope.username.free = false;
                            defered.resolve(false);
                        }).error(function() {
                            $scope.username.searching = false;
                            $scope.username.free = true;
                            $scope.username.search = true;
                            defered.resolve(true);
                        });
                    } else {
                        $scope.username.invalid = true;
                        defered.resolve(false);
                    }
                } else {
                    defered.resolve(false);
                }
            } else {
                defered.resolve(false);
            }
            return defered.promise;
        };

        $scope.setLoginFromRegister = function() {
            var $registerContainer = angular.element('#registerContainer');
            $registerContainer.addClass('form--login__container--transition-down');
            $registerContainer.bind('webkitAnimationEnd', function() {
                $(this).addClass('hide-container');
                $(this).removeClass('form--login__container--transition-down');
            });
            var $loginContainer = angular.element('#loginContainer');
            $loginContainer.addClass('form--login__container--transition-up');
            $loginContainer.removeClass('hide-container');
            $loginContainer.bind('webkitAnimationEnd', function() {
                $(this).removeClass('form--login__container--transition-up');
                $(this).removeClass('hide-container');
            });
        };

        $scope.setLoginFromForgotPassword = function() {
            var $forgotPasswordContainer = angular.element('#isForgotPassword');
            $forgotPasswordContainer.addClass('form--login__container--transition-down');
            $forgotPasswordContainer.bind('webkitAnimationEnd', function() {
                $(this).addClass('hide-container');
                $(this).removeClass('form--login__container--transition-down');
            });
            var $loginContainer = angular.element('#loginContainer');
            $loginContainer.addClass('form--login__container--transition-up');
            $loginContainer.removeClass('hide-container');
            $loginContainer.bind('webkitAnimationEnd', function() {
                $(this).removeClass('form--login__container--transition-up');
                $(this).removeClass('hide-container');
            });
        };

        $scope.setForgotPassword = function() {
          var $loginContainer = angular.element('#loginContainer');
          $loginContainer.addClass('form--login__container--transition-down');
          $loginContainer.bind('webkitAnimationEnd', function() {
              $(this).addClass('hide-container');
              $(this).removeClass('form--login__container--transition-down');
          });
          var $forgotPasswordContainer = angular.element('#isForgotPassword');
          $forgotPasswordContainer.addClass('form--login__container--transition-up');
          $forgotPasswordContainer.removeClass('hide-container');
          $forgotPasswordContainer.bind('webkitAnimationEnd', function() {
              $(this).removeClass('form--login__container--transition-up');
              $(this).removeClass('hide-container');
          });
        };

        $scope.setForgotPasswordFromRegister = function() {
          var $registerContainer = angular.element('#registerContainer');
          $registerContainer.addClass('form--login__container--transition-down');
          $registerContainer.bind('webkitAnimationEnd', function() {
              $(this).addClass('hide-container');
              $(this).removeClass('form--login__container--transition-down');
          });
          var $forgotPasswordContainer = angular.element('#isForgotPassword');
          $forgotPasswordContainer.addClass('form--login__container--transition-up');
          $forgotPasswordContainer.removeClass('hide-container');
          $forgotPasswordContainer.bind('webkitAnimationEnd', function() {
              $(this).removeClass('form--login__container--transition-up');
              $(this).removeClass('hide-container');
          });
        };

        $scope.setRegister = function() {
            var $loginContainer = angular.element('#loginContainer');
            $loginContainer.addClass('form--login__container--transition-down');
            $loginContainer.bind('webkitAnimationEnd', function() {
                $(this).addClass('hide-container');
                $(this).removeClass('form--login__container--transition-down');
            });
            var $registerContainer = angular.element('#registerContainer');
            $registerContainer.addClass('form--login__container--transition-up');
            $registerContainer.removeClass('hide-container');
            $registerContainer.bind('webkitAnimationEnd', function() {
                $(this).removeClass('form--login__container--transition-up');
                $(this).removeClass('hide-container');
            });
        };

        $scope.forgotPassword = function(formForgot) {
            $scope.recovery.emailError = false;
            if (_.isEmpty(formForgot.$error)) {
                userApi.getUserId(formForgot.emailToSend.$modelValue).success(function() {
                    userApi.resetPassword(formForgot.emailToSend.$modelValue).success(function() {
                        $scope.recovery.success = true;
                        $scope.recovery.error = false;
                        alertsService.add('email-recovery-password-ok', 'recovery-password', 'ok', 5000);
                    }).error(function() {
                        fireShakeEffect();
                        $scope.recovery.success = false;
                        $scope.recovery.error = true;
                    });
                }).error(function() {
                    fireShakeEffect();
                    $scope.recovery.emailError = true;
                });
            } else {
                fireShakeEffect();
            }
        };

        function teacherModal() {
            var confirmAction = function() {
                    $scope.common.user.properties.hasBeenAskedIfTeacher = true;
                    if ($scope.radioTeacher.model === 'teacher') {
                        $scope.common.user.properties.isTeacher = true;
                    } else {
                        $scope.common.user.properties.isTeacher = false;
                    }
                    userApi.update($scope.common.user).then(function() {
                        $scope.common.setUser($scope.common.user);
                        modalTeacher.close();
                        _goToHome();
                    }, function(err) {
                        $log.log('Error', err);
                    });
                },
                modalTeacher,
                modalOptions = $scope;
            $scope.radioTeacher = {
                model: ''
            };
            _.extend(modalOptions, {
                confirmOnly: true,
                contentTemplate: '/views/modals/teacher.html',
                confirmAction: confirmAction
            });

            modalTeacher = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--teacher',
                scope: modalOptions,
                showClose: false,
                closeByDocument: false
            });
        }

        function login(register) {
            if ($scope.user.username) {
                $scope.user.username = $scope.user.username.toLowerCase();
            }
            userApi.loginUser($scope.user).success(function() {
                $log.debug('OK:');
                userApi.me().success(function(user) {
                    $scope.common.setUser(user);
                    if (user.properties.hasBeenAskedIfTeacher || user.properties.newsletter || register) {
                        _goToHome();
                    } else {
                        teacherModal();
                    }
                });
            }).error(function(response) {
                fireShakeEffect();
                if (response) {
                    //{error: "no_such_principal", errorDescription: "Unknown basic user credentials."}
                    if ($scope.user.username) {
                        userApi.validateUserName($scope.user.username.toLowerCase()).success(function() {
                            $scope.errors.login.password = true;
                            $scope.errors.login.emailUserName = false;
                        }).error(function() {
                            $scope.errors.login.emailUserName = true;
                            $scope.errors.login.password = false;
                        });
                    } else {
                        userApi.getUserId($scope.user.email).success(function() {
                            $scope.errors.login.password = true;
                            $scope.errors.login.emailUserName = false;
                        }).error(function() {
                            $scope.errors.login.emailUserName = true;
                            $scope.errors.login.password = false;
                        });
                    }
                    $scope.errors.disconnect = false;
                } else {
                    $scope.errors.login.emailUserName = false;
                    $scope.errors.login.password = false;
                    $scope.errors.disconnect = true;
                }
            });
        }

        function getUserSocial(userData) {
            var socialuserProvider,
                socialuser = {
                    username: $scope.user.username.toLowerCase(),
                    properties: {
                        term: true,
                        newsletter: true,
                        language: $translate.use()
                    }
                };
            if (provider === 'google') {
                socialuserProvider = {
                    email: userData.email,
                    firstName: userData.given_name,
                    lastName: userData.family_name,
                    identity: {
                        'oauthService': provider,
                        'oauthId': userData.id
                    }
                };
            } else if (provider === 'facebook') {
                socialuserProvider = {
                    email: userData.email,
                    firstName: userData.first_name,
                    lastName: userData.last_name,
                    identity: {
                        'oauthService': provider,
                        'oauthId': userData.id
                    }
                };
            }
            _.extend(socialuser, socialuserProvider);

            return socialuser;
        }

        function isUserName() {
            var regexp = /^[0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/;
            if ($scope.user.username.search(regexp) === -1) {
                return false;
            } else {
                return true;
            }
        }

        function _goToHome() {
            if ($routeParams.init) {
                $location.url(decodeURIComponent($routeParams.init));
            } else {
                $location.path('projects');
            }
        }

        function fireShakeEffect() {
          angular.element('[data-effect="shake"]').addClass('shake');
          setTimeout(function () {
              angular.element('[data-effect="shake"]').removeClass('shake');
          }, 250);
        }

        $scope.envData = envData;
        $scope.isLogin = true;
        $scope.isSocialRegister = false;
        $scope.isForgotPassword = false;
        $scope.checked = false;

        $scope.user = {
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            properties: {
                birthday: null,
                term: false,
                newsletter: false,
                language: 'es-ES'
            }
        };
        $scope.username = {
            invalid: false,
            free: true,
            searching: false,
            search: false
        };
        $scope.errors = {
            login: {
                password: false,
                emailUserName: false
            },
            register: {
                email: false,
                birthday: false,
                emptyBirthday: false,
                socialEmail: false
            },
            disconnect: false
        };
        $scope.recovery = {
            emailError: false,
            success: false,
            error: false
        };
        var userName, provider, access_token, userSocialData;

        if ($location.path() === '/register') {
            $scope.isLogin = false;
        }

        $scope.common.itsUserLoaded().then(function() {
            if ($scope.common.user.properties.hasBeenAskedIfTeacher || $scope.common.user.properties.newsletter) {
                _goToHome();
            } else {
                teacherModal();
            }
        });
    });
