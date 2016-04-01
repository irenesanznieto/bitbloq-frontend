'use strict';

/**
 * @ngdoc service
 * @name bitbloqApp.modals
 * @description
 * # modals
 * Service in the bitbloqApp.
 */
angular.module('bitbloqApp')
    .service('commonModals', function(feedbackApi, alertsService, $rootScope, $translate, userApi, envData, _, ngDialog, $window, common, projectApi, utils, $location, clipboard) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var exports = {};

        exports.contactModal = function() {
            var dialog,
                modalScope = $rootScope.$new(),
                confirmAction = function() {
                    dialog.close();
                    feedbackApi.send(modalScope.comments).success(function() {
                        alertsService.add('modal-comments-done', 'modal-comments', 'ok', 5000);
                    }).error(function() {
                        alertsService.add('modal-comments-error', 'modal-comments', 'warning');
                    });
                };

            _.extend(modalScope, {

                title: 'modal-contact-us-title',
                content: 'modal-contact-us',
                confirmButton: 'send',
                modalButtons: true,
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/send-comments.html',

                condition: function() {
                    return this.comments.name.length > 0 && this.comments.message.length > 0;
                },
                comments: {
                    name: '',
                    message: '',
                    userAgent: $window.navigator.userAgent,
                    userInfo: common.user
                }
            });

            dialog = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--send-comments',
                scope: modalScope,
                showClose: false
            });
            $('textarea.msd-elastic').autogrow({
                onInitialize: true
            });
        };

        exports.sendCommentsModal = function() {
            var dialog,
                modalScope = $rootScope.$new(),
                confirmAction = function() {
                    dialog.close();
                    feedbackApi.send(modalScope.comments).success(function() {
                        alertsService.add('modal-comments-done', 'modal-comments', 'ok', 5000);
                    }).error(function() {
                        alertsService.add('modal-comments-error', 'modal-comments', 'warning');
                    });
                };

            _.extend(modalScope, {

                title: 'modal-send-comments-title',
                content: 'modal-send-comments',
                confirmButton: 'send',
                modalButtons: true,
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/send-comments.html',

                condition: function() {
                    return this.comments.name.length > 0 && this.comments.message.length > 0;
                },
                comments: {
                    name: '',
                    message: '',
                    userAgent: $window.navigator.userAgent,
                    userInfo: common.user
                }
            });

            dialog = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--send-comments',
                scope: modalScope,
                showClose: false
            });
            $('textarea.msd-elastic').autogrow({
                onInitialize: true
            });
        };

        exports.launchChangeLanguageModal = function() {
            var oldLanguage = $translate.use();

            var confirmAction = function() {
                    languageModal.close();
                    // Apply changes
                    if (common.user) {
                        common.user.properties.language = $translate.use();
                        userApi.update(common.user);
                    }
                    $translate.use(modalOptions.lang);
                },
                translateLanguage = function(language) {
                    $translate.use(language);
                },
                rejectAction = function() {
                  if (!common.user) {
                    $translate.use(oldLanguage);
                  } else {
                    $translate.use(common.user.properties.language);
                  }
                },
                languageModal,
                modalOptions = $rootScope.$new();

            _.extend(modalOptions, {
                title: 'header-change-language',
                confirmButton: 'change-language',
                rejectButton: 'modal-button-cancel',
                confirmAction: confirmAction,
                rejectAction: rejectAction,
                contentTemplate: '/views/modals/input.html',
                modalButtons: true,
                modalDropdown: true,
                headingOptions: $translate.use(),
                modaloptions: envData.config.supportedLanguages,
                optionsClick: translateLanguage,
                dropdown: {
                    options: 'languages',
                    dataElement: 'languages-dropdown-button'
                },
                translate: function(language) {
                    modalOptions.lang = language;
                },
                condition: function() {
                    return true;
                }
            });

            languageModal = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--input',
                scope: modalOptions,
                showClose: false
            });
        };

        exports.errorFeedbackModal = function() {
            var dialog,
                modalScope = $rootScope.$new(),
                confirmAction = function() {
                    dialog.close();
                    feedbackApi.send(modalScope.comments).success(function() {
                        alertsService.add('modal-send-error-done', 'modal-send-error', 'ok', 5000);
                    }).error(function() {
                        alertsService.add('modal-send-error-error', 'modal-send-error', 'warning');
                    });
                };

            _.extend(modalScope, {
                title: 'modal-inform-error-title',
                confirmOnly: true,
                confirmButton: 'send',
                modalButtons: true,
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/feedback-error.html',
                comments: {
                    message: '',
                    os: '',
                    browser: '',
                    userAgent: $window.navigator.userAgent,
                    userInfo: common.user
                },
                condition: function() {
                    return this.comments.message.length > 0 && this.comments.os.length > 0 && this.comments.browser.length > 0;
                }
            });

            dialog = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--feedback-error',
                scope: modalScope,
                showClose: false
            });

            $('textarea.msd-elastic').autogrow({
                onInitialize: true
            });
        };

        exports.publishModal = function(project) {
            if (project.imageType === '') {
                $rootScope.$emit('generate:image');
            }
            var confirmAction = function() {
                    publishModal.close();
                    projectApi.publish(project).then(function() {
                        alertsService.add('publish-project-done', 'publishing-project', 'ok', 5000);
                    }, function() {
                        alertsService.add('publish-project-error', 'publishing-project', 'warning');
                    });
                },

                modalScope = $rootScope.$new(),
                publishModal;

            _.extend(modalScope, {
                title: 'modalPublish_title',
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/publish.html',
                publish: true
            });

            publishModal = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--publish',
                scope: modalScope,
                showClose: false
            });
        };

        exports.doPrivateProject = function(project) {
            var confirmAction = function() {
                    privateModal.close();
                    projectApi.private(project).then(function() {
                        alertsService.add('private-project-done', 'publishing-project', 'ok', 5000);
                    }, function() {
                        alertsService.add('private-project-error', 'publishing-project', 'warning');
                    });
                },
                modalScope = $rootScope.$new(),
                privateModal;

            _.extend(modalScope, {
                title: 'modalPublish_title_doPrivate',
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/publish.html',
                publish: false
            });

            privateModal = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--publish',
                scope: modalScope,
                showClose: false
            });

        };

        exports.modalShareWithUsers = function(project) {
            var emailsShared = userApi.getAliasByACL(project._acl);

            var confirmAction = function() {
                    var users = _.pluck(modalScope.shareWithUserModel, 'text');
                    var userIndex = users.indexOf(common.user.email);
                    if (userIndex > -1) {
                        users.splice(userIndex, 1);
                    }
                    projectApi.shareWithUsers(project, users).then(function(response) {
                        if (response.info.noUsers.length > 0) {
                            _shareUserInfoModal(response.info.noUsers, response.info.users.length);
                        } else {
                            alertsService.add('modalShare_alert_shareWithUser', 'private-project', 'ok', 5000, response.info.users.length);
                        }
                    }).catch(function() {
                        alertsService.add('make-share-with-users-error', 'private-project', 'warning');
                    }).finally(function() {
                        dialog.close();
                    });
                },

                modalScope = $rootScope.$new(),
                dialog;

            _.extend(modalScope, {
                title: 'share-with-users',
                modalButtons: true,
                confirmButton: 'modal-button-ok',
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/share-with-users.html',
                shareWithUserModel: emailsShared
            });

            dialog = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--share-with-users',
                scope: modalScope,
                showClose: false
            });
        };

        exports.shareSocialModal = function(project) {

            var parent = $rootScope,
                shareModal,
                modalOptions = parent.$new();
            _.extend(modalOptions, {
                title: 'share-social-networks',
                contentTemplate: '/views/modals/modal-share-social-networks.html',
                stats: {
                    twitterCount: 0,
                    facebookCount: 0,
                    googleCount: 0
                },
                shortUrl: '',
                isOwner: utils.userIsOwner(project, common.user.id),
                addCount: function(e) {
                    var link;
                    switch (e.currentTarget.id) {
                        case 'facebook':
                            projectApi.addProjectStats(project.id, 'facebookCount');
                            modalOptions.stats.facebookCount += 1;
                            link = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($location.protocol() + '://' + $location.host() + '/#/project/' + project.id);
                            break;
                        case 'twitter':
                            projectApi.addProjectStats(project.id, 'twitterCount');
                            modalOptions.stats.twitterCount += 1;
                            link = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent($location.protocol() + '://' + $location.host() + '/#/project/' + project.id);
                            break;
                        case 'googleplus':
                            projectApi.addProjectStats(project.id, 'googleCount');
                            modalOptions.stats.googleCount += 1;
                            link = 'https://plus.google.com/share?url=' + encodeURIComponent($location.protocol() + '://' + $location.host() + '/#/project/' + project.id);
                            break;
                        default:
                            throw 'unknown social network';
                    }
                    if (!project._acl.ALL || project._acl.ALL.permission !== 'READ') {
                        projectApi.publish(project).then(function() {
                            shareModal.close();
                            alertsService.add('publish-project-done', 'publishing-project', 'ok', 7000);
                        }, function() {
                            alertsService.add('publish-project-error', 'publishing-project', 'warning');
                        });
                    } else {
                        shareModal.close();
                    }
                    $window.open(link);
                },
                shareWithBitbloqUsers: function() {
                    shareModal.close();
                    exports.modalShareWithUsers(project);
                },
                simplePublish: function() {
                    if (!project._acl.ALL) {
                        projectApi.publish(project).then(function() {
                            alertsService.add('publish-project-done', 'publishing-project', 'ok', 7000);
                        }, function() {
                            alertsService.add('publish-project-error', 'publishing-project', 'warning');
                        });
                    }
                }
            });

            projectApi.getStats(project.id).then(function(stats) {
                _.extend(modalOptions, {
                    stats: {
                        twitterCount: stats.twitterCount,
                        facebookCount: stats.facebookCount,
                        googleCount: stats.googleCount
                    }
                });
            });

            projectApi.generateShortUrl($location.protocol() + '://' + $location.host() + '/#/project/' + project.id).success(function(response) {
                _.extend(modalOptions, {
                    shortUrl: response.id,
                    copyAction: function (shortLink) {
                        clipboard.copyText(shortLink);
                    }
                });
            }).error(function() {
                _.extend(modalOptions, {
                    shortUrl: $location.protocol() + '://' + $location.host() + '/#/project/' + project.id
                });
            });

            shareModal = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container',
                scope: modalOptions,
                showClose: false
            });
        };

        function _shareUserInfoModal(noUsers, usersLength) {
            var noShareModal, confirmAction = function() {
                    noShareModal.close();
                    alertsService.add('modalShare_alert_shareWithUser', 'private-project', 'ok', 5000, usersLength);
                },
                modalScope = $rootScope.$new();

            _.extend(modalScope, {
                title: 'share-with-users',
                modalButtons: true,
                confirmButton: 'modal__understood-button',
                confirmAction: confirmAction,
                contentTemplate: '/views/modals/noShareInfo.html',
                noUsers: noUsers
            });

            noShareModal = ngDialog.open({
                template: '/views/modals/modal.html',
                className: 'modal--container modal--share-no-users',
                scope: modalScope,
                showClose: false
            });
        }

        return exports;
    });
