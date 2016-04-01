/*jshint camelcase: false */
/*jshint unused: false */
'use strict';

/**
 * @ngdoc overview
 * @name bitbloqApp
 * @description
 * # bitbloqApp
 *
 * Main module of the application.
 */
angular
    .module('bitbloqApp', [
        'ngAria',
        'ngCookies',
        'ngRoute',
        'ngSanitize',
        'config',
        'pascalprecht.translate',
        'ngStorage',
        'duScroll',
        'ngWebSocket',
        'angular-google-analytics',
        'satellizer',
        'ngDialog',
        'angularMoment',
        'ngTagsInput',
        'puElasticInput',
        'youtube-embed',
        'ui.ace',
        'textAngular',
        'angular-clipboard',
        'angularUtils.directives.dirPagination'
    ]).config(['$provide', '$routeProvider', '$httpProvider', '$translateProvider', '$authProvider', '$logProvider', 'envData',
        function($provide, $routeProvider, $httpProvider, $translateProvider, $authProvider, $logProvider, envData) {

            if (envData.config.env === 'production') {
                $logProvider.debugEnabled(false);
            }

            $routeProvider
                .when('/', {
                    templateUrl: 'views/landing/landing.html',
                    controller: 'LandingCtrl'
                })
                .when('/account', {
                    templateUrl: 'views/account.html',
                    controller: 'AccountCtrl'
                })
                .when('/bloqsproject/:id?', {
                    templateUrl: 'views/make.html',
                    controller: 'MakeCtrl',
                    reloadOnSearch: false
                })
                .when('/explore:params?', {
                    templateUrl: 'views/explore.html',
                    controller: 'ExploreCtrl',
                    reloadOnSearch: false
                })
                .when('/login:params?', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                    islogin: true
                })
                .when('/register', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                    islogin: false
                })
                // .when('/bloqsdesign', {
                //     templateUrl: 'views/bloqsdesign.html',
                //     controller: 'BloqsdesignCtrl'
                // })
                .when('/projects', {
                    templateUrl: 'views/projects.html',
                    controller: 'ProjectsCtrl'
                })
                .when('/styleguide', {
                    templateUrl: 'views/styleguide.html',
                    controller: 'StylesCtrl'
                })
                .when('/cookies', {
                    templateUrl: 'views/cookies.html',
                    controller: 'CookiesCtrl'
                })
                .when('/terms', {
                    templateUrl: 'views/terms.html',
                    controller: 'TermsCtrl'
                })
                .when('/account', {
                    templateUrl: 'views/account.html',
                    controller: 'AccountCtrl'
                })
                .when('/project/:id', {
                    templateUrl: 'views/project.html',
                    controller: 'ProjectCtrl'
                })
                .when('/help/:section?/:forumsection?/:forumresource?', {
                    templateUrl: 'views/help/help.html',
                    controller: 'HelpCtrl',
                    reloadOnSearch: false
                })
                .when('/404', {
                    templateUrl: '404.html'
                })
                .when('/maintenance', {
                    templateUrl: 'maintenance.html'
                })
                .when('/recovery/:token', {
                    templateUrl: 'views/resetPassword.html',
                    controller: 'ResetPasswordCtrl'
                })
                .when('/unsupported/:id', {
                    templateUrl: 'views/unsupported.html',
                    controller: 'UnsupportedCtrl'
                })
                // .when('/user/:id?', {
                //     templateUrl: 'views/user.html',
                //     controller: 'UserCtrl'
                // })
                .when('/features', {
                    templateUrl: 'views/landing/landing-features.html',
                    controller: 'LandingCtrl'
                })
                .when('/downloads', {
                    templateUrl: 'views/landing/landing-downloads.html',
                    controller: 'LandingCtrl'
                })
                .when('/aboutus', {
                    templateUrl: 'views/landing/landing-aboutus.html',
                    controller: 'LandingCtrl'
                })
                .when('/offline', {
                    templateUrl: 'views/landing/landing-offline.html',
                    controller: 'LandingCtrl'
                })
                .when('/codeproject/:id?', {
                    templateUrl: 'views/code.html',
                    controller: 'CodeCtrl',
                    reloadOnSearch: false
                })
                .when('/bitbloq-help/', {
                    templateUrl: 'views/landing/landing-help.html',
                    controller: 'LandingCtrl'
                })
                .otherwise({
                    redirectTo: '/404'
                });

            $authProvider.loginRedirect = null;

            // Google
            $authProvider.google({
                clientId: envData.google.clientId,
                apiKey: envData.google.apikey,
                scope: envData.google.scope,
                apis: envData.google.apis,
                responseType: 'token',
                visibleActions: envData.google.visibleActions,
                display: 'popup',
                popupOptions: {
                    width: 580,
                    height: 400
                }
            });

            // Facebook
            $authProvider.facebook({
                clientId: envData.facebook.clientId,
                url: '/auth/facebook',
                authorizationEndpoint: 'https://www.facebook.com/dialog/oauth',
                scope: envData.facebook.scope,
                responseType: 'token',
                display: 'popup',
                version: envData.facebook.version,
                popupOptions: {
                    width: envData.facebook.popupOptions.width,
                    height: envData.facebook.popupOptions.height
                }
            });
            // register the interceptor as a service
            $provide.factory('httpInterceptor', function($q, $localStorage, $injector, $log, alertsService, envData) {
                return {
                    // optional method
                    'request': function(config) {
                        if (!config.skipAuthorization) {

                            var tokenApi = $injector.get('tokenApi'),
                                common = $injector.get('common');

                            var i = 0,
                                found = false;
                            while (!found && (i < common.corbelEndPoints.length)) {
                                if (config.url.indexOf(common.corbelEndPoints[i]) === 0) {
                                    found = true;
                                }
                                i++;
                            }

                            if (found) {
                                //$log.debug('found!');
                                //si hay token de usuario, lo usamos, si no, generamos un token de app
                                if ($localStorage.userToken) {
                                    //$log.debug('hay algo en localStorage!', $localStorage.userToken);
                                    //si esta caducado, generamos uno nuevo con el refresh, si no. pues hacemos la peticion sin nada y dara error
                                    if (new Date().getTime() >= $localStorage.userTokenExpiresAt) {
                                        $log.debug('esta caducao', config);
                                        if (!common.refreshTokenPromise || common.refreshTokenPromise.$$state.status !== 0) {

                                            $log.debug('startRefresh', config.method, config.url);
                                            common.refreshTokenPromise = tokenApi.generateToken({
                                                refreshToken: $localStorage.userRefreshToken
                                            }).then(function(response) {
                                                $log.debug('refreshTokenSuccess', config.method, config.url);

                                                $localStorage.userToken = response.data.accessToken;
                                                $localStorage.userTokenExpiresAt = response.data.expiresAt;
                                                $localStorage.userRefreshToken = response.data.refreshToken;

                                                config.headers.Authorization = 'Bearer ' + response.data.accessToken;

                                                return config;
                                            }, function(response) {
                                                $log.debug('refreshTokenError', config.method, config.url);
                                                delete $localStorage.userToken;
                                                delete $localStorage.userTokenExpiresAt;
                                                delete $localStorage.userRefreshToken;

                                                return config;
                                            });
                                            return common.refreshTokenPromise;

                                        } else {
                                            var progressPromise = $q.defer();
                                            $log.debug('refresh in progress', config.method, config.url);
                                            common.refreshTokenPromise.then(function() {
                                                progressPromise.resolve();
                                            }, function() {
                                                progressPromise.reject();
                                            });
                                            return progressPromise.promise.then(function() {
                                                $log.debug('refreshIn progress TokenSuccess', config.method, config.url);
                                                config.headers.Authorization = 'Bearer ' + $localStorage.userToken;

                                                return config;
                                            }, function(response) {
                                                $log.debug('refresh in progress TokenError', config.method, config.url);
                                                return config;
                                            });
                                        }

                                    } else {
                                        //$log.debug('no lo esta!');
                                        config.headers.Authorization = 'Bearer ' + $localStorage.userToken;
                                        return config;
                                    }

                                } else {
                                    if ($localStorage.appToken && (new Date().getTime() < $localStorage.appTokenExpiresAt)) {
                                        config.headers.Authorization = 'Bearer ' + $localStorage.appToken;
                                        return config;
                                    } else {
                                        //$log.debug('no lo hay!', config);
                                        //si no lo hay generamos token de app
                                        return tokenApi.generateToken().then(function(response) {
                                            //$log.debug('app Token generated');
                                            $localStorage.appTokenExpiresAt = response.data.expiresAt;
                                            $localStorage.appToken = response.data.accessToken;
                                            config.headers.Authorization = 'Bearer ' + response.data.accessToken;
                                            return config;
                                        }, function() {
                                            $log.error('our app token its invalid');
                                            delete $localStorage.appTokenExpiresAt;
                                            delete $localStorage.appToken;
                                            return config;
                                        });
                                    }
                                }

                            } else {
                                return config;
                            }
                        } else {
                            return config;
                        }
                    },

                    // optional method
                    'requestError': function(rejection) {
                        $log.debug('requestError', rejection);
                        // do something on error
                        // if (canRecover(rejection)) {
                        //     return responseOrNewPromise
                        // }
                        return $q.reject(rejection);
                    },

                    // optional method
                    'response': function(response) {
                        // do something on success
                        return response;
                    },

                    // optional method
                    'responseError': function(rejection) {
                        $log.debug('responseError', rejection);

                        if (rejection.data && ((rejection.data.error === 'invalid_time') || (rejection.data.errorDescription === 'Authorization request is now past. Check your system clock.'))) {
                            alertsService.add('general_text_errorSystemClock', 'error-system-clock', 'error');
                        }
                        switch (rejection.status) {
                            case 504:
                                var $location = $injector.get('$location');
                                $location.path('maintenance');
                                break;
                        }

                        // do something on error
                        // if (canRecover(rejection)) {
                        //     return responseOrNewPromise
                        // }
                        return $q.reject(rejection);
                    }
                };
            });

            $httpProvider.interceptors.push('httpInterceptor');
            $translateProvider.useStaticFilesLoader({
                prefix: 'res/locales/',
                suffix: '.json'
            });

            //indicamos el idioma inicial
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
            $translateProvider.preferredLanguage(envData.config.defaultLang);
            $translateProvider.fallbackLanguage('en-GB');

        }
    ])
    .config(function(AnalyticsProvider, envData) {
        // initial configuration
        /* For more information about provider configuration: https://github.com/revolunet/angular-google-analytics#example */
        AnalyticsProvider.setAccount(envData.config.googleAnalyticsCode);
        AnalyticsProvider.trackPages(true);
        AnalyticsProvider.trackUrlParams(false);
        AnalyticsProvider.useAnalytics(true);

        if (envData.config.env === 'local') {
            AnalyticsProvider.setDomainName('none');
        }

    })
    .config(function($provide) {
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
            // $delegate is the taOptions we are decorating
            // register the tool with textAngular
            taRegisterTool('uploadImage', {
                iconclass: 'fa fa-picture-o',
                tooltiptext: '',
                action: function() {
                    $('.main-image--input').click();
                }
            });
            // add the button to the default toolbar definition
            taOptions.toolbar[1].push('uploadImage');
            return taOptions;
        }]);
    })
    .config(function($provide) {
        $provide.decorator('taTranslations', function($delegate) {
            $delegate.heading.tooltip = 'H';
            $delegate.quote.tooltip = '';
            $delegate.pre.tooltip = '';
            $delegate.p.tooltip = '';

            $delegate.bold.tooltip = '';
            $delegate.italic.tooltip = '';
            $delegate.underline.tooltip = '';
            $delegate.ol.tooltip = '';
            $delegate.ul.tooltip = '';
            $delegate.undo.tooltip = '';
            $delegate.redo.tooltip = '';
            $delegate.clear.tooltip = '';

            $delegate.insertImage.tooltip = '';
            $delegate.insertLink.tooltip = '';
            $delegate.insertVideo.tooltip = '';
            return $delegate;
        });
    })
    .filter('encode', function() {
        return window.encodeURIComponent;
    })
    .run(function(Analytics, _, jsPlumb, bloqs, bloqsUtils, bloqsLanguages) {
        // Make sure _ is invoked at runtime. This does nothing but force the "_" to
        // be loaded after bootstrap. This is done so the "_" factory has a chance to
        // "erase" the global reference to the lodash library.
        // ...
        bloqs.setOptions({
            fieldOffsetLeft: 70,
            fieldOffsetTopSource: ['header', 'nav--make', 'actions--make', 'tabs--title'],
        });
    })
    .run(function(amMoment, envData) {
        amMoment.changeLocale(envData.config.defaultLang);
    });
