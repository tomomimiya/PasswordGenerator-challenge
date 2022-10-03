var passElement = document.getElementById("password");
var passwordLength = prompt('How long would you like your password to be?');
var hasLowercase = confirm('Would you like lowercase letters?');
var hasUppercase = confirm('Would you like uppercase letters?');
var hasSpecialChar = confirm('Would you like special characters?');
var passwordStr = '';
// Assignment Code
var generateBtn = document.querySelector("#generate");
var userResponses = getUserResponse();

//Arrays
var NUMBERS = ['123456789',];
var LOWERCASE = ['abcdefghijklmnopqrstuvwxyz'];
var UPPERCASE = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var SPCIALCHARACT = ["!%&,*+-./<>?~"];

function getUserResponse() {
  if (hasLowercase === true || hasLowercase) {
    console.log('password has lowercase');
    // might need to put build password function?
      function buildPassword() {
        passwordStr = passwordStr + LOWERCASE[Math.round(Math.random() * LOWERCASE.length)]
    }
  }
  if (hasUppercase === true || hasLowercase) {
    console.log('password has uppercase');

    function buildPassword() {
      passwordStr = passwordStr + UPPERCASE[Math.round(Math.random() * LOWERCASE.length)]
    }
  }
  if (hasSpecialChar === true || hasLowercase) {
    console.log('password has special character');

    function buildPassword() {
      passwordStr = passwordStr + SPCIALCHARACT[Math.round(Math.random * SPCIALCHARACT.length)]
    }
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
    //Last part of function
  passElement.textContent = passwordStr;
}

// Write password to the #password input
//function buildPasswordStr() {
// console.log('building password');

//  var passwordStr = buildPasswordStr();
//  var passElement = document.querySelector("#password");

//  passElement.value = passwordStr;
//}

// Add event listener to generate button

generateBtn.addEventListener ("click", buildPasswordStr);