var express = require('express');
var router = express.Router();
var request = require('superagent');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');
var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user,
    message: req.flash('message')[0]
  });
});

router.get('/ping', function(req, res, next) {
  res.send("pong!");
});

router.get('/overview', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('index', {
    user: req.user,
    message: req.flash('message')[0]
  });
});
router.get('/profile', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('events', {
    user: req.user,
    message: req.flash('message')[0]
  });
});
router.get('/save', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('post', {
    user: req.user,
    message: req.flash('message')[0]
  });
});
router.get('/spending', function(req, res, next) {

    //http://api.reimaginebanking.com/accounts/58e91ac4a73e4942cdafd320/purchases?key=7132364e9e0585daf0e649dff3774062
    var path = 'http://api.reimaginebanking.com/accounts/58e91ac4a73e4942cdafd320/purchases?key=7132364e9e0585daf0e649dff3774062';
    request.get('http://api.reimaginebanking.com/accounts/58e91ac4a73e4942cdafd320/purchases?key=7132364e9e0585daf0e649dff3774062').end(function(err, data){
        console.log(err);
        console.log(data.body); //do something
        res.render('profile', {
            user: req.user,
            data: data.body,
            message: req.flash('message')[0]
        });
    });

});



module.exports = router;
