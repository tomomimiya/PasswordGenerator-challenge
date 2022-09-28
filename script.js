var passElement = document.getElementById("password");
var passwordLength = prompt('How long would you like your password to be?');
var hasLowercase = confirm('Would you like lowercase letters?');
var hasUppercase = confirm('Would you like uppercase letters?');
var hasSpecialChar = confirm('Would you like special characters?');
var passwordStr = '';
// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUserResponse() {
  if (hasLowercase === true || hasLowercase) {
    console.log('password has lowercase');
    // might need to put build password function
    passwordStr = passwordStr + LOWERCASE[Math.round(Math.random() * LOWERCASE.length)]
  }

  return {
    passwordLength,
    hasLowercase,
    hasUppercase,
    hasSpecialChar,

  }
}

function buildPasswordStr() {
  console.log('Building password');

  var userResponses = getUserResponse()
  // Last part of function
  passElement.textContent = passwordStr
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Arrays
var NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
var LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var SPCIALCHARACT = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

//Windows
window.alert(`Hello, let's create a password`);
window.prompt(`how many digits?`);

//loop i=all the arrays?
for (var i)