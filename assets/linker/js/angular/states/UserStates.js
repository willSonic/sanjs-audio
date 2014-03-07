myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	$stateProvider.state('user', {
            url: '/user',
            templateUrl: '/templates/user/index.html',
            controller: 'userCtrl'
    });
    $stateProvider.state('user.list', {
            url: '/list',
            templateUrl: '/templates/user/user.list.html',
            controller: 'userListCtrl'
    });
    $stateProvider.state('userPhotos', {
           //http://stackoverflow.com/questions/19141736/how-do-i-access-the-resolve-property-of-a-ui-router-root-state-from-statechan
           //http://embed.plnkr.co/GudLBQP0INk6CVF04gWr/script.js
          // http://phillippuleo.com/articles/angularjs-timing-multiple-resource-resolves-ngroute-and-ui-router
            url: '/user/photos',
            templateUrl: '/templates/user/user.photos.html',
            controller: 'userPhotosCtrl',
            resolve: {
               userFileData:['UserFile', '$rootScope', function(UserFile, $rootScope){

                  var UserFileData = UserFile.index({userId :$rootScope.authStatus.id, fileType: 'image'});

                  return UserFileData.$promise;
               }]
            }
    });

}]);