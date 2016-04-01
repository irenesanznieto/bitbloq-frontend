'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:MakeCtrl
 * @description
 * # MakeCtrl
 * Controller of the bitbloqApp
 */

angular.module('bitbloqApp')
    .controller('MakeCtrl', function($rootScope, $route, $scope, $log, $http, $timeout, $routeParams, $document, $window, $q, $translate, $localStorage, $location, imageApi, web2board, alertsService, ngDialog, _, projectApi, bloqs, bloqsUtils, envData, utils, userApi, commonModals, hw2Bloqs) {

        /*************************************************
         Project save / edit
         *************************************************/

        $scope.startAutosave = function() {
            if ($scope.common.user) {
                $scope.saveStatus = 1;
                $scope.hardware.firstLoad = false;
                if (!autoSaveTimer || (autoSaveTimer.$$state.status !== 0)) {
                    autoSaveTimer = $timeout(saveProject, envData.config.saveTime || 10000);
                }
            } else {
                $scope.common.session.save = true;
                $scope.common.session.project = $scope.getCurrentProject();
            }
        };

        $scope.getHardwareSchema = function() {

            var schema = hw2Bloqs.saveSchema();

            if (schema) { //If project is loaded on protocanvas

                schema.components = schema.components.map(function(elem) {
                    var newElem = _.find($scope.project.hardware.components, {
                        uid: elem.uid
                    });
                    newElem.connected = elem.connected;
                    return newElem;
                });

                schema.board = $scope.project.hardware.board;
                schema.robot = $scope.project.hardware.robot;

                return schema;

            } else { //If project is not loading yet on protocanvas
                return _.cloneDeep($scope.project.hardware);
            }

        };

        $scope.setCode = function(code) {
            $scope.code = code;
        };

        function saveProject() {
            var defered = $q.defer();
            var currentProject = $scope.getCurrentProject();
            if ($scope.projectHasChanged(currentProject, $scope.oldProject)) {

                if ($scope.project.name === '') {
                    $scope.project.name = $scope.common.translate('new-project');
                }

                $log.debug('Auto saving project...');

                if ($scope.project.id) {
                    if (!$scope.project._acl || ($scope.project._acl['user:' + $scope.common.user.id] && $scope.project._acl['user:' + $scope.common.user.id].permission === 'ADMIN')) {
                        if ($scope.tempImage.blob) {
                            if (currentProject.imageType !== $scope.tempImage.blob.type) {
                                imageApi.delete($scope.project.id, currentProject.imageType);
                            }
                            currentProject.imageType = $scope.tempImage.blob.type;
                        }

                        projectApi.update($scope.project.id, currentProject).then(function() {

                            $scope.saveStatus = 2;

                            $scope.saveOldProject();

                            $localStorage.projectsChange = true;

                            if ($scope.tempImage.blob) {
                                imageApi.save($scope.project.id, $scope.tempImage.blob).then(function() {
                                    $log.debug('imageSaveok');
                                    $scope.project.imageType = currentProject.imageType;
                                    $scope.imageForceReset = !$scope.imageForceReset;
                                    $scope.tempImage = {};
                                }, function(error) {
                                    $log.debug('imageSave error', error);
                                });
                            }
                            defered.resolve();
                        }, function(error) {
                            $log.debug('Update error: ', error);
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
                        currentProject.creatorId = $scope.project.creatorId = $scope.common.user.id;
                        currentProject.creatorUsername = $scope.project.creatorUsername = $scope.common.user.username;
                        if ($scope.tempImage.blob) {
                            currentProject.imageType = $scope.tempImage.blob.type;
                        }
                        projectApi.save(currentProject).then(function(idProject) {
                            $scope.project.id = idProject;
                            projectApi.get(idProject).success(function(response) {
                                $scope.project._acl = response._acl;
                            });
                            //to avoid reload
                            $route.current.pathParams.id = idProject;
                            $location.url('/bloqsproject/' + idProject);
                            $scope.saveStatus = 2;
                            $scope.common.isLoading = false;

                            $localStorage.projectsChange = !$localStorage.projectsChange;
                            $scope.saveOldProject();

                            if ($scope.tempImage.blob) {
                                imageApi.save(idProject, $scope.tempImage.blob).then(function() {
                                    $log.debug('imageSaveok');
                                    $scope.project.imageType = currentProject.imageType;
                                    $scope.imageForceReset = !$scope.imageForceReset;
                                    $scope.tempImage = {};
                                }, function(error) {
                                    $log.debug('imageSave error', error);
                                });
                            }
                            defered.resolve();

                        }, function(error) {
                            $log.debug('Save error: ', error);
                            if (error.status === 405 || error.status === 401) {
                                alertsService.add('session-expired', 'session', 'warning');
                            }
                            $scope.saveStatus = 3;

                            defered.reject(error);
                        });
                    } else {
                        $scope.saveStatus = 0;
                        $log.debug('why we start to save if the user its not logged??, check startAutoSave');
                        defered.reject();
                    }
                }
            } else {
                $log.debug('we cant save Project if there is no changes');
                $scope.saveStatus = 0;
                defered.resolve();
            }

            return defered.promise;
        }

        $scope.saveProject = saveProject;

        $scope.setProject = function(project) {
            $scope.hardware.firstLoad = true;
            if ($scope.hardware.cleanSchema) {
                $scope.hardware.cleanSchema();
            }
            $scope.project = project;
            $scope.refreshComponentsArray();
        };

        $scope.refreshComponentsArray = function() {

            var newComponentsArray = bloqsUtils.getEmptyComponentsArray();
            var newHardwareTags = [];
            var readyToSave = false;

            var plainComponentListTemporal = [];
            var plainComponentList = [];

            $scope.project.hardware.components.forEach(function(comp) {
                if (!!comp.connected) {
                    if (comp.oscillator === true || comp.oscillator === 'true') {
                        newComponentsArray.oscillators.push(_.cloneDeep(comp));
                    } else {
                        newComponentsArray[comp.category].push(_.cloneDeep(comp));
                    }
                    plainComponentListTemporal.push({
                        'uid': comp.uid,
                        'name': comp.name
                    });
                    newHardwareTags.push(comp.id);
                }
            });

            $scope.project.hardwareTags = _.uniq(newHardwareTags); //Regenerate hw tags

            if ($scope.project.hardware.robot) {
                newComponentsArray.robot.push($scope.project.hardware.robot);
                $scope.project.hardwareTags.push($scope.project.hardware.robot);
            }

            if ($scope.project.hardware.board) {
                $scope.project.hardwareTags.push($scope.project.hardware.board);
            }

            if ($scope.componentsArray.robot.length > 0) {
                plainComponentList = $scope.componentsArray.robot;
            } else {
                _.forEach($scope.componentsArray, function(n, key) {
                    var compUidList = _.map($scope.componentsArray[key], function(item) {
                        return {
                            'uid': item.uid,
                            'name': item.name
                        };
                    });
                    if (compUidList && compUidList.length > 0) {
                        plainComponentList = plainComponentList.concat(compUidList);
                    }
                });
            }

            //Has changed componentsArray?
            if (plainComponentListTemporal.length > 0 || (plainComponentList.length > 0 && plainComponentList.indexOf('zowi') === -1)) {
                if (!_.isEqual(_.sortBy(plainComponentList, 'name'), _.sortBy(plainComponentListTemporal, 'name')) && (!$scope.hardware.firstLoad || !$scope.common.user)) {
                    $log.debug('componentsArray has changed');
                    readyToSave = true;
                }
            }

            $scope.componentsArray = newComponentsArray;
            $scope.updateBloqs();

            if ((!$scope.hardware.firstLoad || !$scope.common.user) && readyToSave) {
                $scope.startAutosave();
            }

        };

        $scope.anyComponent = function(forceCheck) {
            if ($scope.currentTab === 0 && !forceCheck) { //software Toolbox not visible
                return false;
            }
            if (_.isEqual($scope.componentsArray, bloqsUtils.getEmptyComponentsArray())) {
                return false;
            }
            var compCategories = _.pick($scope.componentsArray, function(item) {
                return item.length > 0;
            });
            var tmpCompCategories = _.cloneDeep(compCategories);
            if (tmpCompCategories.robot) {
                delete tmpCompCategories.robot;
            }

            return (Object.keys(tmpCompCategories).length > 0);
        };
        $scope.anyAdvancedComponent = function() {
            return !_.isEqual($scope.componentsArray, bloqsUtils.getEmptyComponentsArray());
        };
        $scope.anySerialComponent = function() {
            return $scope.componentsArray.serialElements.length > 0;
        };

        $scope.getCurrentProject = function() {
            var project = _.cloneDeep($scope.project);
            if ($scope.bloqs.varsBloq) {
                project.software = {
                    vars: $scope.bloqs.varsBloq.getBloqsStructure(),
                    setup: $scope.bloqs.setupBloq.getBloqsStructure(),
                    loop: $scope.bloqs.loopBloq.getBloqsStructure()
                };
            }

            project.hardware = $scope.getHardwareSchema();
            $scope.project.code = bloqsUtils.getCode($scope.componentsArray, $scope.bloqs);
            project.code = $scope.project.code;

            return project;
        };

        $scope.closeMenu = function() {
            $scope.levelOne = $scope.levelTwo = $scope.submenuVisible = false;
        };

        $scope.subMenuHandler = function(menu, action, level) {
            if (action === 'open') {
                $scope.$emit('menu--open');
                switch (level) {
                    case 1:
                        $scope.levelOne = menu;
                        $scope.levelTwo = false;
                        break;
                    case 2:

                        $scope.levelTwo = menu;
                        break;
                    default:
                        throw 'Error opening sidebar menu';
                }
            } else {
                switch (level) {
                    case 1:
                        $scope.levelOne = false;
                        $scope.levelTwo = false;
                        break;
                    case 2:
                        $scope.levelTwo = false;
                        break;
                    default:
                        throw 'Error closing sidebar menu';
                }
            }
        };

        $scope.setLevelTwo = function() {
            $scope.levelTwo = !$scope.levelTwo;
            $scope.submenuSecondVisible = !$scope.submenuSecondVisible;
            $scope.$apply();
        };

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
            alertsService.add('alert-web2board-compile-error', 'compile', 'warning', undefined, error.stdErr);
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
                alertsService.add('alert-web2board-upload-error', 'upload', 'warning', undefined, data.stdErr);
            } else if (data.error === 'no port') {
                alertsService.add('alert-web2board-upload-error', 'upload', 'warning');
            } else {
                alertsService.add('alert-web2board-upload-error', 'upload', 'warning', undefined, data.error);
            }
            $scope.blockingHwActions = false;
        });

        $rootScope.$on('web2board:no-port-found', function() {
            $scope.currentTab = 0;
            $scope.levelOne = 'boards';
            $scope.blockingHwActions = false;
            alertsService.close(serialMonitorAlert);
            alertsService.add('alert-web2board-no-port-found', 'upload', 'warning');
        });

        $rootScope.$on('web2board:serial-monitor-opened', function() {
            alertsService.close(serialMonitorAlert);
            $scope.blockingHwActions = false;
        });

        $scope.blockingHwActions = false;

        $scope.verify = function() {
            if ($scope.blockingHwActions) {
                return false;
            }
            $scope.blockingHwActions = true;

            compilingAlert = alertsService.add('alert-web2board-compiling', 'compile', 'loading');

            web2board.verify($scope.getCode());
        };

        $scope.upload = function() {
            $scope.$emit('uploading');
            if ($scope.blockingHwActions) {
                return false;
            }
            if ($scope.project.hardware.board) {
                $scope.blockingHwActions = true;
                var boardReference = _.find($scope.hardware.boardList, function(b) {
                    return b.name === $scope.project.hardware.board;
                });
                settingBoardAlert = alertsService.add('alert-web2board-settingBoard', 'upload', 'loading');

                web2board.upload(boardReference, bloqsUtils.getCode($scope.componentsArray, $scope.bloqs));
            } else {
                $scope.currentTab = 0;
                $scope.levelOne = 'boards';
                alertsService.add('alert-web2board-boardNotReady', 'upload', 'warning');
            }
        };

        $scope.serialMonitor = function() {
            if ($scope.blockingHwActions) {
                return false;
            }
            if ($scope.project.hardware.board) {
                $scope.blockingHwActions = true;
                serialMonitorAlert = alertsService.add('alert-web2board-openSerialMonitor', 'serialmonitor', 'loading');
                var boardReference = _.find($scope.hardware.boardList, function(b) {
                    return b.name === $scope.project.hardware.board;
                });
                web2board.serialMonitor(boardReference);
            } else {
                $scope.currentTab = 0;
                $scope.levelOne = 'boards';
                alertsService.add('alert-web2board-no-board-serial', 'serialmonitor', 'warning');

            }
        };

        $scope.getCode = function() {
            $scope.updateBloqs();
            return bloqsUtils.getCode($scope.componentsArray, $scope.bloqs);
        };

        /* ****** */

        $scope.informErrorAction = function() {

            var confirmAction = function() {
                    ngDialog.close('ngdialog1');
                },
                parent = $rootScope,
                modalOptions = parent.$new();

            _.extend(modalOptions, {
                title: 'make-actions-share-with-users',
                confirmOnly: true,
                buttonConfirm: 'make-actions-share-with-users-confirm',
                contentTemplate: '/views/modals/share-with-users.html',
                confirmAction: confirmAction
            });

            ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--share-with-users',
                scope: modalOptions,
                showClose: false
            });
        };

        $scope.projectHasChanged = function(currentProject, oldProject) {
            var identicalProjectObject = _.isEqual(currentProject, oldProject);
            return !identicalProjectObject || $scope.tempImage.blob;
        };

        $scope.updateBloqs = function() {

            if ($scope.bloqs.varsBloq) {

                var allBloqs = bloqs.bloqs;
                var allComponents = [];

                //Why?
                for (var bloq in allBloqs) {
                    allBloqs[bloq].componentsArray = $scope.componentsArray;
                }

                var updateBloq = function(element, list) {

                    var tempValue,
                        tempRef;

                    tempRef = element.dataset.reference;
                    tempValue = element.dataset.value;

                    bloqsUtils.drawDropdownOptions($(element), list);

                    if (tempRef && tempValue) {

                        var componentRef = list.find(function(comp) {
                            return comp.uid === tempRef;
                        });

                        if (componentRef) {
                            element.value = componentRef.name;
                            element.dataset.reference = componentRef.uid;
                            element.dataset.value = componentRef.name;
                        }

                    } else {
                        $log.debug('dropdown not selected');
                        element.selectedIndex = 0;
                    }

                };
                var bloqCanvasEl = null;
                //Update dropdowns values from bloqs canvas
                for (var type in $scope.componentsArray) {
                    if ($scope.componentsArray[type].length) {
                        bloqCanvasEl = document.getElementsByClassName('bloqs-tab')[0];
                        var nodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="' + type + '"]');
                        for (var i = 0, len = nodeList.length; i < len; i++) {
                            updateBloq(nodeList[i], $scope.componentsArray[type]);
                        }
                        allComponents = allComponents.concat($scope.componentsArray[type]);
                    }
                }
                //Update dropdowns from bloqs of toolbox
                if (bloqCanvasEl) {
                    var toolboxNodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="varComponents"]');
                    for (var j = 0, len2 = toolboxNodeList.length; j < len2; j++) {
                        updateBloq(toolboxNodeList[j], allComponents);
                    }

                    var varServos = [];
                    varServos = varServos.concat($scope.componentsArray.servos, $scope.componentsArray.oscillators, $scope.componentsArray.continuousServos);
                    var servosNodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="allServos"]');
                    for (var y = 0, lenServo = servosNodeList.length; y < lenServo; y++) {
                        updateBloq(servosNodeList[y], varServos);
                    }
                }

            }
        };

        $scope.saveOldProject = function() {
            $scope.oldProject = _.cloneDeep($scope.project);
        };

        $scope.saveOldTempImage = function() {
            $scope.oldTempImage = $scope.tempImage;
        };

        /*************************************************
         Tab settings
         *************************************************/
        $scope.currentTab = 0;

        $scope.setTab = function(index) {
            if (index === 0) {
                hw2Bloqs.repaint();
            } else if (index === 1) {
                if ($scope.toolbox.level !== 1) {
                    $scope.toolbox.level = 1;
                }
                $scope.refreshComponentsArray();
                $scope.setCode($scope.getCode());
                $rootScope.$emit('currenttab:bloqstab');
            }

            $scope.currentTab = index;
        };

        /*************************************************
         UNDO / REDO
         *************************************************/

        //Stores one step in the history
        function saveStep(step, options) {
            options.history = _.take(options.history, options.pointer);
            options.history.push(_.cloneDeep(step));
            options.pointer++;
        }

        function undo(options, callback) {
            if (options.pointer > 1) {
                options.pointer--;
                callback(options.history[options.pointer - 1]);
                $log.debug('actual position', options.pointer);
                $scope.startAutosave();
            }
        }

        function redo(options, callback) {
            if (options.pointer < options.history.length) {
                callback(options.history[options.pointer]);
                options.pointer++;
                $log.debug('actual position', options.pointer);
                $scope.startAutosave();
            }
        }

        $scope.saveBloqStep = function(step) {
            //$log.debug('Guardamos Estado de Bloqs');
            var freeBloqs = bloqs.getFreeBloqs();
            //$log.debug(freeBloqs);
            step = step || {
                vars: $scope.bloqs.varsBloq.getBloqsStructure(),
                setup: $scope.bloqs.setupBloq.getBloqsStructure(),
                loop: $scope.bloqs.loopBloq.getBloqsStructure(),
                freeBloqs: freeBloqs
            };
            saveStep(step, $scope.bloqsHistory);
        };

        $scope.undoBloqStep = function() {
            undo($scope.bloqsHistory, function(step) {
                $scope.project.software = step;
            });
        };

        $scope.redoBloqStep = function() {
            redo($scope.bloqsHistory, function(step) {
                $scope.project.software = step;
            });
        };

        $scope.disableUndo = function() {
            var condition = false;
            switch ($scope.currentTab) {
                case 0:
                    condition = $scope.hardwareHistory.pointer <= 1;
                    break;
                case 1:
                    // condition = true;
                    break;
            }
            return condition;
        };
        $scope.disableRedo = function() {
            var condition = false;
            switch ($scope.currentTab) {
                case 0:
                    condition = !(($scope.hardwareHistory.pointer < ($scope.hardwareHistory.history.length)) && $scope.hardwareHistory.pointer >= 1);
                    break;
                case 1:
                    // condition = true;
                    break;
            }
            return condition;
        };

        $scope.undo = function() {
            switch ($scope.currentTab) {
                case 0:
                    $scope.undoHardwareStep();
                    break;
                case 1:
                    $scope.undoBloqStep();
                    break;
            }
        };

        $scope.redo = function() {
            switch ($scope.currentTab) {
                case 0:
                    $scope.redoHardwareStep();
                    break;
                case 1:
                    $scope.redoBloqStep();
                    break;
            }
        };

        $scope.toggleCollapseHeader = function() {
            $scope.collapsedHeader = !$scope.collapsedHeader;
            hw2Bloqs.repaint();
        };

        function addProjectWatchersAndListener() {
            $scope.$watch('code', function(newVal, oldVal) {
                if (newVal !== oldVal && oldVal !== '') {
                    $scope.startAutosave();
                }
            });

            $scope.$watch('project.hardware.board', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.startAutosave();
                }
            });

            $scope.$watch('project.name', function(newVal, oldVal) {
                if (newVal && newVal !== oldVal) {
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

            $window.addEventListener('bloqs:dragend', function() {
                $scope.saveBloqStep();
                $scope.startAutosave();
                $scope.$apply();
            });

            $window.addEventListener('bloqs:change', function() {
                if ($scope.bloqs.loopBloq) {
                    $scope.saveBloqStep();
                    $scope.startAutosave();
                    $scope.$apply();
                }

            });
        }

        function launchModalTour() {
            ngDialog.closeAll();
            var modalTour = $rootScope.$new(),
                modalTourInit;
            _.extend(modalTour, {
                contentTemplate: '/views/modals/modal-tour.html',
                confirmAction: launchTour,
                rejectAction: $scope.tourDone
            });
            modalTourInit = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--alert',
                scope: modalTour,
                showClose: false,
                closeByDocument: false
            });
        }

        function launchTour() {
            $scope.handleTour(1);
        }

        function launchModalAlert() {
            var modalTourStep = $rootScope.$new();
            _.extend(modalTourStep, {
                contentTemplate: '/views/modals/alert.html',
                text: 'modal-tour-step',
                confirmText: 'modal__understood-button',
                confirmAction: showStepFive
            });
            ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--alert',
                scope: modalTourStep,
                showClose: false
            });

        }

        function showStepFive() {
            ngDialog.closeAll();
            $scope.tourCurrentStep = 5;
        }

        function confirmExit() {
            var closeMessage;
            if ($scope.saveStatus === 1 && !$scope.common.connectedWeb2Board) {
                closeMessage = $scope.common.translate('leave-without-save');
            }
            return closeMessage;
        }

        function launchModalGuest() {
            var modalGuest = $rootScope.$new(),
                modalGuestInit;
            _.extend(modalGuest, {
                contentTemplate: '/views/modals/alert.html',
                confirmAction: function() {
                    ngDialog.closeAll();
                    $scope.common.goToLogin();
                },
                cancelButton: true,
                text: 'modal-not-registered-text',
                cancelText: 'continue-as-guest',
                confirmText: 'enter-or-register',
                rejectAction: launchModalTour
            });

            modalGuestInit = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--alert',
                scope: modalGuest,
                showClose: false,
                closeByDocument: false
            });
        }

        function checkBackspaceKey(event) {
            if (event.which === 8 &&
                event.target.nodeName !== 'INPUT' &&
                event.target.nodeName !== 'SELECT' &&
                event.target.nodeName !== 'TEXTAREA' && !$document[0].activeElement.attributes['data-bloq-id']) {

                event.preventDefault();
            }
        }

        $scope.handleTour = function(step) {

            switch (step) {
                case 1:
                    if (!$scope.tourCurrentStep) {
                        $scope.tourCurrentStep = 1;
                    }
                    break;
                case 2:
                    if ($scope.tourCurrentStep === 1) {

                        $scope.tourCurrentStep = 2;
                        var runStepThree = $scope.$on('menu--open', function() {
                            $timeout(function() {
                                $('.submenu-level').animate({
                                    scrollTop: $('[dragid="led"]').offset().top - 150
                                }, 'slow');
                                $scope.handleTour(3);
                                runStepThree();
                            }, 0);
                        });
                    }
                    break;
                case 3:
                    if ($scope.tourCurrentStep === 2) {
                        $scope.tourCurrentStep = 3;
                        var runStepFour = $rootScope.$on('component-connected', function() {
                            $scope.handleTour(4);
                            runStepFour();
                        });
                    }
                    break;
                case 4:
                    if ($scope.tourCurrentStep === 3) {
                        $scope.tourCurrentStep = 4;
                    }
                    break;
                case 5:
                    if ($scope.tourCurrentStep === 4) {
                        launchModalAlert();
                    }
                    break;
                case 6:
                    if ($scope.tourCurrentStep === 5) {
                        $scope.tourCurrentStep = 6;
                        var runStepSeven = $window.addEventListener('bloqs:connect', function() {
                            $scope.handleTour(7);
                            runStepSeven();
                        });
                    }
                    break;
                case 7:
                    if ($scope.tourCurrentStep === 6) {
                        $scope.$apply(function() {
                            $scope.tourCurrentStep = 7;
                        });
                        var endTour = $scope.$on('uploading', function() {
                            $scope.tourDone();
                            endTour();
                        });
                    }
                    break;
                default:
                    throw 'not a tour step';
            }
            if (!$scope.$$phase) {
                $scope.$digest();
            }
        };

        $scope.tourDone = function() {
            ngDialog.closeAll();
            $scope.tourCurrentStep = null;
            if ($scope.common.user) {
                userApi.update({
                    properties: {
                        tour: true
                    }
                });
            }
        };
        $scope.toolbox = {};
        $scope.toolbox.level = 1;

        //'Mad science', objects mantain reference, primitive values can't be passed for generic functions
        $scope.bloqsHistory = {
            pointer: 0,
            history: []
        };
        $scope.hardwareHistory = {
            pointer: 0,
            history: []
        };

        $scope.commonModals = commonModals;
        $scope.utils = utils;

        /*************************************************
         Project settings
         *************************************************/

        var autoSaveTimer = null,
            compilingAlert,
            settingBoardAlert,
            serialMonitorAlert;

        $scope.shareWithUserTags = [];

        /**
         * Status of save project
         * 0 = Nothing
         * 1 = AutoSaving in progress
         * 2 = Save correct
         * 3 = Saved Error
         * 4 = Dont Allowed to do Save
         * @type {Number}
         */
        $scope.saveStatus = 0;

        $scope.code = '';

        $scope.tempImage = {};
        $scope.oldProject = {};
        $scope.oldTempImage = {};
        $scope.project = {
            creatorId: '',
            name: '',
            description: '',
            userTags: [],
            hardwareTags: [],
            compiled: false,
            imageType: '',
            videoUrl: '',
            defaultTheme: 'infotab_option_colorTheme',
            software: {
                vars: {
                    enable: true,
                    name: 'varsBloq',
                    childs: [],
                    content: [
                        []
                    ]
                },
                setup: {
                    enable: true,
                    name: 'setupBloq',
                    childs: [],
                    content: [
                        []
                    ]
                },
                loop: {
                    enable: true,
                    name: 'loopBloq',
                    childs: [],
                    content: [
                        []
                    ]
                },
                freeBloqs: []
            },

            hardware: {
                board: null,
                robot: null,
                components: [],
                connections: []
            }
        };

        $scope.hardware = {
            boardList: null,
            componentList: null,
            robotList: null,
            cleanSchema: null,
            sortToolbox: null,
            firstLoad: true
        };

        $scope.bloqs = {
            varsBloq: null,
            setupBloq: null,
            loopBloq: null
        };

        $scope.componentsArray = bloqsUtils.getEmptyComponentsArray();

        $scope.projectApi = projectApi;

        $scope.imageForceReset = true;

        if (!$scope.common.user) {
            $scope.common.session.save = false;
        }

        /*************************************************
         Load project
         *************************************************/
        $scope.common.isLoading = true;

        $scope.common.itsUserLoaded().then(function() {
            $log.debug('Hay un usuario logeado');
            if ($routeParams.id) {
                loadProject($routeParams.id).then(function() {
                    addProjectWatchersAndListener();
                    if (utils.isNewVisit($scope.project, $scope.common.user.id)) {
                        projectApi.addProjectStats($scope.project.id, 'timesViewed');
                    }
                }, function() {
                    addProjectWatchersAndListener();
                });
            } else {
                addProjectWatchersAndListener();
                if ($scope.common.session.save) {
                    $scope.common.session.save = false;
                    $scope.setProject($scope.common.session.project);
                    $scope.startAutosave();
                }
                if (!$scope.common.user.properties.tour) {
                    launchModalTour();
                }
            }
        }, function() {
            $log.debug('No hay usuario logeado');
            if ($routeParams.id) {
                loadProject($routeParams.id).then(function() {
                    addProjectWatchersAndListener();
                    if (utils.isNewVisit($scope.project)) {
                        projectApi.addProjectStats($scope.project.id, 'timesViewed');
                    }
                }, function() {
                    addProjectWatchersAndListener();
                });
            } else {
                addProjectWatchersAndListener();
                launchModalGuest();
            }

        });

        var loadProject = function(id) {
            $log.debug('cargando projecto');
            return projectApi.get(id).then(function(response) {
                if (response.data.codeProject) {
                    $location.path('/codeproject/' + response.data.id);
                } else {
                    //set freebloqs object
                    response.data.software.freeBloqs = response.data.software.freeBloqs || [];

                    $scope.project = response.data;
                    $scope.saveBloqStep(_.clone(response.data.software));
                    $scope.saveOldProject();
                }
            }, function(error) {
                switch (error.status) {
                    case 404: //not_found
                        alertsService.add('no-project', 'load-project', 'warning');
                        break;
                    case 401: //unauthorized
                        $location.path('/bloqsproject/');
                        alertsService.add('alert_text_errorProjectUnauthorized', 'load-project', 'warning');
                        break;
                    default:
                        alertsService.add('alert_text_errorProjectUndefined', 'load-project', 'warning');
                }
            });
        };

        $document.on('keydown', checkBackspaceKey);
        $window.onbeforeunload = confirmExit;

        $scope.$on('$locationChangeStart', function(event) {
            if ($scope.saveStatus === 1) {
                var answer = $window.confirm($scope.common.translate('leave-without-save') + '\n\n' + $scope.common.translate('leave-page-question'));
                if (!answer) {
                    event.preventDefault();
                }
            }
        });

        $scope.$on('$destroy', function() {
            $document.off('keydown', checkBackspaceKey);
            $window.onbeforeunload = null;
        });

    });