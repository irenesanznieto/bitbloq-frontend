(function() {
    'use strict';
    angular
        .module('bitbloqApp')
        .factory('forumApi', forumFactory);

    function forumFactory($http, envData, utils, $q, $log, _, resources, imageApi) {
        var forumApi = {
            getCategories: getCategories,
            getCategoryId: getCategoryId,
            getCategoryName: getCategoryName,
            getTheme: getTheme,
            getAnswers: getAnswers,
            getThemesByCategory: getThemesByCategory,
            getStatsCategory: getStatsCategory,
            getLastTheme: getLastTheme,
            getLastAnswer: getLastAnswer,
            getViewer: getViewer,
            postAnswer: postAnswer,
            postCategory: postCategory,
            postTheme: postTheme,
            countAnswers: countAnswers,
            updateCategory: updateCategory,
            updateAnswer: updateAnswer,
            addViewer: addViewer,
            mainCounter: [],
            deleteAnswer: deleteAnswer,
            deleteTheme: deleteTheme,
            getAllAnswers: getAllAnswers,
            getAllThemes: getAllThemes,
            moveTheme: moveTheme
        };

        return forumApi;

        // Models

        // Get Data
        function getData(resource, options) {
            //if no soy el user owner
            options = options || {
                'api:pageSize': 50
            };
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:' + resource,
                params: options
            });
        }

        function getCategories() {
            return getData('ForumCategories');
        }

        function getCategoryName(categoryId) {
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumCategories/',
                params: {
                    'api:query': [{
                        '$eq': {
                            'id': categoryId
                        }
                    }],
                    'api:ageSize': 1
                }
            });
        }

        function getCategoryId(categoryName) {
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumCategories/',
                params: {
                    'api:query': [{
                        '$eq': {
                            'name': categoryName
                        }
                    }],
                    'api:ageSize': 1
                }
            });
        }

        function getTheme(themeId) {
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumThemes/' + themeId
            });
        }

        function getThemesByCategory(categoryId, pageSize) {
            pageSize = pageSize || 50;
            var params = {
                'api:query': [{
                    '$eq': {
                        'categoryId': categoryId
                    }
                }],
                'api:sort': {
                    '_updatedAt': 'desc'
                },
                'api:pageSize': pageSize
            };
            return resources.getAll(envData.config.resourcesEndpoint, 'resource/bitbloq:ForumThemes', params);
        }

        function getAllAnswers() {
            return resources.getAll(envData.config.resourcesEndpoint, 'resource/bitbloq:ForumAnswers');
        }

        function getAllThemes() {
            return resources.getAll(envData.config.resourcesEndpoint, 'resource/bitbloq:ForumThemes');
        }

        function getAnswers(themeId) {
            var params = utils.serializeData({

                'api:query': [{
                    '$eq': {
                        'themeId': themeId
                    }
                }],
                'api:pageSize': 50,
                'api:sort': {
                    '_updatedAt': 'asc'
                }
            });

            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumAnswers?' + params
            });
        }

        function getStatsCategory(categoryId) {
            var defered = $q.defer(),
                themesIds = [];
            forumApi.mainCounter[categoryId] = {
                themes: 0,
                answers: 0
            };

            _getStatsCategoryRecursive(categoryId, themesIds, 0).then(function(idArray) {
                themesIds = idArray;
                countAnswers(themesIds).then(function(response) {
                    forumApi.mainCounter[categoryId].answers = response.data.count || 0;
                }).finally(function() {
                    getLastTheme(themesIds).then(function(response) {
                        if (response) {
                            forumApi.mainCounter[categoryId].lastTheme = {
                                creator: {
                                    id: response.creator.id,
                                    name: response.creator.name
                                },
                                date: response._updatedAt,
                                threadName: response.title,
                                id: response.id
                            };
                        }
                    }).finally(function() {
                        defered.resolve(forumApi.mainCounter[categoryId]);
                    });

                });
            });

            return defered.promise;
        }

        function _getStatsCategoryRecursive(categoryId, themesIds, page, promise) {
            var defered = promise || $q.defer();
            $http({
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumThemes/',
                method: 'GET',
                params: {
                    'api:query': {
                        '$eq': {
                            categoryId: categoryId
                        }
                    },
                    'api:page': page,
                    'api:pageSize': 50
                }
            }).then(function(response) {
                forumApi.mainCounter[categoryId].themes += response.data.length;
                themesIds = themesIds.concat(_.pluck(response.data, 'id'));
                if (response.data.length === 50) {
                    _getStatsCategoryRecursive(categoryId, themesIds, page + 1, defered);
                } else {
                    defered.resolve(themesIds);
                }
            }).catch(function() {
                defered.reject();
            });

            return defered.promise;
        }

        function getViewer(themeId) {
            var defered = $q.defer();
            $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumStats/' + themeId
            }).then(function(response) {
                defered.resolve(response.data);
            }).catch(function() {
                defered.resolve({
                    timesViewed: 0
                });
            });

            return defered.promise;
        }

        function addViewer(themeId) {
            getViewer(themeId).then(function(response) {
                response.timesViewed++;
                return $http({
                    method: 'PUT',
                    url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumStats/' + themeId,
                    data: response
                });
            });
        }

        function countAnswers(themeIds) {
            var params = utils.serializeData({
                'api:query': [{
                    '$in': {
                        'themeId': themeIds
                    }
                }, {
                    '$ne': {
                        'main': true
                    }
                }],
                'api:aggregation': {
                    '$count': '*'
                }
            });

            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumAnswers?' + params
            });
        }

        function getLastAnswer(themeId) {
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumAnswers/',
                params: {
                    'api:query': [{
                        '$eq': {
                            'themeId': themeId
                        }
                    }],
                    'api:ageSize': 1,
                    'api:sort': {
                        '_updatedAt': 'desc'
                    }
                }
            });
        }

        function getLastTheme(themeIds) {
            var defered = $q.defer(),
                params = utils.serializeData({
                    'api:query': [{
                        '$in': {
                            'themeId': themeIds
                        }
                    }],
                    'api:ageSize': 1,
                    'api:sort': {
                        '_updatedAt': 'desc'
                    }
                });
            $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumAnswers?' + params
            }).then(function(response) {
                if (response.data.length > 0) {
                    getTheme(response.data[0].themeId).then(function(response) {
                        defered.resolve(response.data);
                    }).catch(function(error) {
                        defered.reject(error);
                    });
                } else {
                    defered.resolve();
                }
            }).catch(function(error) {
                defered.reject(error);
            });

            return defered.promise;
        }

        // only it's used when user is the owner
        function updateCategory(categoryId, dataproject) {
            return $http({
                method: 'PUT',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumCategories/' + categoryId,
                data: dataproject
            });
        }

        // Post Data
        function _postData(data, collection) {
            return $http({
                method: 'POST',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:' + collection,
                data: data
            }).then(function(response) {
                return response.headers().location.split(/[,/]+/).pop();
            });
        }

        function postAnswer(answer) {
            return _postData(answer, 'ForumAnswers');
        }

        function postCategory(category) {
            return _postData(category, 'ForumCategories');
        }

        function postTheme(thread) {
            // Necesito que devuelva el id del post creado.
            return _postData(thread, 'ForumThemes');
        }

        // Updates

        function updateAnswer(answerId, answer) {
            return $http({
                method: 'PUT',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumAnswers/' + answerId,
                data: answer
            });
        }

        function deleteAnswer(answer) {
            if (answer.images && answer.images.length > 0) {
                answer.images.forEach(function(img) {
                    imageApi.delete(img.id, img.type, 'ForumAnswers');
                });
            }
            return $http({
                method: 'DELETE',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumAnswers/' + answer.id
            });
        }

        function deleteTheme(themeId) {
            return getAnswers(themeId).then(function(response) {
                $log.log(response);
                response.data.forEach(function(answer) {
                    deleteAnswer(answer);
                });
                return $http({
                    method: 'DELETE',
                    url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumThemes/' + themeId
                });
            });
        }

        // only admin user
        function moveTheme(themeId, categoryName) {
            return getCategoryId(categoryName).then(function(category) {
                return getTheme(themeId).then(function(theme) {
                    if(theme.data.categoryId !== category.data[0].id) {
                        theme.data.categoryId = category.data[0].id;
                        return _updateTheme(theme.data);
                    } else {
                        return true;
                    }
                });
            });

        }

        function _updateTheme(theme) {
            return $http({
                method: 'PUT',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ForumThemes/' + theme.id,
                data: theme
            });
        }
    }
})
();
