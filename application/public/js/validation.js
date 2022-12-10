
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const checkAge = document.getElementById('checkAge');
const checkPrivacy = document.getElementById('checkPrivacy');
const email = document.getElementById('email');
form.addEventListener('submit', (e) => {
    e.preventDefault();
var usernameCheck = false;
var passwordCheck = false;
    checkInputs();
    if (usernameCheck && passwordCheck){
    document.getElementById("regformId").submit();
    }
});

function checkInputs(){
    var aplhanum = (/^[a-z0-9]+$/i);
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const confirmPasswordValue = confirm_password.value.trim();

if (usernameValue === ''){

setErrorFor(username, "Username cannot be blank");

}
 else if (
    ("a" > usernameValue[0] || usernameValue[0] > "z") &&
    ("A" > usernameValue[0] || usernameValue[0] > "Z")
  ) {
     setErrorFor(username,"Username must start with a-z or A-Z");
  }

 else if (usernameValue.length < 3 ||  !aplhanum.test(usernameValue)){
    setErrorFor(username, "Username must include 3 or more Alphanumeric Characters");
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
    
    setErrorFor(password, "Password must be 8 or more characters");
  }
  // check at least one number
  else if (!check_nums.test(passwordValue)) {
    
    setErrorFor(password,"Password must contain at least one number");
  }
  // check at least one Uppercase letter
  else if (!check_uppercase.test(passwordValue)) {
    setErrorFor(password,"Password must contain at least one Uppercase Letter.");
  }
  // check at least one special char
  else if (!check_specialchar.test(passwordValue)) {

    setErrorFor(password,"Password must contain one special character.(/*-+!@#$^&*)");
  }
  // check both password fields are equal or not
  else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(password,"Both Passwords must be same!");
    setErrorFor(confirm_password,"Both Passwords must be same!");
  } 
  else{
    setSuccessFor(password);
    passwordCheck = true;
  }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}