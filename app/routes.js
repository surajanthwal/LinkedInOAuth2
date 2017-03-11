var request = require('request');
var authController = require('./controllers/authcontroller');
module.exports = function (app) {

//requesting access Token from Linkedin when authorization code is supplied
    app.post('/getAccessToken', function (req, res) {
        authController.getAccessToken(req, res);
    });

    //get User info from LinkedIn. Its an Oauth2 request where access token is passed to LinkedIn as part of request header
    app.post("/getUserLinkedInInfo", function (req, res) {
        authController.getUserLinkedInInfo(req, res);
    });

    //serving static file from nodejs. Home page of our application
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
