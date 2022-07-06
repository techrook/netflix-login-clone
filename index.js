   const User = { email : "mondayitohowo3@gmail.com",
     password : "emma4life"}

     /*
     im trying to validate a 
     user login with a default login (thats User)
     */ 


const Email = document.getElementById("mail").value;
const Password = document.getElementById("Password").value;

/**
 * so im trying to get the value of email thats what the user typed thats my issue the value is empty 
 */

/**
 * thats the function to validate input 
 */

function validateInputs(){
  if(Email == User.email && Password == User.password ){
    console.log("welcome")
  }else{
    console.log("enter correct email and password")
  }
}