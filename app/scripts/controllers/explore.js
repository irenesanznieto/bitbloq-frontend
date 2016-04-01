'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('ExploreCtrl', function($scope, $window, $log, $timeout, $location, $routeParams, envData, _, projectApi, userApi) {

        $scope.componentFilter = function(newFilter) {
            if (newFilter === 'without-components' && $scope.componentsFilterOptions[0].value) {

                $scope.componentsFilterOptions.forEach(function(item) {
                    item.value = false;
                });
                $scope.componentsFilterOptions[0].value = true;
                $scope.componentsFilters = [];
                $scope.filterParams.compo = 'without-components';
            } else {
                if (newFilter) {
                    $scope.componentsFilterOptions[0].value = false;
                }
                $scope.componentsFilters = _.pluck(_.where($scope.componentsFilterOptions, {
                    value: true
                }), 'option');
                $scope.filterParams.compo = $scope.componentsFilters.length > 0 ? $scope.componentsFilters.join('+') : undefined;
            }
            if (newFilter) {
                $scope.search();
            }
        };

        $scope.genericFilter = function(newFilter, preventSearch) {
            if (newFilter && $scope.genericFilterOptions[0].value) {

                $scope.genericFilterOptions.forEach(function(item) {
                    item.value = false;
                });

                $scope.genericFilterOptions[0].value = false;

                $scope.genericFilters = [];
                delete $scope.filterParams.project;

            } else {

                $scope.genericFilterOptions[0].value = true;

                $scope.genericFilters = _.pluck(_.where($scope.genericFilterOptions, {
                    value: true
                }), 'option')[0];

                $scope.filterParams.project = $scope.genericFilters;
            }
            if (!preventSearch) {
                $scope.search();
            }
        };

        $scope.boardFilter = function(newFilter, preventSearch) {
            $scope.boardsFilterOptions.forEach(function(item) {
                if (item.option !== newFilter) {
                    item.value = false;
                }
            });
            $scope.boardFilters = _.pluck(_.where($scope.boardsFilterOptions, {
                value: true
            }), 'option')[0];
            $scope.filterParams.board = $scope.boardFilters;
            if (!preventSearch) {
                $scope.search();
            }
        };

        $scope.sort = function(option) {
            $scope.sortSelected = option;
            $scope.search();
        };

        $scope.search = function() {
            $scope.exploraProjects = [];
            $scope.pageProjects = 0;
            $location.search($scope.filterParams);
            $scope.getPublicProjects();
        };

        $scope.getPublicProjects = function() {
            var queryParamsArray = getRequest(),
                queryParams = queryParamsArray[0] || {};

            if (!queryParams['api:page']) {
                var pageParams = {
                    'api:page': $scope.pageProjects++
                };
                angular.extend(queryParams, pageParams);
            }
            $log.debug('getPublicProjects', queryParams);
            projectApi.getPublic(queryParams, queryParamsArray[1]).then(function(response) {
                angular.extend(queryParams, {
                    'api:aggregation': {
                        '$count': '*'
                    }
                });
                projectApi.getPublic(queryParams, queryParamsArray[1]).then(function(data) {
                    $scope.projectCount = $scope.exploraProjects.length + '/' + data.data.count;
                    $scope.common.isLoading = false;
                });
                $log.debug('newPublicProjects', response);
                response.data.forEach(function(item) {
                    _getStats(item.id);
                });
                //_getUsers(response.data);
                if (queryParams['api:page'] === 0) {
                    $scope.exploraProjects = response.data;
                } else {
                    $scope.exploraProjects.push.apply($scope.exploraProjects, response.data);
                }

            }, function(error) {
                $log.debug('Get public projects error: ' + error);
            });
        };

        // function _getUsers(idsArray) {
        //     var userList = _.pluck(idsArray, 'creatorId');
        //     userList = _.uniq(userList);
        //     userApi.getUserById(userList).success(function(profiles) {
        //         profiles.forEach(function(profile) {
        //             $scope.users[profile.id] = profile;
        //         });
        //     }).error(function(response) {
        //         $log.debug(response);
        //     });
        // }

        function _getUrlParams() {
            if ($routeParams.board) {
                $scope.boardsFilterOptions.forEach(function(board) {
                    if (board.option === $routeParams.board) {
                        board.value = true;
                        $scope.boardFilter(board.option, true);
                    }
                });
            }
            if ($routeParams.project) {
                $scope.genericFilterOptions.forEach(function(generic) {
                    if (generic.option === $routeParams.project) {
                        generic.value = false;
                        $scope.genericFilter(generic.option, true);
                    }
                });
                $scope.genericFilters = $routeParams.project;
            }
            if ($routeParams.compo) {
                $scope.componentsFilters = decodeURIComponent($routeParams.compo).split('+');
                $scope.componentsFilters.forEach(function(filter) {
                    $scope.componentsFilterOptions.forEach(function(element) {
                        if (filter === element.option) {
                            element.value = true;
                        }
                    });
                });
                $scope.componentFilter();
            }
            if ($routeParams.search) {
                $scope.searchText = decodeURIComponent($routeParams.search);
                $scope.filterParams.search = $scope.searchText;
            }
        }

        function _getStats(id) {
            projectApi.getStats(id).then(function(data) {
                $scope.stats[id] = data;
            });
        }

        function getSortRequest() {
            var queryParams = {};
            switch ($scope.sortSelected) {
                case 'explore-sortby-views':
                    queryParams = {
                        'api:sort': {
                            'timesViewed': 'desc'
                        }
                    };
                    break;
                case 'explore-sortby-downloads':
                    queryParams = {
                        'api:sort': {
                            'timesDownloaded': 'desc'
                        }
                    };
                    break;
                case 'explore-sortby-adds':
                    queryParams = {
                        'api:sort': {
                            'timesAdded': 'desc'
                        }
                    };
                    break;
                default:
                    queryParams = {
                        'api:sort': {
                            '_createdAt': 'desc'
                        }
                    };
            }

            return queryParams;
        }

        function getComponentFilterRequest() {
            var queryParams = {
                'api:query': []
            };

            if ($scope.componentsFilterOptions[0].value) {
                var componentsArray = _.pluck($scope.componentsFilterOptions, 'option');
                componentsArray.splice(0, 1);
                queryParams['api:query'] = [{
                    '$nin': {
                        hardwareTags: componentsArray
                    }
                }];
            } else {
                if ($scope.componentsFilters.length > 0) {
                    queryParams['api:query'] = [{
                        '$all': {
                            hardwareTags: $scope.componentsFilters
                        }
                    }];
                }
            }

            return queryParams;
        }

        function getBoardFilterRequest() {
            var queryParams = {
                'api:query': []
            };

            if ($scope.boardFilters) {
                if ($scope.boardFilters === 'Evolution' || $scope.boardFilters === 'Zowi') {
                    queryParams['api:query'] = [{
                        '$like': {
                            'hardware.robot': $scope.boardFilters.toLowerCase()
                        }
                    }];
                } else {
                    queryParams['api:query'] = [{
                        '$like': {
                            'hardware.board': $scope.boardFilters
                        }
                    }];
                }
            }

            return queryParams;
        }

        function getGenericFilterRequest() {
            var queryParams = {
                'api:query': []
            };

            if ($scope.genericFilterOptions[0].value) {
                if ($scope.genericFilters.indexOf('bq') > -1) {
                    queryParams['api:query'] = [{
                        '$eq': {
                            creatorId: envData.config.bqUserId
                        }
                    }];
                }
            }
            return queryParams;
        }

        function getSearchRequest() {
            var queryParams = {
                'api:query': []
            };
            var queryParams2;

            if ($scope.searchText !== '') {
                queryParams['api:query'] = [{
                    '$like': {
                        name: $scope.searchText
                    }
                }];

                queryParams2 = {
                    'api:query': [{
                        '$like': {
                            creatorUsername: $scope.searchText
                        }
                    }]
                };
            }
            return [queryParams, queryParams2];
        }

        function getRequest() {
            var queryParams = {
                    'api:query': []
                },
                queryParams2 = null,
                sortParams = getSortRequest(),
                componentParams = getComponentFilterRequest(),
                genericFilterParams = getGenericFilterRequest(),
                boardParams = getBoardFilterRequest(),
                searchParamsArray = getSearchRequest();

            $log.debug(sortParams);
            //angular.extend(queryParams, sortParams);
            angular.extend(queryParams, searchParamsArray[0]);
            queryParams['api:query'] = _.union(componentParams['api:query'], genericFilterParams['api:query'], boardParams['api:query'], queryParams['api:query']);
            if (searchParamsArray[1]) {
                queryParams2 = {
                    'api:query': []
                };
                angular.extend(queryParams2, searchParamsArray[1]);
                queryParams2['api:query'] = _.union(componentParams['api:query'], genericFilterParams['api:query'], boardParams['api:query'], queryParams2['api:query']);
            }
            if (_.isEmpty(queryParams['api:query'])) {
                queryParams = null;
            }

            return [queryParams, queryParams2];
        }

        $scope.userApi = userApi;
        $scope.envData = envData;

        $scope.exploraProjects = [];
        $scope.searchText = '';
        $scope.users = [];
        $scope.stats = [];
        $scope.itemsLayout = 'grid';
        $scope.pageProjects = 0;
        $scope.sortSelected = 'explore-sortby-recent';
        $scope.sortOptions = [
            'explore-sortby-recent',
            'explore-sortby-views',
            'explore-sortby-downloads'
        ];
        $scope.genericFilters = [];
        $scope.filterParams = {};
        $scope.genericFilterOptions = [
            //   {
            //     option: 'all',
            //     value: true
            // },
            //  {
            //     option: 'not-compiled',
            //     value: false
            // }, {
            //     option: 'compiled',
            //     value: false
            // },
            {
                option: 'bq',
                value: false
            }
        ];
        $scope.boardFilters = '';
        $scope.boardsFilterOptions = [{
            option: 'bq ZUM',
            value: false
        }, {
            option: 'Freaduino UNO',
            value: false
        }, {
            option: 'Arduino UNO',
            value: false
        }, {
            option: 'Zowi',
            value: false
        }];
        $scope.componentsFilters = [];
        $scope.componentsFilterOptions = [{
            option: 'without-components',
            value: false
        }, {
            option: 'us',
            value: false
        }, {
            option: 'bt',
            value: false
        }, {
            option: 'button',
            value: false
        }, {
            option: 'buttons',
            value: false
        }, {
            option: 'irs',
            value: false
        }, {
            option: 'joystick',
            value: false
        }, {
            option: 'lcd',
            value: false
        }, {
            option: 'led',
            value: false
        }, {
            option: 'ldrs',
            value: false
        }, {
            option: 'pot',
            value: false
        }, {
            option: 'sp',
            value: false
        }, {
            option: 'servo',
            value: false
        }, {
            option: 'servocont',
            value: false
        }, {
            option: 'buzz',
            value: false
        }, {
            option: 'RGBled',
            value: false
        }, {
            option: 'sound',
            value: false
        }, {
            option: 'rtc',
            value: false
        }, {
            option: 'hts221',
            value: false
        }, {
            option: 'encoder',
            value: false
        }, {
            option: 'limitswitch',
            value: false
        }];

        angular.element('.explore-view').bind('scroll', function(evt) {
            if ((evt.currentTarget.scrollTop + evt.currentTarget.clientHeight + 100) >= evt.currentTarget.scrollHeight) {
                $scope.getPublicProjects();
                $scope.$apply();
            }
        });

        $scope.$watch('searchText', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue) {
                    $scope.filterParams.search = newValue;
                } else {
                    delete $scope.filterParams.search;
                }
                $scope.search();
            }
        });

        $scope.common.isLoading = true;

        if ($routeParams) {
            _getUrlParams();
            $scope.search();
        } else {
            $scope.getPublicProjects();
        }
    });