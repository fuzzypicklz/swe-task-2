var express = require('express');
var router = express.Router();
const userModel = require('../models/userModel');
/* GET home page. */
router.get('/', async function(req, res, next) {
  //TODO your code goes here
  res.render('index');
});

router.get('/signup', async function(req, res){
  res.render('signup');
});

router.get('/signupWithItem', async function(req, res){
  res.render('signupWithItem');
});

router.get('/lookupUserItem', async function(req, res){
  res.render('lookUpItemWithUser');
});

router.post('/insertUser', async function(req, res){
  //TODO your code goes here
});

router.post('/insertUsersWithItems', async function(req, res){
  //TODO your code goes here
});

router.post('/getUserWithItems', async function(req, res){
  //TODO your code goes here
});

module.exports = router;
