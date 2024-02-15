let username=document.getElementById("username");
let password=document.getElementById("password");
let confirmpassword=document.getElementById("confirm password");

function execute() {
   if(username.value==="jaya") {
    if(password.value==="0905") {
        if(confirmpassword.value===password.value) 
        alert("loggedin successfully");
    }
   }
}