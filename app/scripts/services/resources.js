(function() {
    /*jshint bitwise: false*/
    'use strict';

    /**
     * @ngdoc service
     * @name bitbloqApp.allResources
     * @description
     * # Common service to create common requests.
     * Service in the bitbloqApp.
     */
    angular.module('bitbloqApp').factory('resources', resourcesApi);

    function resourcesApi($http, $q, utils, envData) {

        var exports = {
            get: get,
            getAll: getAll
        };

        return exports;

        function get(resource, queryParams, endpoint) {

            endpoint = endpoint || envData.config.resourcesEndpoint;

            if (!queryParams['api:page']) {
                queryParams['api:page'] = 0;
            }

            if (!queryParams['api:pageSize']) {
                queryParams['api:pageSize'] = 50;
            }

            queryParams = utils.serializeData(queryParams) || {};

            return $http({
                method: 'GET',
                url: endpoint + resource + '?' + queryParams
            });

        }

        function getAll(endpoint, resource, queryParams, resultArray, promise) {
            var defered = promise || $q.defer();
            resultArray = resultArray || [];
            queryParams = queryParams || {};

            get(resource, queryParams, endpoint).then(function(response) {
                resultArray = resultArray.concat(response.data);
                if (response.data.length === queryParams['api:pageSize']) {
                    queryParams['api:page']++;
                    getAll(endpoint, resource, queryParams, resultArray, defered);
                } else {
                    defered.resolve(resultArray);
                }
            }, function(error) {
                defered.reject(error.data);
            });
            return defered.promise;
        }
    }

})();
