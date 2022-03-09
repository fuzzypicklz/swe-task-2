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
    await userModel.insertUser({ email: req.body.email, password: req.body.password});

    res.redirect('/')
});

router.post('/insertUsersWithItems', async function(req, res){
    //TODO your code goes here
    await userModel.insertUsersWithItems(req.body);
    res.redirect('/')
});

router.post('/getUserWithItems', async function(req, res){
    //TODO your code goes here
    let items = await userModel.findUsersWithItems(req.body.userID);
    res.json(items);
    
});

// how many mistpyed wodrs are there?

module.exports = router;
