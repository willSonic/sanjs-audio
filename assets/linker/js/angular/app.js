var myApp = angular.module("myApp", ['ui.router', 'contenteditable', 'ngSails', 'ngAnimate', 'notifications', 'angularFileUpload', 'ngDragDrop', 'ngCookies', 'ui.bootstrap', 'truncate']);
	myApp.run(
      [        '$rootScope', '$state', '$stateParams', '$location', '$http', '$cookies',
      function ($rootScope,   $state,   $stateParams, $location, $http, $cookies) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

      }]);

        //Lets define our routes
        myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$uiViewScrollProvider',
                    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $uiViewScrollProvider) {

                // Necessary to prevent ui-router .0.2.8's new autoscroll
                $uiViewScrollProvider.useAnchorScroll()
                // Let's hookup csrf protection with sails
                // Sails sends us csrftoken with each request, we send back the same token as part of our request header
                $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-Token';

                $urlRouterProvider.otherwise('/');

                $stateProvider.state('home', {
                        url: '/',
                        templateUrl: '/templates/home.html'
                });
        }]);

        