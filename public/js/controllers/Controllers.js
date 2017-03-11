// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['ngNotify'])
    .controller('UserController', ['$scope', 'BackendAPI', 'Constants',
        function ($scope, BackendAPI, Constants) {
            var vm = this;
            vm.user = {};

            var url = Constants.baseUrl + "?response_type=" + Constants.response_type + "&client_id=" + Constants.client_id
                + "&redirect_uri=" + Constants.redirect_uri + "&state=" + Constants.state;
            vm.signIn = function () {
                window.location.replace(url);
            };


        }])
    .controller('AuthorizedUserController', ['$scope', '$location', 'BackendAPI', '$state', function ($scope, $location, BackendAPI, $state) {
        var vm = this;
        BackendAPI.getAccessTokenFromBackend($location.search().code).then(function (response) {
            console.log("from server: ");
            console.log(response.data.accessToken);

            var accessToken = response.data.accessToken;
            BackendAPI.getUserInfoFromBackend(accessToken).then(function (response) {
                $state.go('userInfo', {user: response.data});
            });
        });
    }])
    .controller('UserProfileController', ['$scope', '$stateParams', function ($scope, $stateParams) {
        var vm = this;
        vm.user = $stateParams.user;
    }]);