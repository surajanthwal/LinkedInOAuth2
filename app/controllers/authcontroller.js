var request = require('request');

(function () {
    function getAccessTokenFromLinkedIn(req, res) {
        var authCode = req.body.authCode;
        var postbody = {
            grant_type: 'authorization_code',
            code: authCode,
            redirect_uri: 'http://192.168.1.5:8080/authorizedUser',
            client_id: '81vivt513khf57',
            client_secret: 'u9HsEdZf5fkxw3Jc'
        };

        request.post({
            url: 'https://www.linkedin.com/oauth/v2/accessToken',
            form: postbody
        }, function (err, httpResponse, body) {
            body = JSON.parse(body);
            if (body["access_token"]) {
                var accesstoken = {
                    accessToken: body["access_token"]
                };
                res.json(accesstoken);
            }
        });
    }

    function getUserLinkedInInfo(req, res) {
        var accessToken = req.body.accessToken;
        var options = {
            url: 'https://api.linkedin.com/v1/people/~?format=json',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };
        request(options, function (err, response, body) {
            body = JSON.parse(body);
            console.log(body);
            res.json(body);
        });

    }

    module.exports = {
        getAccessToken: getAccessTokenFromLinkedIn,
        getUserLinkedInInfo:getUserLinkedInInfo
    }

})();
