/*jshint bitwise: false*/
'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.hardwareResources
 * @description
 * # Lists all the available hardware resources api
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('resource', function($http, $q) {
        var exports = {};

        exports.get = function(file) {
            var deferred = $q.defer();

            //TODO move the url to config, and maybe return the $http promise directly if we don't want to do
            //anything to the data
            $http.get(file).then(function(response) {
                deferred.resolve(response.data);
            }).catch(function(err) {
                deferred.reject(err);
            });

            return deferred.promise;
        };

        return exports;
    });