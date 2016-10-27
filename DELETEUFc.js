
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

  });