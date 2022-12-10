const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    var usernameCheck = false;
var passwordCheck = false;
    checkInputs();
    if (usernameCheck && passwordCheck){
    document.getElementById("loginformId").submit();
    }
});



function checkInputs(){
    var aplhanum = /^[a-z0-9]+$/i;
const usernameValue = username.value.trim();
const passwordValue = password.value.trim();

if (usernameValue === ''){

    setErrorFor(username, "Make sure to enter the right username");
    
    
    }
     else if (
        ("a" > usernameValue[0] || usernameValue[0] > "z") &&
        ("A" > usernameValue[0] || usernameValue[0] > "Z")
      ) {
         setErrorFor(username,"Make sure to enter the right username");
      }
    
     else if (usernameValue.length < 3 ||  !aplhanum.test(usernameValue)){
        setErrorFor(username, "Make sure to enter the right username");
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
      }
      // check at least one number
      else if (!check_nums.test(passwordValue)) {
        
        setErrorFor(password,"Make sure to enter the right password");
      }
      // check at least one Uppercase letter
      else if (!check_uppercase.test(passwordValue)) {
        setErrorFor(password,"Make sure to enter the right password");
      }
      // check at least one special char
      else if (!check_specialchar.test(passwordValue)) {
    
        setErrorFor(password,"Make sure to enter the right password");
      }
      else{
        setSuccessFor(password);
        passwordCheck = true;
      }
      // check both password fields are equal or not
     
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