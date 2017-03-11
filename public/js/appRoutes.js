// public/js/appRoutes.js
angular.module('appRoutes', ['ui.router']).config(['$stateProvider', '$routeProvider',
    '$locationProvider', '$httpProvider', function ($stateProvider, $routeProvider, $locationProvider, $httpProvider) {


        $stateProvider
            .state('user', {
                url: '/',
                controller: 'UserController as vm',
                templateUrl: 'views/button.html'
            })
            .state('authenticated', {
                url: '/authorizedUser',
                controller: "AuthorizedUserController as vm",
                templateUrl: 'views/user.html'
            })
            .state('userInfo', {
                url: '/userInfo',
                params: {user: null},
                controller: "UserProfileController as vm",
                templateUrl: 'views/userProfile.html'
            });
        
        $locationProvider.html5Mode(true);
    }]);


