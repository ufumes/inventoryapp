


function storetoken(token){
	//invoked at the on clicked event of a form, or onload event of a page


	//all protected page will have an onload event that checks if the token exist. 
	//if not, it redirects user back to login page and the task is not processed.
	//(might have issue with processing page for the first time.)

	//if the token is not empty, insert it
	if (token!==""){
		if (typeof(localStorage) !== "undefined") {
  			localStorage['token']=token; //add new entry into cache				  
		}
	}

	//if local storage exist already, retrieve it and send to server 
	if (typeof(localStorage) !== "undefined") {
  		if (localStorage['token']){
			return localStorage['token'];}		  
		}
		
}


function removetoken(){
	//this is called on log out button
	if (typeof(localStorage) !== "undefined") {
  			localStorage.removeItem('udn');			  
		}
}





