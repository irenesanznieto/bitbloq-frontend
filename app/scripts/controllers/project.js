'use strict';

/**
 * @ngdoc function
 * @name bitbloqApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the bitbloqApp
 */
angular.module('bitbloqApp')
    .controller('ProjectCtrl', function($routeParams, $scope, $location, projectApi, alertsService, utils, _, $window) {

        $scope.countDownload = function(project) {
            var newDownload = utils.isNewVisit(project, $scope.common.user ? $scope.common.user.id : undefined);
            if (newDownload) {
                projectApi.addProjectStats(project.id, 'timesDownloaded');
                $scope.projectStats.timesDownloaded = $scope.projectStats.timesDownloaded + 1;
            }
        };

        $scope.countAdded = function() {
            //model updated in projectApi
            $scope.projectStats.timesAdded = $scope.projectStats.timesAdded + 1;
        };

        $scope.countViewer = function(project) {
            var newVisit = utils.isNewVisit(project, $scope.common.user ? $scope.common.user.id : undefined);
            if (newVisit) {
                $scope.projectStats.timesViewed = $scope.projectStats.timesViewed + 1;
            }
            if (project.codeProject) {
                $window.open('#/codeproject/' + project.id);
            } else {
                $window.open('#/bloqsproject/' + project.id);
            }
        };

        if ($routeParams.id) {
            projectApi.get($routeParams.id).then(function(response) {
                projectApi.getStats(response.data.id).then(function(data) {
                    $scope.projectStats = data;
                });
                $scope.project = response.data;
                if (response.data.videoUrl) {
                    $scope.videoID = utils.isYoutubeURL(response.data.videoUrl);
                    $scope.imageShown = $scope.videoID;
                } else {
                    $scope.imageShown = '';
                }
                projectApi.getShortURL($location.$$absUrl).then(function(data) {
                    $scope.project.shortUrl = data.data.id;
                });
            }, function(response) {
                switch (response.status) {
                    case 404:
                        alertsService.add('no-project', 'error-project', 'warning');
                        break;
                    case 401: //unauthorized
                        alertsService.add('alert_text_errorProjectUnauthorized', 'load-project', 'warning');
                        break;
                    default:
                        alertsService.add('alert_text_errorProjectUndefined', 'error-project', 'warning');
                }
            });
        }

        $scope.projectApi = projectApi;
        $scope.utils = utils;
        // $scope.project.shortUrl = requestShortUrl($location.path());
    });
