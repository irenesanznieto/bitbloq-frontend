'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.userApi
 * @description
 * # userApi
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('userApi', function($http, $localStorage, $q, envData, tokenApi, _, utils, resources) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var exports = {};

        exports.me = function() {
            return $http.get(envData.config.iamEndpoint + 'user/me');
        };

        exports.registerUser = function(options) {
            return $http.post(envData.config.iamEndpoint + 'user', options);
        };

        exports.loginUser = function(options) {
            return tokenApi.generateToken(options).success(function(response) {
                $localStorage.userToken = response.accessToken;
                $localStorage.userTokenExpiresAt = response.expiresAt;
                $localStorage.userRefreshToken = response.refreshToken;
            });
        };

        exports.logout = function() {
            return $http.put(envData.config.iamEndpoint + 'user/me/signout').success(function() {
                delete $localStorage.userToken;
                delete $localStorage.userTokenExpiresAt;
                delete $localStorage.userRefreshToken;
                localStorage.removeItem('satellizer_token');
            });
        };

        exports.validateUserName = function(username) {
            return $http.head(envData.config.iamEndpoint + 'username/' + username);
        };

        exports.update = function(dataUser) {
            return $http({
                method: 'PUT',
                url: envData.config.iamEndpoint + 'user/me',
                data: dataUser
            });
        };

        exports.updateByToken = function(dataUser, token) {
            return $http({
                method: 'PUT',
                url: envData.config.iamEndpoint + 'user/me',
                data: dataUser,
                skipAuthorization: true,
                headers: {
                    authorization: 'Bearer ' + token
                }
            });
        };

        exports.getSocialProfile = function(provider, token) {
            if (provider === 'google') {
                return $http.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
            } else if (provider === 'facebook') {
                return $http.get('https://graph.facebook.com/me?access_token=' + token);
            }
        };

        exports.addSocialNetwork = function(dataProvider) {
            return $http({
                method: 'POST',
                url: envData.config.iamEndpoint + 'user/me/identity',
                data: dataProvider
            });
        };

        exports.getSocialNetwork = function() {
            var defered = $q.defer();
            this.getSocialNetworkData().success(function(data) {
                defered.resolve(_.pluck(data, 'oauthService'));
            }).error(function() {
                defered.resolve([]);
            });
            return defered.promise;
        };

        exports.getSocialNetworkData = function() {
            return $http({
                method: 'GET',
                url: envData.config.iamEndpoint + 'user/me/identity'
            });
        };

        exports.resetPassword = function(email) {
            return $http({
                method: 'GET',
                url: envData.config.iamEndpoint + 'user/resetPassword',
                params: {
                    email: email
                }
            });
        };

        exports.getUserId = function(email) {
            return $http({
                method: 'GET',
                url: envData.config.iamEndpoint + 'email/' + encodeURIComponent(email)
            });
        };


        // exports.getProfile = function(id) {
        //     var query = {
        //         'api:query': JSON.stringify([{
        //             $eq: {
        //                 id: id
        //             }
        //         }])
        //     };
        //     return _getProfiles(query);
        // };

        exports.getProfilesByACL = function(options) {
            var users = [],
                promises = [],
                deferedMain = $q.defer();
            options.forEach(function(acl) {
                var id = acl;
                if (id) {
                    var defered = $q.defer();
                    promises.push(defered.promise);
                    _getProfile(id).then(function(response) {
                        users.push(response.data);
                        defered.resolve(response.data);
                    }).catch(function() {
                        defered.resolve();
                    });
                }
            });

            $q.all(promises).then(function() {
                deferedMain.resolve(users);
            });

            return deferedMain.promise;
        };

        exports.getAliasByACL = function(acl) {
            var users = [];
            for (var item in acl) {
                if (acl[item].permission === 'READ' && item !== 'ALL') {
                    users.push(acl[item].properties.email);
                }
            }
            return users;
        };

        exports.getUsersByEmail = function(emails) {
            var userIds = [],
                promises = [],
                deferedMain = $q.defer();

            emails.forEach(function(email) {
                var defered = $q.defer();
                promises.push(defered.promise);
                exports.getUserId(email).then(function(response) {
                    var user = {
                        userId: response.data.id,
                        email: email
                    };
                    userIds.push(user);
                    defered.resolve(user);
                }).catch(function() {
                    defered.resolve();
                });
            });

            $q.all(promises).then(function() {
                deferedMain.resolve(userIds);
            });

            return deferedMain.promise;
        };

        exports.getAllUsers = function() {
            var queryParams = {
                'api:sort': {
                    '_createdAt': 'desc'
                },
                'api:page': 0,
                'api:pageSize': 50
            };
            return _getAllProfiles(queryParams, []);
        };

        /*
         ****** only admin user
         */

        exports.disconnectUser = function(userId) {
            return $http({
                method: 'PUT',
                url: envData.config.iamEndpoint + 'user/' + userId + '/disconnect'
            });
        };
        exports.getBannedUsers = function() {
            var params = {
                'api:query': [{
                    '$in': {
                        'scopes': ['bitbloq:user:banned']
                    }
                }],
                'api:sort': {
                    '_updatedAt': 'asc'
                }
            };

            return resources.getAll(envData.config.iamEndpoint, 'user', params);
        };

        exports.setUserBanned = function(user, banned) {
            if (banned) {
                user.scopes = ['bitbloq:user:banned'];
            } else {
                user.scopes = ['bitbloq:user'];
            }
            return _setUser(user);
        };

        function _setUser(user) {
            return $http({
                method: 'PUT',
                url: envData.config.iamEndpoint + 'user/' + user.id,
                data: user
            });
        }

        //***********************

        function _getProfile(userId) {
            return $http({
                method: 'GET',
                url: envData.config.iamEndpoint + 'user/' + userId + '/profile'
            });
        }

        function _getProfiles(params) {
            return $http({
                method: 'GET',
                url: envData.config.iamEndpoint + 'user/profile',
                params: params
            });
        }

        function _getAllProfiles(queryParams, resultArray, promise) {
            var dfd = promise || $q.defer();

            _getProfiles(queryParams).then(function(response) {
                resultArray = resultArray.concat(response.data);
                if (response.data.length === queryParams['api:pageSize']) {
                    queryParams['api:page']++;
                    _getAllProfiles(queryParams, resultArray, dfd);
                } else {
                    dfd.resolve(resultArray);
                }
            }, function(error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        return exports;
    });
