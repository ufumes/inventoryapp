
 (very importan)
 //for inserting specific records
var ref2 = firebase.database().ref('users/ufumes'); //var ref = firebase.database().ref("users/ada");
ref2.set({"firstname3":"francis5"}); // creates a new record on ufumes. it delete the entire existing record, but u can create multiple records silmutaneously

// creates a new record on ufumes. it delete the entire existing record, 
//but u can create multiple records silmutaneously
.set({"firstname3":"francis5","firstname4":"francis5" }); 


ref2.child('lastname').set('umeh'); // updates an individual entry in the table (very importan)



//removes lastname
var ref2 = firebase.database().ref('users/ufumes/lastname'); //var ref = firebase.database().ref("users/ada");;
ref2.remove();


//retrieve data
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





  

  .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var name1 = req.body.name;
        //call the create function for our database
        mongoose.model('category').create({
            name : name1        }, function (err, category) {
              if (err) {
                  res.send("There was a problem adding the information to the database.");
              } else {
                  //category has been created
                  console.log('POST creating new category: ' + category);
                  res.format({
                      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                    html: function(){
                        // If it worked, set the header so the address bar doesn't still say /addcategory
                        res.location("categories");
                        // And forward to success page
                        res.redirect("/categories");
                    },
                    //JSON response will show the newly created category
                    json: function(){
                        res.json(category);
                    }
                });
              }
        })


.post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var name1 = req.body.name;
                    // If it worked, set the header so the address bar doesn't still say /addcategory
            res.location("categories");
            // And forward to success page
            res.redirect("/categories");

        })



.post('/books', function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var name1 = req.body.name;
        var isbn1 = req.body.isbn;
        var author1 = req.body.author;
        var description1 = req.body.description;        
        var quantity1 = req.body.quantity;
        var surchargeFee1 = req.body.surchargeFee;
        var category1 = req.body.category;