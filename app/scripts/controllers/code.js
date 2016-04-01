'use strict';
/* global js_beautify */

/**
 * @ngdoc function
 * @name bitbloqApp.controller:CodeCtrl
 * @description
 * # CodeCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('CodeCtrl', function($scope, $q, projectApi, imageApi, resource, $routeParams, _, alertsService, envData, $timeout, utils, $location, web2board, $window, $rootScope, commonModals, $route, $localStorage) {

        $window.onbeforeunload = confirmExit;

        $scope.$on('$destroy', function() {
            $window.onbeforeunload = null;
        });

        function confirmExit() {
            var closeMessage;
            if ($scope.saveStatus === 1) {
                closeMessage = $scope.common.translate('leave-without-save');
            }
            return closeMessage;
        }

        $scope.toggleCollapseHeader = function() {
            $scope.collapsedHeader = !$scope.collapsedHeader;
        };

        $scope.startAutosave = function() {
            if ($scope.common.user) {
                $scope.saveStatus = 1;
                if (!autoSaveTimer || (autoSaveTimer.$$state.status !== 0)) {
                    autoSaveTimer = $timeout(_saveProject, envData.config.saveTime || 10000);
                }
            }
        };

        $scope.verify = function() {
            if ($scope.blockingHwActions) {
                return false;
            }
            $scope.blockingHwActions = true;

            compilingAlert = alertsService.add('alert-web2board-compiling', 'compile', 'loading');
            $scope.blockingHwActions = true;

            web2board.verify($scope.project.code);
        };

        $scope.upload = function() {
            $scope.$emit('uploading');
            if ($scope.blockingHwActions) {
                return false;
            }
            if ($scope.project.hardware.board) {
                $scope.blockingHwActions = true;
                var boardMetadata = _.find($scope.boards, function(item) {
                    return item.name === $scope.project.hardware.board;
                });
                settingBoardAlert = alertsService.add('alert-web2board-settingBoard', 'upload', 'loading');
                $scope.blockingHwActions = true;

                web2board.upload(boardMetadata, $scope.project.code);
            } else {
                $scope.currentTab = 'info';
                alertsService.add('alert-web2board-boardNotReady', 'upload', 'warning');
            }
        };

        $scope.getCurrentProject = function() {
            return _.cloneDeep($scope.project);
        };

        $scope.onFieldKeyUp = function(event) {
            if ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.which).toLowerCase() === 's') { //Ctrl + S
                return true;
            }
        };

        $scope.setProject = function(project) {
            $scope.project = project;
            $scope.setBoard($scope.project.board);
            _prettyCode();
        };

        $scope.setBoard = function(boardName) {
            if(!$scope.project.hardwareTags) {
                $scope.project.hardwareTags = [];
            }
            var indexTag = $scope.project.hardwareTags.indexOf($scope.project.hardware.board);
            if(indexTag !== -1) {
                $scope.project.hardwareTags.splice(indexTag, 1);
            }
            $scope.project.hardware.board = boardName || 'bq ZUM'; //Default board is ZUM
            var boardMetadata = _.find($scope.boards, function(board) {
                return board.name === $scope.project.hardware.board;
            });
            $scope.boardImage = boardMetadata && boardMetadata.id;
            $scope.project.hardwareTags.push($scope.project.hardware.board);
        };

        $scope.serialMonitor = function() {
            if ($scope.blockingHwActions) {
                return false;
            }
            if ($scope.project.hardware.board) {
                $scope.blockingHwActions = true;
                serialMonitorAlert = alertsService.add('alert-web2board-openSerialMonitor', 'serialmonitor', 'loading');
                var boardMetadata = _.find($scope.boards, function(item) {
                    return item.name === $scope.project.hardware.board;
                });
                web2board.serialMonitor(boardMetadata);
            } else {
                $scope.currentTab = 'info';
                alertsService.add('alert-web2board-no-board-serial', 'serialmonitor', 'warning');
            }
        };

        function _saveProject() {
            var defered = $q.defer();

            $scope.project.name = $scope.project.name || $scope.common.translate('new-project');

            if ($scope.project.id) {
                if (!$scope.project._acl || ($scope.project._acl['user:' + $scope.common.user.id] && $scope.project._acl['user:' + $scope.common.user.id].permission === 'ADMIN')) {
                    if ($scope.tempImage.blob) {
                        $scope.project.imageType = $scope.tempImage.blob.type;
                    }
                    projectApi.update($scope.project.id, $scope.project).then(function() {

                        $scope.saveStatus = 2;
                        $localStorage.projectsChange = true;

                        if ($scope.tempImage.blob) {
                            imageApi.save($scope.project.id, $scope.tempImage.blob).then(function() {
                                $scope.imageForceReset = !$scope.imageForceReset;
                                $scope.tempImage = {};
                            });
                        }
                        defered.resolve();
                    }, function(error) {
                        if (error.status === 405 || error.status === 401) {
                            alertsService.add('session-expired', 'session', 'warning');
                        }
                        $scope.saveStatus = 3;
                        defered.reject(error);
                    });
                } else {
                    $scope.saveStatus = 4;
                }
            } else {
                if ($scope.common.user) {
                    $scope.project.creatorId = $scope.common.user.id;
                    $scope.project.creatorUsername = $scope.common.user.username;
                    if ($scope.tempImage.blob) {
                        $scope.project.imageType = $scope.tempImage.blob.type;
                    }
                    projectApi.save($scope.project).then(function(idProject) {
                        $scope.project.id = idProject;
                        projectApi.get(idProject).success(function(response) {
                            $scope.project._acl = response._acl;
                        });
                        //to avoid reload
                        $route.current.pathParams.id = idProject;
                        $location.url('/codeproject/' + idProject);
                        $scope.saveStatus = 2;
                        $scope.common.isLoading = false;
                        $localStorage.projectsChange = !$localStorage.projectsChange;
                        if ($scope.tempImage.blob) {
                            imageApi.save(idProject, $scope.tempImage.blob).then(function() {
                                $scope.imageForceReset = !$scope.imageForceReset;
                                $scope.tempImage = {};
                            });
                        }
                        defered.resolve();

                    }, function(error) {
                        if (error.status === 405 || error.status === 401) {
                            alertsService.add('session-expired', 'session', 'warning');
                        }
                        $scope.saveStatus = 3;

                        defered.reject(error);
                    });
                } else {
                    $scope.saveStatus = 0;
                    defered.reject();
                }
            }

            return defered.promise;
        }

        function _addWatchersAndListenerGuest() {
          if(!$scope.common.session.save){

            $scope.$watch('project.code', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.common.session.save=true;
                }
            });

            $scope.$watch('project.hardware.board', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                  $scope.common.session.save=true;
                }
            });
          }
        }

        function _addWatchersAndListener() {

            $scope.$watch('project.name', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.startAutosave();
                }
            });

            $scope.$watch('project.code', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.startAutosave();
                }
            });

            $scope.$watch('project.videoUrl', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.videoId = utils.isYoutubeURL(newVal);
                    if (!$scope.videoId && newVal) {
                        alertsService.add('validate-videourl', 'save-project', 'warning');
                    } else {
                        imageApi.checkVideoID($scope.videoId).then(function(response) {
                            if (response.data.items.length > 0) {
                                $scope.startAutosave();
                            } else {
                                alertsService.add('error-videourl', 'save-project', 'warning');
                            }
                        });
                    }
                }
            });

            $scope.$watch('project.description', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.startAutosave();
                }
            });

            $scope.$watch('project.hardware.board', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.startAutosave();
                }
            });
        }

        function _goToBloqs() {
            alertsService.close(editInfo);
            $location.url('/bloqsproject/' + $scope.project.id);
        }

        function _prettyCode() {
            var defered = $q.defer(),
                tmpCode = '';

            // Options
            editorRef.$blockScrolling = Infinity;
            editorRef.setAutoScrollEditorIntoView(true);

            //Prepare string to js_beautify
            function insertBeautyIgnores(match) {
                return '/* beautify ignore:start */' + match + '/* beautify ignore:end */';
            }

            //Remove beautify ignore & preserve sections
            tmpCode = js_beautify($scope.project.code.replace(/(#include *.*)/gm, insertBeautyIgnores).replace(/(#define *.*)/gm, insertBeautyIgnores)).replace(/(\/\* (beautify)+ .*? \*\/)/gm, ''); // jshint ignore:line

            $timeout(function() {
                $scope.project.code = tmpCode;
                defered.resolve();
            });

            return defered.promise;
        }

        function _loadProject() {
            hwBasicsLoaded.promise.then(function() {
                if ($routeParams.id) {
                    projectApi.get($routeParams.id).then(function(response) {
                        $scope.project = response.data;
                        if ($scope.common.user &&  $scope.project._acl['user:' + $scope.common.user.id] && $scope.project._acl['user:' + $scope.common.user.id].permission === 'READ') {
                            $scope.disablePublish = true;
                        }
                        if (!response.data.codeProject) {
                            editInfo = alertsService.add('code-project_alert_edit-code', 'edit-project', 'warning', 7000, undefined, undefined, undefined, 'undo', _goToBloqs);
                        }
                        $scope.project.codeProject = true;

                        $scope.setBoard($scope.project.hardware.board);

                        _prettyCode().then(function() {
                            $scope.common.itsUserLoaded().then(function() {
                                _addWatchersAndListener();
                                var newView = utils.isNewVisit(response.data, $scope.common.user.id);
                                if (newView) {
                                    projectApi.addProjectStats(response.data.id, 'timesViewed');
                                }
                            }).catch(function() {
                                _addWatchersAndListenerGuest();
                            });
                        });

                    }, function(response) {
                        switch (response.status) {
                            case 404: //not_found
                                alertsService.add('no-project', 'load-project', 'warning');
                                break;
                            case 401: //unauthorized
                                $route.current.pathParams.id = '';
                                $location.url('/codeproject/');
                                alertsService.add('alert_text_errorProjectUnauthorized', 'load-project', 'warning');
                                break;
                            default:
                                alertsService.add('alert_text_errorProjectUndefined', 'load-project', 'warning');
                        }
                    });
                } else {

                    if ($scope.common.session.bloqTab) {
                        editInfo = alertsService.add('code-project_alert_edit-code', 'edit-project', 'warning');
                    }

                    $scope.common.itsUserLoaded().then(function() {
                        if ($scope.common.session.save){
                            $scope.project = $scope.common.session.project;
                            $scope.common.session.save = false;
                            $scope.startAutosave();
                        }
                        $scope.setBoard($scope.project.hardware.board);
                        _prettyCode().then(function() {
                            _addWatchersAndListener();
                        });
                    }).catch(function() {
                        //$scope.setBoard($scope.common.session.project.hardware.board);
                        if($scope.common.session.project.code){
                            $scope.project = $scope.common.session.project;
                            _prettyCode().then(function(){
                              _addWatchersAndListenerGuest();
                            });
                        }
                        if ($scope.common.session.project.hardware.board) {
                            $scope.setBoard($scope.common.session.project.hardware.board);
                            _prettyCode().then(function(){
                              _addWatchersAndListenerGuest();
                            });
                        } else {
                          $scope.setBoard();
                          _addWatchersAndListenerGuest();
                        }
                    });
                }
            });

        }

        var autoSaveTimer = null,
            editInfo, editorRef,
            compilingAlert,
            settingBoardAlert,
            serialMonitorAlert;

        $scope.utils = utils;
        $scope.projectApi = projectApi;
        $scope.tempImage = {};

        // The ui-ace option
        $scope.aceOptions = {
            mode: 'bitbloq',
            useWrapMode: false,
            showGutter: true,
            theme: 'bitbloq',
            advanced: {
                enableSnippets: true,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            },
            rendererOptions: {
                fontSize: 14,
                minLines: 11
            },
            onLoad: function(_editor) {
                editorRef = _editor;
                _loadProject();
                editorRef.on('paste', function(){
                  setTimeout(function () {
                    _prettyCode();
                  }, 10);
                });
            }
        };

        $scope.project = {
            creatorId: '',
            name: $scope.common.translate('new-project'),
            description: '',
            userTags: [],
            hardwareTags: [],
            hardware: {
                board: 'bq ZUM'
            },
            compiled: false,
            imageType: '',
            videoUrl: '',
            code: '/***   Included libraries  ***/\n\n\n/***   Global variables and function definition  ***/\n\n\n/***   Setup  ***/void setup(){}\n\n/***   Loop  ***/void loop(){}',
            codeProject: true
        };

        $scope.boards = [];
        $scope.boardNameList = [];
        $scope.commonModals = commonModals;
        $scope.common.isLoading = true;

        var hwBasicsLoaded = $q.defer();

        resource.get('/static/hardware.json').then(function(resources) {
            $scope.boards = resources.boards;
            $scope.boardNameList = _.pluck($scope.boards, 'name');
            hwBasicsLoaded.resolve();
        });

        $scope.$watch('common.session.save', function(newVal, oldVal) {
            if (newVal && newVal !== oldVal) {
                $scope.common.session.project = $scope.project;
            }
        });

        /*************************************************
         web2board communication
         *************************************************/

        $rootScope.$on('web2board:wrong-version', function() {
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:no-web2board', function() {
            alertsService.close(compilingAlert);
            alertsService.close(settingBoardAlert);
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:compile-error', function(event, error) {
            error = JSON.parse(error);
            alertsService.add('alert-web2board-compile-error', 'compile', 'warning', undefined);
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:compile-verified', function() {
            alertsService.add('alert-web2board-compile-verified', 'compile', 'ok', 5000);
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:boardReady', function(evt, data) {
            data = JSON.parse(data);
            if (data.length > 0) {
                if (!alertsService.isVisible('uid', serialMonitorAlert)) {
                    alertsService.add('alert-web2board-boardReady', 'upload', 'ok', 5000, data[0]);
                }
            } else {
                alertsService.add('alert-web2board-boardNotReady', 'upload', 'warning');
            }
        });

        $rootScope.$on('web2board: boardNotReady', function() {
            alertsService.add('alert-web2board-boardNotReady', 'upload', 'warning');
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:uploading', function(evt, port) {
            alertsService.add('alert-web2board-uploading', 'upload', 'loading', undefined, port);
            $scope.blockingHwActions = true;
        });

        $rootScope.$on('web2board:code-uploaded', function() {
            alertsService.add('alert-web2board-code-uploaded', 'upload', 'ok', 5000);
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:upload-error', function(evt, data) {
            data = JSON.parse(data);
            if (!data.error) {
                alertsService.add('alert-web2board-upload-error', 'upload', 'warning', undefined);
            } else if (data.error === 'no port') {
                alertsService.add('alert-web2board-upload-error', 'upload', 'warning');
            } else {
                alertsService.add('alert-web2board-upload-error', 'upload', 'warning', undefined, data.error);
            }
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:no-port-found', function() {
            $scope.currentTab = 'info';
            $scope.blockingHwActions = false;
            alertsService.close(serialMonitorAlert);
            alertsService.add('alert-web2board-no-port-found', 'upload', 'warning');
        });

        $rootScope.$on('web2board:serial-monitor-opened', function() {
            alertsService.close(serialMonitorAlert);
            $scope.blockingHwActions = false;
        });
    });
