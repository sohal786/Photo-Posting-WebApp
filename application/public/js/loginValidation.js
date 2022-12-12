const form = document.getElementById('loginformId');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    
var usernameCheck = false;
var passwordCheck = false;
    
    if (checkInputs()){
    document.getElementById("loginformId").submit();
    }
});



function checkInputs(){
const username = document.getElementById('username');
const password = document.getElementById('password');

    var aplhanum = /^[a-z0-9]+$/i;
const usernameValue = username.value.trim();
const passwordValue = password.value.trim();

if (usernameValue === ''){

    setErrorFor(username, "Username cannot be blank");
    req.flash("error", `Invalid user credentials`);
    
    
    }
     else if (
        ("a" > usernameValue[0] || usernameValue[0] > "z") &&
        ("A" > usernameValue[0] || usernameValue[0] > "Z")
      ) {
         setErrorFor(username,"Make sure to enter the right username");
         req.flash("error", `Invalid user credentials`);
      }
    
     else if (usernameValue.length < 3 ||  !aplhanum.test(usernameValue)){
        setErrorFor(username, "Make sure to enter the right username");
        req.flash("error", `Invalid user credentials`);
    }
    
      
    
    else {
    
        setSuccessFor(username);
        usernameCheck = true;
    }
    
    var check_nums = /[0-9]/;
      var check_uppercase = /[A-Z]/;
      var check_specialchar = /[/*-+!@#$^&*]/;
      // check password length
      if (passwordValue.length < 8) {
        
        setErrorFor(password, "Make sure to enter the right password");
        req.flash("error", `Invalid user credentials`);
      }
      // check at least one number
      else if (!check_nums.test(passwordValue)) {
        
        setErrorFor(password,"Make sure to enter the right password");
        req.flash("error", `Invalid user credentials`);
      }
      // check at least one Uppercase letter
      else if (!check_uppercase.test(passwordValue)) {
        setErrorFor(password,"Make sure to enter the right password");
        req.flash("error", `Invalid user credentials`);
      }
      // check at least one special char
      else if (!check_specialchar.test(passwordValue)) {
    
        setErrorFor(password,"Make sure to enter the right password");
        req.flash("error", `Invalid user credentials`);
      }
      else{
        setSuccessFor(password);
        passwordCheck = true;
      }
      return passwordCheck && usernameCheck;
     
    }
    
    function setErrorFor(input, message){
        const formControl = input.parentElement;
        console.log(formControl);
        const small = formControl.querySelector('small');
        small.innerText = message;
    formControl.className = 'form-control error';
    }
    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }