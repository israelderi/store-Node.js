function signin(){
    window.location.href ="/signin"
}
function signup(){
    window.location.href ="/signup"
}
function submitFromLognUP(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;;
    let password = document.getElementById("passwordd").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (firstName.length >2 && firstName.length <= 20
        && lastName.length >2 && lastName.length <= 20
        && password.length > 2 && password.length <= 10
        && password == confirmPassword
        && email.indexOf('@') > -1 && (email.indexOf('yahoo') > -1 || email.indexOf('gmail') > -1)){
         
            alert("Good")  
            return true
    }
    else {
        alert("One or more of the incorrect values, please try again")
        return false
    }             
}
function submitFromLognIn(){
    let emailLognIn = document.getElementById("emailLognIn").value;
    let paswordLognIn = document.getElementById("paswordLognIn").value;
    if (paswordLognIn.length > 2 && paswordLognIn.length <= 10
        && email.indexOf('@') > -1 && (email.indexOf('yahoo') > -1 || email.indexOf('gmail') > -1)){
            alert("Good") 
            return true
        } 
    else{
        alert("One or more of the incorrect values, please try again") 
        return false
    }
}
