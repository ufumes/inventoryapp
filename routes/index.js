var express = require('express');
var router = express.Router();
var firebase = require("firebase");



//initialize firebase
var config = {
    apiKey: "AIzaSyAB8cwN8C7mN9xvJK4ddUUyOOwfTlx6LtQ",
    authDomain: "inventoryapp-999d9.firebaseapp.com",
    databaseURL: "https://inventoryapp-999d9.firebaseio.com",
    storageBucket: "inventoryapp-999d9.appspot.com",
    messagingSenderId: "227817101973"
  };
  firebase.initializeApp(config);
var testfirebase=firebase.database().ref(); //gets the rootpath


var ref = firebase.database().ref('users'); //var ref = firebase.database().ref("users/ada");
ref.once("value")
  .then(function(snapshot) {
    var name = snapshot.child("ufumes").val(); // { first: "Ada", last: "Lovelace"} USE toString() to display raw data
    var firstName = snapshot.child("ufumes/firstname").val(); // "Francis2"
    //var lastName = snapshot.child("ufumes").child("lastname").val(); // "Umeoguaju"
    //var age = snapshot.child("age").val(); // null is nothing like that
    //var key = snapshot.key;
    //testfirebase=name.sessionid //good
  });


var ref2 = firebase.database().ref('users/ufumes/lastname'); //var ref = firebase.database().ref("users/ada");;
ref2.remove();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "how are you doing2?" });
});

// index page 
router.get('/welcomesuperadmin', function(req, res) {
    res.render('welcomesuperadmin');
});

//  page 
router.get('/pages', function(req, res) {
    res.render('pages');
});

// admin page 
router.get('/admin', function(req, res) {
	var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 20 }    ];
     var message = 'how are you'
     var datab = [
    { id: 1, name: "bob" },
    { id: 2, name: "john" },
    { id: 3, name: "jake" },];

    res.render('pages/admin/index', { message: message, drinks: drinks, datab: datab });


});

// super admin page 
router.get('/superadmin', function(req, res) {
	var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 20 }    ];
     var message = 'how are you'
     var datab = [
    { id: 1, name: "bob" },
    { id: 2, name: "john" },
    { id: 3, name: "jake" },];

    res.render('pages/superadmin/index', { message: message, drinks: drinks, datab: datab });


});

// login page 
router.get('/login', function(req, res) {
    res.render('pages/login');
});

// login page 
router.post('/login', function(req, res) {
      // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var username = req.body.name;
    var userpassword=req.body.name;
    
    //res.render('pages/login');

    

});



/* GET head page. */
router.get('/head', function(req, res, next) {
  res.render('head', { title: 'Francis' });
});

router.get('/myt', function(req, res, next) {  
  res.render('myt.ejs', { message: 'how are you' });
});

router.get('/signup', function(req, res) {  
  res.render('signup.ejs', { message: req.flash('loginMessage') });
});

module.exports = router;


