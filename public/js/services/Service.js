// public/js/services/NerdService.js
angular.module('UserService', [])
    .factory('BackendAPI', ['$http', 'Constants', function ($http, Constants) {

        return {
            getAccessTokenFromBackend: function (authCode) {
                return $http.post("/getAccessToken", {authCode: authCode});
            },
            getUserInfoFromBackend: function (token) {
                return $http.post("/getUserLinkedInInfo",{accessToken:token});
                
                
                var header = "Bearer " + token;
                
                return $http.get('https://api.linkedin.com/v1/people/~?format=json',
                    {
                        headers: {
                            'Authorization': header
                        }

                    });
            }
        }
    }])
    .factory('Constants', [function () {
        return {
            baseUrl: "https://www.linkedin.com/oauth/v2/authorization",
            response_type: "code",
            client_id: "81vivt513khf57",
            redirect_uri: "http://192.168.1.5:8080/authorizedUser",
            state: "DCEeFWf45A53sdfKef424"
        }
    }]);
