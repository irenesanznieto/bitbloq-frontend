'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.projectApi
 * @description
 * # projectApi
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('projectApi', function($http, $log, $window, envData, $q, $rootScope, _, alertsService, imageApi, userApi, common, utils, ngDialog, $translate) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var exports = {};

        exports.get = function(id) {
            return $http.get(envData.config.resourcesEndpoint + 'resource/bitbloq:Angularproject/' + id);
        };

        exports.getMyProjects = function(pageSize, page, queryParams) {

            page = page || 0;
            var myProjectArray = [],
                size = pageSize || 50,
                params = {
                    'api:query': [{
                        '$like': {}
                    }],
                    'api:sort': {
                        '_updatedAt': 'desc'
                    },
                    'api:page': page,
                    'api:pageSize': size
                };
            params['api:query'][0].$like['_acl.user:' + common.user.id + '.permission'] = 'ADMIN';
            queryParams = queryParams || {};
            _.extend(params, queryParams);

            if (pageSize) {
                return getList(params);
            } else {
                return getAll(params, myProjectArray);
            }
        };

        exports.getMySharedProjects = function(queryParams) {
            var myProjectArray = [],
                params = {
                    'api:query': [{
                        '$eq': {}
                    }],
                    'api:sort': {
                        '_updatedAt': 'desc'
                    },
                    'api:page': 0,
                    'api:pageSize': 50
                };
            params['api:query'][0].$eq['_acl.user:' + common.user.id + '.permission'] = 'READ';
            queryParams = queryParams || {};
            _.extend(params, queryParams);

            return getAll(params, myProjectArray);
        };

        exports.getPublic = function(queryParams, queryParams2) {

            var params = {
                'api:query': [{
                    '$eq': {
                        '_acl.ALL.permission': 'READ'
                    }
                }],
                'api:sort': {
                    '_acl.ALL.properties.date': 'desc'
                },
                'api:pageSize': 18
            };
            queryParams = queryParams || {};
            queryParams['api:query'] = _.union(params['api:query'], queryParams['api:query']);
            if (queryParams2) {
                queryParams2['api:query'] = _.union(params['api:query'], queryParams2['api:query']);
            }
            _.extend(params, queryParams);

            return getList(params, queryParams2);
        };

        exports.save = function(dataproject) {
            var defered = $q.defer();

            $http({
                method: 'POST',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:Angularproject',
                data: dataproject
            }).then(function(data) {
                var id = _.last(data.headers().location.split('/'));
                defered.resolve(id);
            }, function(error) {
                defered.reject(error);
            });

            return defered.promise;
        };

        exports.update = function(idProject, dataproject) {
            return $http({
                method: 'PUT',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:Angularproject/' + idProject,
                data: dataproject
            });
        };

        exports.delete = function(project) {
            if (project.imageType) {
                return imageApi.delete(project.id, project.imageType).then(function() {
                    return _deleteProject(project);
                });
            } else {
                return _deleteProject(project);
            }
        };

        exports.clone = function(project, openInTab) {
            var defered = $q.defer(),
                cloneToAvoidReferences = _.cloneDeep(project),
                newProject = {
                    creatorId: common.user.id,
                    creatorUsername: common.user.username,
                    description: cloneToAvoidReferences.description,
                    software: cloneToAvoidReferences.software,
                    hardwareTags: cloneToAvoidReferences.hardwareTags,
                    videoUrl: cloneToAvoidReferences.videoUrl,
                    userTags: cloneToAvoidReferences.userTags,
                    imageType: cloneToAvoidReferences.imageType,
                    hardware: cloneToAvoidReferences.hardware,
                    code: cloneToAvoidReferences.code,
                    codeProject: cloneToAvoidReferences.codeProject,
                    defaultTheme: cloneToAvoidReferences.defaultTheme
                },
                newProjectName = common.translate('modal-clone-project-name') + project.name;

            function confirmAction(newName) {
                alertsService.add('make-cloning-project', 'clone-project', 'ok', 5000);
                newProject.name = newName;
                exports.save(newProject).then(function(newProjectId) {
                    newProject.id = newProjectId;
                    var newDownload = utils.isNewVisit(project, common.user ? common.user.id : undefined);
                    if (newProject.imageType) {
                        imageApi.get(project.id, newProject.imageType).then(function(response) {
                            imageApi.save(newProjectId, response.data).then(function() {
                                alertsService.add('make-cloned-project', 'make-cloned-project', 'ok', 5000);
                                if (newDownload) {
                                    exports.addProjectStats(project.id, 'timesAdded');
                                }
                                defered.resolve(newProjectId);
                            }, function() {
                                defered.reject();
                            });
                        }, function() {
                            defered.reject();
                        });
                    } else {
                        if (newDownload) {
                            exports.addProjectStats(project.id, 'timesAdded');
                        }
                        alertsService.add('make-cloned-project', 'clone-project', 'ok', 5000);
                        defered.resolve(newProjectId);
                    }
                }).finally(function() {
                    if (newProject.id && openInTab) {
                        var newtab = $window.open('', '_blank');
                        newtab.location = '#/bloqsproject/' + newProject.id;
                    }
                });
                return true;
            }

            var modalOptions = $rootScope.$new();

            _.extend(modalOptions, {
                title: 'modal-clone-project-title',
                contentTemplate: 'views/modals/input.html',
                mainText: 'modal-clone-project-intro',
                modalInput: true,
                input: {
                    id: 'projectCloneName',
                    name: 'projectCloneName',
                    placeholder: 'modal-change-project-name-maintext',
                    value: newProjectName
                },
                confirmButton: 'modal-button-ok',
                rejectButton: 'modal-button-cancel',
                confirmAction: confirmAction,
                modalButtons: true,
                condition: function() {
                    /*jshint validthis: true */
                    return !!this.$parent.input.value;
                }
            });

            ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--input',
                scope: modalOptions,
                showClose: false

            });

            return defered.promise;
        };

        exports.getShortURL = function(longUrl) {
            // Request short url
            return $http.post('https://www.googleapis.com/urlshortener/v1/url?key=' + envData.google.apikey, {
                longUrl: longUrl
            }).success(function(response) {
                return response.id;
            }).error(function(error) {
                return error.error.message;
            });
        };

        exports.getCleanProject = function(projectRef) {
            var cleanProject = _.cloneDeep(projectRef);
            delete cleanProject.id;
            delete cleanProject._acl;
            delete cleanProject.creatorId;
            delete cleanProject.creatorUsername;
            delete cleanProject._createdAt;
            delete cleanProject._updatedAt;
            delete cleanProject.links;

            return cleanProject;
        };

        exports.download = function(projectRef) {
            var project = exports.getCleanProject(projectRef);
            var filename = utils.removeDiacritics(projectRef.name, undefined ,$translate.instant('new-project'));

            utils.downloadFile(filename.substring(0, 30) + '.json', JSON.stringify(project), 'application/json');
        };

        exports.downloadIno = function(project, code) {
            code = code || project.code;
            var name = project.name;
            //Remove all diacritics
            name = utils.removeDiacritics(name, undefined ,$translate.instant('new-project'));

            utils.downloadFile(name.substring(0, 30) + '.ino', code, 'text/plain;charset=UTF-8');
        };

        exports.shareWithUsers = function(project, userEmails) {
            var defered = $q.defer();
            //pedir los usuarios, para tener los ids
            userApi.getUsersByEmail(userEmails).then(function(users) {

                var acl = {};
                if (project._acl.ALL) {
                    acl.ALL = project._acl.ALL;
                }
                for (var i = 0; i < users.length; i++) {
                    acl['user:' + users[i].userId] = {
                        permission: 'READ',
                        properties: {
                            email: users[i].email
                        }
                    };
                }

                acl['user:' + common.user.id] = {
                    permission: 'ADMIN'
                };

                _putACL(project.id, acl).then(function(response) {
                    project._acl = acl;
                    var usersArray = _.pluck(users, 'email');
                    response.info = {
                        users: usersArray,
                        noUsers: _.difference(userEmails, usersArray)
                    };
                    defered.resolve(response);
                }, function(response) {
                    defered.reject(response);
                });

            }, function(response) {
                defered.reject(response);
            });

            return defered.promise;
        };

        exports.publish = function(project) {
            var defered = $q.defer();
            if (!project._acl || !project._acl.ALL || (project._acl.ALL && project._acl.ALL.permission !== 'READ')) {
                var acl = _.cloneDeep(project._acl);
                var now = new Date();
                acl.ALL = {
                    permission: 'READ',
                    properties: {
                        date: now
                    }
                };
                _putACL(project.id, acl).then(function(response) {
                    project._acl = acl;
                    defered.resolve(response);
                }, function(response) {
                    defered.reject(response);
                });
            } else {
                defered.resolve();
            }
            return defered.promise;
        };

        exports.private = function(project) {
            var defered = $q.defer();
            if (project._acl && project._acl.ALL && (project._acl['user:' + common.user.id] && project._acl['user:' + common.user.id].permission === 'ADMIN')) {
                var acl = {};
                acl['user:' + common.user.id] = {
                    permission: 'ADMIN'
                };
                _putACL(project.id, acl).then(function(response) {
                    project._acl = acl;
                    defered.resolve(response);
                }, function(response) {
                    defered.reject(response);
                });
            } else {
                defered.reject();
            }
            return defered.promise;
        };

        exports.getStats = function(projectId) {
            var defered = $q.defer();
            $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ProjectStats/' + projectId
            }).success(function(data) {
                defered.resolve(data);
            }).error(function() {
                var stats = {
                    timesViewed: 0,
                    timesDownloaded: 0,
                    timesAdded: 0,
                    twitterCount: 0,
                    facebookCount: 0,
                    googleCount: 0
                };
                defered.resolve(stats);
            });
            return defered.promise;
        };

        exports.addProjectStats = function(projectId, type) {
            var statistics;
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:ProjectStats/' + projectId
            }).success(function(response) {
                statistics = response;
            }).error(function() {
                statistics = {
                    timesViewed: 0,
                    timesDownloaded: 0,
                    timesAdded: 0,
                    twitterCount: 0,
                    facebookCount: 0,
                    googleCount: 0
                };
            }).finally(function() {
                switch (type) {
                    case 'timesViewed':
                        statistics.timesViewed++;
                        break;
                    case 'timesDownloaded':
                        statistics.timesDownloaded++;
                        break;
                    case 'timesAdded':
                        statistics.timesAdded++;
                        break;
                    case 'twitterCount':
                        statistics.twitterCount++;
                        break;
                    case 'facebookCount':
                        statistics.facebookCount++;
                        break;
                    case 'googleCount':
                        statistics.googleCount++;
                        break;
                }
                return $http({
                    method: 'PUT',
                    url: envData.config.resourcesEndpoint + 'resource/bitbloq:ProjectStats/' + projectId,
                    data: statistics
                });
            });
        };

        exports.generateShortUrl = function(longUrl) {
            return $http({
                method: 'POST',
                url: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyA4NIAP4k3TA0kpo6POxWcS_2-Rpj_JaoE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                data: {
                    longUrl: longUrl
                },
                skipAuthorization: true
            });
        };

        exports.rename = function(project) {

            var deferred = $q.defer();

            function confirmAction() {
                project.name = modalOptions.project.name || $translate.instant('new-project');
                if (project.id) {
                    exports.update(project.id, {
                            name: project.name
                        }).success(function() {
                            deferred.resolve();
                        })
                        .catch(function(error) {
                            $log.debug('Error updating project', error);
                            deferred.reject();
                        });
                } else {
                    deferred.reject();
                }

                return true;
            }

            var currentProjectName = project.name,
                modalOptions = $rootScope.$new();

            _.extend(modalOptions, {
                title: 'modal-change-project-name-title',
                modalButtons: true,
                confirmButton: 'save',
                rejectButton: 'cancel',
                changeName: true,
                modalInput: true,
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/input.html',
                mainText: 'modal-change-project-name-maintext',
                project: {
                    name: currentProjectName
                },
                condition: function() {
                    /*jshint validthis: true */
                    return !!this.$parent.project.name;
                }
            });

            ngDialog.openConfirm({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--input',
                scope: modalOptions,
                showClose: false
            });

            return deferred.promise;
        };

        exports.isShared = function(project) {
            var found = false,
                i = 0,
                propertyNames = Object.getOwnPropertyNames(project._acl);
            while (!found && (i < propertyNames.length)) {
                if (propertyNames[i] !== 'ALL' && common.user && propertyNames[i].split('user:')[1] !== common.user.id) {
                    found = true;
                }
                i++;
            }
            return found;
        };

        function getList(queryParams, queryParams2) {

            var params = _.cloneDeep(queryParams);

            if (params['api:query']) {
                params['api:query'] = JSON.stringify(params['api:query']);
                //    params['api:query'] = encodeURIComponent(params['api:query']);
            }
            params = utils.serializeData(params);

            if (queryParams2) {
                params = params + '&' + utils.serializeData(queryParams2);
            }
            return $http({
                method: 'GET',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:Angularproject?' + params
            });
        }

        function getAll(queryParams, resultArray, promise) {
            var defered = promise || $q.defer();

            getList(queryParams).then(function(response) {
                resultArray = resultArray.concat(response.data);
                if (response.data.length === queryParams['api:pageSize']) {
                    queryParams['api:page']++;
                    getAll(queryParams, resultArray, defered);
                } else {
                    defered.resolve(resultArray);
                }
            }, function(error) {
                defered.reject(error.data);
            });

            return defered.promise;
        }

        function _putACL(projectId, acl) {
            return $http({
                method: 'PUT',
                headers: {
                    Accept: 'application/corbel.acl+json'
                },
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:Angularproject/' + projectId,
                data: acl
            });
        }

        function _deleteProject(project) {
            return $http({
                method: 'DELETE',
                url: envData.config.resourcesEndpoint + 'resource/bitbloq:Angularproject/' + project.id
            });
        }

        return exports;
    });
