'use strict';

/**
 * @ngdoc directive
 * @name bitbloqApp.directive:corbelSrc
 * @description
 * # corbelSrc
 */
angular.module('bitbloqApp')
    .directive('corbelSrc', function(imageApi, $log, $window, $q, userApi, _, $timeout, common) {
        return {
            restrict: 'A',
            scope: {
                corbelSrc: '=',
                corbelImageType: '=',
                corbelCollection: '=',
                corbelWatch: '=',
                corbelForceReset: '='
            },

            link: function postLink(scope, element, attrs) {
                attrs.$set('src', 'images/icons/loadr.svg');
                element.addClass('spin');
                var imageElement = element.parent(),
                    timerRequestImage;

                function getWindowDimensions() {
                    return {
                        'h': imageElement.height(),
                        'w': imageElement.width()
                    };
                }

                function startLoadImage() {
                    if (timerRequestImage) {
                        $timeout.cancel(timerRequestImage);
                    }
                    timerRequestImage = $timeout(loadImage, 1000);
                }

                function loadImage() {
                    attrs.$set('src', 'images/icons/loadr.svg');
                    element.addClass('spin');
                    if (scope.corbelImageType) {
                        var height = getWindowDimensions().h;
                        var width = getWindowDimensions().w;
                        if (width && height) {
                            $log.debug('loadImage', scope.corbelSrc);
                            var params = {
                                'image:operations': 'resizeHeight=' + height + '; cropFromCenter=(' + width + ',' + height + ')'
                            };

                            imageApi.get(scope.corbelSrc, scope.corbelImageType, attrs.corbelCollection, params).success(function(response) {
                                var reader = new FileReader();

                                reader.onloadend = function(e) {
                                    element.removeClass('spin');
                                    attrs.$set('src', e.target.result);
                                };

                                reader.readAsDataURL(response);
                            }).error(function() {
                                $log.debug('image not found');
                                element.removeClass('spin');
                                attrs.$set('src', attrs.corbelDefaultImage);
                            });
                        } else {
                            $log.debug('image not width and height');
                            element.removeClass('spin');
                            attrs.$set('src', attrs.corbelDefaultImage);
                        }

                    } else {
                        if (attrs.corbelCollection === 'Avatar' && scope.corbelSrc) {
                            if (common.user && scope.corbelSrc === common.user.id) {
                                userApi.getSocialNetworkData().success(function(providers) {
                                    if (providers.length > 0) {
                                        _loadAvatarSocial(providers[0], attrs.corbelDefaultImage).catch(function() {
                                            _loadAvatarSocial(providers[1], attrs.corbelDefaultImage).catch(function() {
                                                element.removeClass('spin');
                                                attrs.$set('src', attrs.corbelDefaultImage);
                                            });
                                        });
                                    } else {
                                        element.removeClass('spin');
                                        attrs.$set('src', attrs.corbelDefaultImage);
                                    }
                                }).error(function() {
                                    element.removeClass('spin');
                                    attrs.$set('src', attrs.corbelDefaultImage);
                                });
                            } else {
                                //todo if SN -> getIdentity && getSocialNetworkData with diferent user
                                element.removeClass('spin');
                                attrs.$set('src', attrs.corbelDefaultImage);
                            }
                        } else {
                            element.removeClass('spin');
                            attrs.$set('src', attrs.corbelDefaultImage);
                        }
                    }
                }

                function _loadAvatarSocial(provider, corbelDefaultImage) {
                    var def = $q.defer();
                    if (provider) {
                        imageApi.getAvatarSocialNetwork(provider.oauthService, provider.oauthId).then(function(img) {
                            element.removeClass('spin');
                            attrs.$set('src', img.url);
                            if(!img.blob && img.url) {
                                imageApi.getBlobByUrl(img.url).then(function(imgBlob) {
                                    imageApi.save(common.user.id, imgBlob.data, 'Avatar').then(function() {
                                        common.user.properties.imageType = imgBlob.data.type;
                                        userApi.update(common.user).success(function() {
                                            common.setUser(common.user);
                                        }).finally(function() {
                                            def.resolve();
                                        });
                                    }).catch(function() {
                                        def.resolve();
                                    });
                                }).catch(function() {
                                    def.resolve();
                                });
                            } else {
                                imageApi.save(common.user.id, img.blob, 'Avatar').then(function() {
                                    common.user.properties.imageType = img.blob.type;
                                    userApi.update(common.user).success(function() {
                                        common.setUser(common.user);
                                    }).finally(function() {
                                        def.resolve();
                                    });
                                }).catch(function() {
                                    def.resolve();
                                });
                            }
                            def.resolve();
                        }).catch(function() {
                            def.reject();
                        });
                    } else {
                        element.removeClass('spin');
                        attrs.$set('src', corbelDefaultImage);
                        def.resolve();
                    }
                    return def.promise;
                }

                scope.$watch('corbelSrc', function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        startLoadImage();
                    }
                });

                scope.$watch('corbelForceReset', function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        startLoadImage();
                    }
                });

                scope.$watch(getWindowDimensions, function(newValue, oldValue) {
                    if (newValue.h !== 0 && newValue.w !== 0 && (newValue.h !== oldValue.h || newValue.w !== oldValue.w)) {
                        startLoadImage();
                    }
                }, true);

                if (attrs.corbelWatch) {
                    scope.$watch('corbelWatch', function(newValue, oldValue) {
                        if (newValue !== oldValue) {
                            startLoadImage();
                        }
                    });
                }
                if (scope.corbelSrc) {
                    startLoadImage();
                }
            }
        };
    });
