'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('ProjectsCtrl', function($rootScope, $log, $scope, projectApi, $location, alertsService, $localStorage, $window, $timeout, ngDialog, commonModals, utils, _, moment, $q) {

        $scope.sortProjects = function(type) {
            $log.debug('sortProject', type);
            switch (type) {
                case 'explore-sortby-recent':
                    $scope.userProjectsOrderBy = '_updatedAt';
                    $scope.userProjectsReverseOrder = true;
                    break;
                case 'explore-sortby-old':
                    $scope.userProjectsOrderBy = '_updatedAt';
                    $scope.userProjectsReverseOrder = false;
                    break;
                case 'explore-sortby-name-az':
                    $scope.userProjectsOrderBy = 'name';
                    $scope.userProjectsReverseOrder = false;
                    break;
                case 'explore-sortby-name-za':
                    $scope.userProjectsOrderBy = 'name';
                    $scope.userProjectsReverseOrder = true;
                    break;
            }
        };

        /*
         +      o     +              o
         +             o     +       +
         o          +
         o  +           +        +
         +        o     o       +        o
         -_-_-_-_-_-_-_,------,      o
         _-_-_-_-_-_-_-|   /\_/\
         -_-_-_-_-_-_-~|__( ^ .^)  +     +
         _-_-_-_-_-_-_-""  ""
         +      o         o   +       o
         +         +
         o        o         o      o     +
         o           +
         +      +     o        o      +
         */
        $scope.userProjectsFilterFunction = function(filter) {
            return function(item) {
                var result = false;
                switch (filter) {
                    case 'all':
                        result = true;
                        break;
                    case 'my-projects-published':
                        result = item._acl.ALL;
                        break;
                    case 'my-projects-not-published':
                        result = !item._acl.ALL;
                        break;
                    case 'my-projects-shared':
                        for (var acl in item._acl) {
                            if (acl !== 'ALL' && item._acl[acl].permission !== 'ADMIN') {
                                result = true;
                            }
                        }
                        break;
                    case 'my-projects-compiling':
                        result = item.compiled;
                        break;
                    case 'my-projects-not-compiling':
                        result = !item.compiled;
                        break;
                }
                return result;
            };
        };

        $scope.createCopy = function(project) {
            projectApi.clone(project).then(function() {
                refreshProjects();
            });
        };

        $scope.removeProject = function(project) {
            $scope.common.removeProjects[project.id] = true;
            $scope.removeAlert[project.id] = alertsService.add('make-deleted-project', 'deleted-project' + project.id, 'warning', 7000, undefined, undefined, undefined, 'undo', _undoRemoveProject, project.id, _deleteProject, {
                id: project.id,
                imageType: project.imageType
            });
        };

        $scope.filterProjects = function(type) {
            $log.debug('filterProjects', type);
            $scope.userProjectsFilter = type;
        };

        $scope.inRemoveProjects = function(item) {
            return !$scope.common.removeProjects[item.id];
        };

        $scope.downloadAllProjects = function() {
            /*global JSZip:false */
            var zip = new JSZip(),
                currentProject,
                currentProjectName,
                projectsToDownload = [],
                j = 1;
            for (var i = 0; i < $scope.filtered.projects.length; i++) {
                currentProject = projectApi.getCleanProject($scope.filtered.projects[i]);
                currentProjectName = utils.removeDiacritics(currentProject.name).substring(0, 30);
                if (projectsToDownload.indexOf(currentProjectName) > -1) {
                    currentProjectName = currentProjectName + '_' + j;
                }
                projectsToDownload.push(currentProjectName);
                zip.file(currentProjectName + '.json', JSON.stringify(currentProject));
                j++;
            }
            var blob = zip.generate({
                type: 'blob'
            });
            utils.downloadFile('Bitbloq_' + moment().format('YYYY_MM_DD-HH_mm') + '.zip', blob, 'data:application/zip;base64');
        };

        $scope.refreshProjects = refreshProjects;

        function _deleteProject(project) {
            if ($scope.common.removeProjects[project.id]) {
                projectApi.delete(project).then(function() {
                    $log.log('we delete this project');
                }, function(error) {
                    $log.log('Delete error: ', error);
                    alertsService.add('make-delete-project-error', 'deleted-project', 'warning');
                });
            }
        }

        function refreshProjects(refresh) {
            $scope.common.isLoading = refresh;
            $scope.common.itsUserLoaded().then(function() {
                var pageSize = 30,
                    page = 0;
                $scope.tempUserProjects = [];
                var getSharedProjects = projectApi.getMySharedProjects();

                $q.all([_getProjects(pageSize, page), getSharedProjects]).then(function(values) {
                    $scope.sharedProjects = values[1];
                    $scope.common.isLoading = false;

                }).catch(function(){
                    $scope.sharedProjects = [];
                    $scope.common.isLoading = false;
                });

            }, function() {
                $scope.common.isLoading = false;
                $scope.common.setUser();
                alertsService.add('projects-need-tobe-logged', 'projects-need-tobe-logged', 'error');
                $location.path('/login');
            });
        }

        function _getProjects(pageSize, page) {
            return projectApi.getMyProjects(pageSize, page).then(function(response) {
                var projects = _.clone(response.data);
                if (page === 0) {
                    $scope.userProjects = projects;
                } else {
                    $scope.userProjects = $scope.userProjects.concat(projects);
                }
                // $scope.common.isLoading = false;
                if (response.data.length === pageSize) {
                    page++;
                    _getProjects(pageSize, page);
                }
            }, function() {
                $scope.common.setUser();
                alertsService.add('projects-need-tobe-logged', 'projects-need-tobe-logged', 'error');
                $location.path('/login');
            });
        }

        function _undoRemoveProject(projectId) {
            alertsService.close($scope.removeAlert[projectId]);
            $scope.common.removeProjects[projectId] = false;
        }

        $scope.commonModals = commonModals;
        $scope.projectApi = projectApi;
        $scope.selectedTab = 'projects';
        $scope.itemsLayout = 'grid';
        $scope.orderOptions = ['explore-sortby-recent', 'explore-sortby-old', 'explore-sortby-name-az', 'explore-sortby-name-za'];
        $scope.filterOptions = ['filter-by-all', 'filter-by-not-published', 'filter-by-published', 'filter-by-shared', 'filter-by-compile', 'filter-by-not-compile'];

        $scope.userProjectsOrderBy = '_updatedAt';
        $scope.userProjectsReverseOrder = true;

        $scope.userProjectsFilter = 'all';
        $scope.userProjects = [];
        $scope.tempUserProjects = [];
        $scope.sharedProjects = [];
        $scope.removeAlert = [];
        $scope.modal = {
            projectCloneName: ''
        };
        $scope.filtered = {
            projects: []
        };
        $scope.renameProject = function(project) {
            projectApi.rename(project).then(function() {
                refreshProjects();
            });

        };

        // Get projects
        refreshProjects(true);
        $window.onfocus = function() {
            if ($localStorage.projectsChange && $scope.common.itsUserLoaded()) {
                $localStorage.projectsChange = false;
                refreshProjects();
            }
        };

    });
