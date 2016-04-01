'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.imageApi
 * @description
 * # imageApi
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('imageApi', function($http, envData, $q, $log) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var data = {};

        data.save = function(idImage, data, collection) {
            collection = collection || 'Angularproject';
            return $http({
                method: 'PUT',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:' + collection + '/' + idImage,
                headers: {
                    Accept: data.type
                },
                data: data
            });
        };

        data.get = function(idImage, dataType, collection, params) {
            dataType = dataType || 'image/jpeg';
            collection = collection || 'Angularproject';
            var data = {
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:' + collection + '/' + idImage,
                headers: {
                    Accept: dataType
                },
                responseType: 'blob'
            };
            if (params) {
                data.params = params;
            }

            return $http(data);
        };

        data.delete = function(idImage, dataType, collection) {
            dataType = dataType || 'image/jpeg';
            collection = collection || 'Angularproject';
            return $http({
                method: 'DELETE',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:' + collection + '/' + idImage,
                headers: {
                    Accept: dataType
                }
            });
        };

        data.createImageUrl = function(blob) {
            var reader = new FileReader();
            var def = $q.defer();

            reader.onloadend = function(e) {
                def.resolve(e.target.result);
            }.bind(this);

            reader.onerror = function(e) {
                def.reject(e.target.result);
            }.bind(this);

            reader.readAsDataURL(blob); //read data as url

            return def.promise;
        };

        data.getAvatarSocialNetwork = function(provider, userId) {
            var deferred = $q.defer();
            if (provider === 'google') {
                $http.get('https://www.googleapis.com/plus/v1/people/' + userId + '?fields=image&key=' + envData.google.apikey).then(function(socialData) {
                    var picture = socialData.data.image.url.split('?sz=')[0];
                    //deferred.resolve(picture + '?sz=200');
                    deferred.resolve({url: picture});
                }).catch(function(error) {
                    deferred.reject(error);
                });

            } else if (provider === 'facebook') {
                $http({
                    method: 'GET',
                    url: 'https://graph.facebook.com/' + userId + '/picture?&width=200&height=200',
                    skipAuthorization: true,
                    responseType: 'blob'
                }).then(function(response) {
                    var reader = new FileReader();

                    reader.onloadend = function(e) {
                        deferred.resolve({blob:response.data, url:e.target.result});
                    };

                    reader.readAsDataURL(response.data);

                }).catch(function(error) {
                    deferred.reject(error);
                });
            }
            return deferred.promise;
        };

        data.getBlobByUrl = function(url) {
            return $http({
                method: 'GET',
                url: url,
                skipAuthorization: true,
                responseType: 'blob'
            });
        };

        data.checkVideoID = function(id) {
            //Este servicio no funciona si no estamos logueados con google, Hay que mirar esto....
            $log.debug(id);
            var deferred = $q.defer();
            var response = {
                data: {
                    items: [0, 1, 2]
                }
            };
            deferred.resolve(response);
            return deferred.promise;
            /*return $http({
             url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + envData.google.apikey + '&part=snippet'
             });*/
        };

        return data;
    });
