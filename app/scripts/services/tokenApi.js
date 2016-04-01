'use strict';
/* global rstr2b64, str2rstr_utf8, b64tob64u, b64_hmac_sha256 */
/* jshint camelcase: false */

/**
 * @ngdoc service
 * @name bitbloqApp.tokenApi
 * @description
 * # tokenApi
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('tokenApi', function($http, $log, envData, packageData, utils) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var data = {};

        data.getToken = function(options) {
            return $http({
                method: 'POST',
                skipAuthorization: true,
                url: envData.config.iamEndpoint + 'oauth/token',
                data: utils.serializeData(options),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        data.generateToken = function(options) {
            return data.getToken({
                assertion: data.createAssertion(options),
                grant_type: envData.config.grantType
            });
        };

        data.createAssertion = function(options) {
            options = options || {};
            var token = '';

            var header = {
                typ: 'JWT',
                alg: envData.config.jwtAlgorithm
            };

            var payload = {
                iss: envData.config.clientId,
                aud: envData.config.claimAud,
                'basic_auth.username': options.username || options.email,
                'basic_auth.password': options.password,
                'oauth.service': options['oauth.service'],
                'oauth.access_token': options['oauth.access_token'],
                refresh_token: options.refreshToken,
                version: packageData.version,
                exp: Math.round((new Date().getTime() / 1000)) + envData.config.claimExp
            };

            header = rstr2b64(str2rstr_utf8(JSON.stringify(header)));
            payload = rstr2b64(str2rstr_utf8(JSON.stringify(payload)));

            var segment = header + '.' + payload;

            var sign = b64tob64u(b64_hmac_sha256(envData.config.clientSecret, segment));

            token = segment + '.' + sign;

            return token;
        };

        return data;
    });
