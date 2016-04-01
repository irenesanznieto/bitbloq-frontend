/* global MobileDetect */
'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.common
 * @description
 * # common
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('common', function($filter, $log, envData, userApi, $location, $rootScope, $q, _, $document, $sessionStorage, $translate, ngDialog, $http, amMoment, $window) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var exports = {},
            navigatorLang = $window.navigator.language || $window.navigator.userLanguage;
        $log.log('Bitbloq version:', envData.config.version);

        //See drag directives
        exports.draggingElement = {};

        exports.section = '';

        exports.user = null;

        exports.appAlert = null;

        exports.warnedOfIncompatibility = false;

        exports.properties = null;

        exports.isLoading = false;

        exports.connectedWeb2Board = false;

        exports.session = {
            bloqTab: false,
            project: {},
            save: false
        };

        exports.translate = $filter('translate');

        exports.corbelEndPoints = [envData.config.iamEndpoint, envData.config.resourcesEndpoint];

        exports.removeProjects = [];

        exports.refreshTokenPromise = null;

        exports.oldVersionMasthead = false;

        exports.langToBQ = {
            ca: 'es',
            de: 'de',
            en: 'uk',
            es: 'es',
            eu: 'es',
            fr: 'fr',
            gl: 'es',
            it: 'it',
            nl: 'uk',
            pt: 'pt',
            ru: 'ru',
            zh: 'uk'
        };

        exports.langToDiwo = {
            ca: '',
            de: 'de',
            en: 'en',
            es: '',
            eu: 'eu',
            fr: 'fr',
            gl: '',
            it: 'it',
            nl: 'en',
            pt: 'pt-pt',
            ru: 'en',
            zh: 'en'
        };

        var langToAngularLng = {
            ca: 'ca-ES',
            de: 'de-De',
            en: 'en-GB',
            es: 'es-ES',
            eu: 'eu-ES',
            fr: 'fr-FR',
            gl: 'gl',
            it: 'it-IT',
            nl: 'en-GB',
            pt: 'pt-PT',
            ru: 'en-GB',
            zh: 'en-GB'
        };

        exports.setUser = function(user) {
            if (loadedUserPromise.promise.$$state.status !== 0) {
                loadedUserPromise = $q.defer();
            }
            if (user !== null && typeof user === 'object') {
                var lng = user.properties.language || navigatorLang || 'es-ES';
                $translate.use(lng);
                if (user.properties.cookiePolicyAccepted) {
                    $sessionStorage.cookiesAccepted = true;
                    exports.cookiesAccepted = true;
                }
                loadedUserPromise.resolve();
            } else {
                $translate.use(navigatorLang);
                loadedUserPromise.reject();
            }
            exports.user = user;
        };

        exports.itsUserLoaded = function() {
            return loadedUserPromise.promise;
        };

        var md = new MobileDetect(window.navigator.userAgent);

        exports.acceptCookies = function() {
            if (exports.user) {
                userApi.update({
                    properties: {
                        cookiePolicyAccepted: true
                    }
                });
            }
            $sessionStorage.cookiesAccepted = true;
            exports.cookiesAccepted = true;
        };

        exports.goToLogin = function() {
            var url = $location.url();
            $location.path('login').search({
                init: url
            });
        };

        exports.goToRegister = function() {
            var url = $location.url();
            $location.path('register').search({
                init: url
            });
        };

        function processRoute() {
            ngDialog.closeAll();
            var firstPathItem = $location.path().split('/')[1];
            $log.debug('section', firstPathItem);
            exports.section = firstPathItem;
            checkForCompatibility($location.path());
        }

        function checkForCompatibility(path) {
            if (path && path !== '' && !$sessionStorage.hasBeenWarnedAboutCompatibility) {
                if (isNaN(md.version('Chrome')) || md.version('Chrome') < 40 || md.phone() || md.tablet()) {
                    if (!exports.continueToURL) {
                        exports.continueToURL = path;
                    }
                    if (isNaN(md.version('Chrome')) && !md.phone() && !md.tablet() || md.version('Chrome') < 40 && !md.phone() && !md.tablet()) {
                        $location.path('/unsupported/desktop');
                    } else if (md.tablet()) {
                        $location.path('/unsupported/tablet');
                    } else if (md.phone()) {
                        $location.path('/unsupported/phone');
                    }
                }
            }
        }

        function getProperties() {
            $http.get(envData.config.resourcesEndpoint + 'resource/bitbloq:Properties').success(function(items) {
                $log.debug('properties', items);
                exports.properties = items[0];
            });
        }

        function getAppAlert() {

            /*$http.get(envData.config.resourcesEndpoint + 'resource/bitbloq:Alerts', {
             'api:query': [{
             '$gte': {
             "startDate": Date.now()
             },
             '$lte': {
             "endDate": Date.now()
             }
             }]
             }).success(function(alerts) {
             $log.debug('alerts', alerts);
             exports.appAlert = alerts[0];
             })*/
        }

        var loadedUserPromise = $q.defer();

        if (!exports.user) {
            userApi.me().success(function(response) {
                exports.setUser(response);
                exports.userIsLoaded = true;
            }).error(function() {
                exports.userIsLoaded = true;
                exports.setUser(null);
            });

        }

        if ($sessionStorage.cookiesAccepted) {
            exports.cookiesAccepted = true;
        }

        if (navigatorLang) {
            navigatorLang = langToAngularLng[navigatorLang.split('-')[0]];
        }

        processRoute();
        exports.itsUserLoaded().finally(function() {
            getProperties();
            getAppAlert();

        });

        $rootScope.$on('$locationChangeSuccess', function() {
            processRoute();
        });

        $rootScope.$on('$translateChangeEnd', function(evt, newLang) {
            amMoment.changeLocale(newLang.language);
        });

        return exports;

    });

/* MODALS */
//  This example is using lodash _extend()
//  Type of modals:
//      -Without buttons
//      -With confirm button: set confirmOnly as true in the modal scope
//      -With confirm and reject buttons: set confirmOrReject as true in the modal scope
//  Controller side:
// $scope.clickToOpen = function() {

//     var confirmAction = function(e) {
//             ngDialog.close('ngdialog1');
//         },
//         parent = $rootScope,
//         modalOptions = parent.$new();

//     _.extend(modalOptions, {
//         title: 'hola que ase',
//         confirmOnly: true,
//         buttonConfirm: 'Aceptar',
//         buttonReject: 'Cancelar',
//         confirmAction: confirmAction
//     });

//     ngDialog.open({
//         template: '/views/modal.html',
//         className: 'modal--container',
//         scope: modalOptions,
//         showClose: false
//     });
// };
//
// Template side:
// ng-click="clickToOpen()"