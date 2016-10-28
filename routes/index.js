var express = require('express');
var router = express.Router();
var firebase = require("firebase");

console.log('hello how are you')

//initialize firebase
var config = {
    apiKey: "AIzaSyAB8cwN8C7mN9xvJK4ddUUyOOwfTlx6LtQ",
    authDomain: "inventoryapp-999d9.firebaseapp.com",
    databaseURL: "https://inventoryapp-999d9.firebaseio.com",
    storageBucket: "inventoryapp-999d9.appspot.com",
    messagingSenderId: "227817101973"
  };
firebase.initializeApp(config);
var testfirebase="hello"; //gets the rootpath






var ref2 = firebase.database().ref('users/ufumes/lastname'); //var ref = firebase.database().ref("users/ada");;
ref2.remove();

/* GET home page. */
router.get('/', function(req, res) {
  var ref = firebase.database().ref('users'); //var ref = firebase.database().ref("users/ada");
  ref.once("value")
    .then(function(snapshot) {
      var testfirebase = snapshot.child("ufumes/firstname").val();

      res.render('pages/index');
      //console.log(snapshot.child("ufumes/firstname").val());

    });
});

// index page 
router.get('/member', function(req, res) {
    res.render('pages/member');
});
// index page 
router.get('/member/reportmissing', function(req, res) {
    res.render('pages/member/reportmissing');
});
// index page 
router.get('/member/reportfound', function(req, res) {
    res.render('pages/member/reportfound');
})
// index page 
router.get('/admin/addasset', function(req, res) {
    res.render('pages/admin/addasset');
})
// index page 
router.get('/admin/assignasset', function(req, res) {
    res.render('pages/admin/assignasset');
})
// index page 
router.get('/admin/reclaimasset', function(req, res) {
    res.render('pages/admin/reclaimasset');
})
// index page 
router.get('/admin/viewasset', function(req, res) {
    res.render('pages/admin/viewasset');
})
// index page 
router.get('/admin/viewlost', function(req, res) {
    res.render('pages/admin/viewlost');
})
// index page 
router.get('/admin/resolvelost', function(req, res) {
    res.render('pages/admin/resolvelost');
})




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

console.log('before router')
// login page 
router.post('/login', function(req, res,next) {
    console.log('in post')

      // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var username = req.body.username;
    var userpassword=req.body.password;
    var returnedOutput =""
    console.log(username + ' ' + userpassword)
    var ref = firebase.database().ref('users'); //var ref = firebase.database().ref("users/ada");
    ref.once("value")
      .then(function(snapshot) {
        returnedOutput = snapshot.child(username + '/password').val(); 
          var roles = snapshot.child(username + '/roles').val();
          var firstname=snapshot.child(username + '/firstname').val();

          if (returnedOutput===userpassword){
              if (roles==null){
                res.redirect("/");
              }else if (roles==="admin"){
                res.redirect("/admin");
              }else if (roles==="superadmin"){
                res.redirect("/superadmin");
              }else if (roles==="member"){
              res.redirect("/member");
              }else{
                res.redirect("/login");
              }
          }else{
            res.redirect("/login");
          }

          }).catch(next);
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



//NOTE IN USE
//this function validates that only text is returned.
//only text, no spaces or special character @ .
function validatetextonly(textdata){
 //  var words = textdata.replace(/\t/g, ' '); 
 // if (){
 //   return true
 // }else{
 //   return false
  //}
}


//NOTE IN USE
function checkifusernameexist(username,password){
  console.log('in function');
  var mydatabase=firebase.database().ref('users'); 
  mydatabase.once("value")
    .then(function(snapshot) {
    //var name = snapshot.child("ufumes").val(); // { first: "Ada", last: "Lovelace"} USE toString() to display raw data
    //var suppliedpassword = snapshot.child(username + '/' + password).val(); // "Francis2"
    var suppliedpassword = snapshot.child("ufumes/firstname").val();
    console.log(suppliedpassword );

  });
}
//function