var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user,
    message: req.flash('message')[0]
  });
});

router.get('/ping', function(req, res, next) {
  res.send("pong!");
});

router.get('/overview', function(req, res, next) {
  res.render('index', {
    user: req.user,
    message: req.flash('message')[0]
  });
});
router.get('/profile', function(req, res, next) {
  res.render('events', {
    user: req.user,
    message: req.flash('message')[0]
  });
});
router.get('/save', function(req, res, next) {
  res.render('post', {
    user: req.user,
    message: req.flash('message')[0]
  });
});
router.get('/spending', function(req, res, next) {
  res.render('courses', {
    user: req.user,
    message: req.flash('message')[0]
  });
});



module.exports = router;
