'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:MakeActionsCtrl
 * @description
 * # MakeActionsCtrl
 * Controller of the bitbloqApp
 */

angular.module('bitbloqApp')
    .controller('MakeActionsCtrl', function($rootScope, $scope, $log, $timeout, $location, $http, $window, $document, alertsService, bloqs, ngDialog, projectApi, imageApi, _, $q, $route, $routeParams, utils, bloqsUtils, feedbackApi, commonModals, clipboard) {

        $scope.uploadProjectSelected = function(fileList) {

            // Only allow uploading one file.
            if (fileList.length > 1) {
                alertsService.add('make-import-project-format-error', 'error-import-project', 'warning');
                return false;
            }
            var file = fileList[0];

            var reader = new FileReader();

            reader.onloadend = function(event) {
                var target = event.target,
                    fileParsed;
                // 2 == FileReader.DONE
                if (target.readyState === 2) {

                    try {
                        fileParsed = JSON.parse(target.result);
                    } catch (e) {
                        alertsService.add('make-import-project-format-error', 'error-import-project', 'warning');
                        return false;
                    }
                    if (!fileParsed.defaultTheme) {
                        fileParsed.defaultTheme = 'infotab_option_grayTheme';
                    }
                    if(fileParsed.id){
                        fileParsed.id = '';
                    }
                    $scope.setProject(fileParsed);
                    $scope.$apply();
                    $scope.setCode($scope.getCode());
                    if(!$scope.common.user) {
                      $scope.common.session.save = true;
                      $scope.common.session.project = fileParsed;
                    }

                } else {
                    return false;
                }

                // Reset value of input after loading because Chrome will not fire
                // a 'change' event if the same file is loaded again.
                angular.element('#uploadProject')[0].value = '';
            };

            reader.readAsText(file);
        };

        $scope.openProject = function() {

            var dialog, modalScope = $rootScope.$new();
            _.extend(modalScope, {
                title: 'explore-open-project',
                contentTemplate: '/views/modals/open-project.html',
                modalButtons: true,
                selectedTab: 0,
                confirmButton: 'explore-open-project',
                rejectButton: 'cancel',
                selectedProject: {},
                confirmAction: function() {
                    dialog.close();
                    if(modalScope.selectedProject.project.codeProject){
                        $window.open('#/codeproject/' + modalScope.selectedProject.project.id);
                    } else {
                        $window.open('#/bloqsproject/' + modalScope.selectedProject.project.id);
                    }
                },
                userProjectsOrderBy: '_updatedAt',
                userProjectsReverseOrder: false,
                orderOptions: ['explore-sortby-recent', 'explore-sortby-old', 'explore-sortby-name-az', 'explore-sortby-name-za'],
                userProjectsFilter: 'all',
                sortProjects: sortProjects(modalScope)

            });

            projectApi.getMyProjects().then(function(projects) {
                modalScope.projects = projects;
            }, function() {
                alertsService.add('make-get-project-error', 'make-get-project-error', 'warning');
            });

            projectApi.getMySharedProjects().then(function(sharedProjects) {
                modalScope.sharedProjects = sharedProjects;
            }, function() {
                alertsService.add('make-get-shared-project-error', 'make-get-shared-project-error', 'warning');
            });

            dialog = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--open-project',
                scope: modalScope,
                showClose: false
            });
        };

        $scope.openFileProject = function() {
            $('#uploadProject').trigger('click');
        };

        $scope.downloadProject = function() {
            var projectRef = $scope.getCurrentProject();
            projectApi.download(projectRef);
        };

        $scope.downloadIno = function() {
            var code = $scope.common.section === 'bloqsproject' ? $scope.getCode() : $scope.project.code;
            projectApi.downloadIno($scope.project, code);
        };

        $scope.removeProject = function(project) {
            if (project.id) {
                $scope.common.removeProjects[project.id] = true;
                $scope.removeAlert[project.id] = alertsService.add('make-deleted-project', 'deleted-project' + project.id, 'warning', 7000, undefined, undefined, undefined, 'undo', _undoRemoveProject, project.id, _deleteProject, {
                    id: project.id,
                    imageType: project.imageType
                });
                $location.path('projects');
            } else {
                alertsService.add('make-delete-project-not-changed', 'deleted-project', 'ok', 5000);
            }
        };

        $scope.copycode = function () {
            alertsService.add('make-code-clipboard', 'code-clipboard', 'info', 3000);
            clipboard.copyText($scope.getCode());
        };

        $scope.clone = function() {
            projectApi.clone($scope.getCurrentProject(), true);
        };

        $scope.newProject = function() {
            window.open('#/bloqsproject/','_blank');
        };

        $scope.zoom = function(value) {
            var max = 2,
                min = 0.7,
                fieldContent = $('.bloq--extension__content'),
                zoom;

            if (value !== 1) {
                zoom = $scope.defaultZoom + value;
            } else {
                zoom = 1;
            }

            if (zoom > max || zoom < min) {
                return false;
            } else {
                fieldContent.css('zoom', zoom);
                $scope.defaultZoom = zoom;
            }
        };

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

        function sortProjects(modalScope) {
            return function(type) {
                $log.debug('sortProject', type);
                switch (type) {
                    case 'explore-sortby-recent':
                        modalScope.userProjectsOrderBy = '_updatedAt';
                        modalScope.userProjectsReverseOrder = false;
                        break;
                    case 'explore-sortby-old':
                        modalScope.userProjectsOrderBy = '_updatedAt';
                        modalScope.userProjectsReverseOrder = true;
                        break;
                    case 'explore-sortby-name-az':
                        modalScope.userProjectsOrderBy = 'name';
                        modalScope.userProjectsReverseOrder = false;
                        break;
                    case 'explore-sortby-name-za':
                        modalScope.userProjectsOrderBy = 'name';
                        modalScope.userProjectsReverseOrder = true;
                        break;
                }
            };
        }

        function _undoRemoveProject(projectId) {
            alertsService.close($scope.removeAlert[projectId]);
            $scope.common.removeProjects[projectId] = false;
        }

        $scope.dropdownHandler = function(menu) {
            if ($scope.dropdown !== menu) {
                $scope.dropdown = menu;
            } else {
                $scope.dropdown = false;
            }
        };

        $document.on('click', clickDocumentHandler);

        $scope.$on('$destroy', function() {
            $document.off('click', clickDocumentHandler);
        });

        function clickDocumentHandler(evt) {
            if (!$(evt.target).hasClass('actions__menu--selected')) {
                $scope.dropdownHandler(false);
                if (!$scope.$$phase) {
                    $scope.$digest();
                }
            }
        }

        $scope.defaultZoom = 1;
        $scope.modal = {
            projectCloneName: ''
        };
        $scope.projectApi = projectApi;
        $scope.commonModals = commonModals;
        $scope.removeAlert = [];

    });
