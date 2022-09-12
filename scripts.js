//declare your variables for the text field and access DOM
const allInputs = document.querySelectorAll("input")
const eamilInput = document.querySelector("#email");
const passwordInput = document.getElementById("password");
const password2Input = document.getElementById("password2");
const stackie1Input = document.getElementById("stackie1");
const submitButton = document.getElementsByTagName("button");


function validationStyler(el, status){
  if(status === true ){ 
    el.parentElement.classList.remove("error"); el.parentElement.classList.add("success"); el.nextElementSibling.style.visibility = "hidden" ;
  }
  else{ el.parentElement.classList.add("error"); el.parentElement.classList.remove("success"); el.nextElementSibling.style.visibility = "visible"  }
}
//check email is valid
//eamilInput.addEventListener("input",isEamilValid)
function isEamilValid(){
  let regex = new RegExp("@[a-zA-Z]{2,}\.com");
  let test = regex.test(eamilInput.value)
  validationStyler(eamilInput,test)
  return true
}

//check input length for password
function isPasswordValid(){

 let test =   passwordInput.value.length >= 5 ? true : false;
validationStyler(passwordInput, test)
 return test
}
//check the two passwords match
function isPasswodChecked(){
  let test =  passwordInput === password2Input;
validationStyler(password2Input, test);
  return test;
}

//check username
function isUsernameValid(){
let test = stackie1Input.value.length > 3 ? true : false;
validationStyler(stackie1Input, test);
return test;
}

//check that all fields have input
function areInputsValid(e){
  e.preventDefault();
let isEamilValidV = isEamilValid();
let isPasswordValidV = isPasswordValid();
let isPasswodCheckedV = isPasswodChecked();
let isUsernameValidV = isUsernameValid();
return isEamilValidV && isPasswordValidV && isPasswodCheckedV && isUsernameValidV;
}

//add event listener for Submit button

submitButton[0].addEventListener("click", areInputsValid);

//seperate event listeners
function seperateValidation(e){
let elemId = e.target.getAttribute('id');
elemId === "email" ? isEamilValid() : elemId === "password" ? isPasswordValid(): elemId === "password2" ? isPasswodChecked() : isUsernameValid()

}
allInputs.forEach((elem)=>{
elem.addEventListener("blur",seperateValidation)
})