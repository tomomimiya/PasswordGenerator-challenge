var passElement = document.getElementById("password");
var passwordLength = prompt('How long would you like your password to be?');
var hasLowercase = confirm('Would you like lowercase letters?');
var hasUppercase = confirm('Would you like uppercase letters?');
var hasSpecialChar = confirm('Would you like special characters?');
var passwordStr = '';
// Assignment Code
var generateBtn = document.querySelector('#generate');

//not sure if i need this here?
var passwordStr = getUserResponse();

//Arrays
var NUMBERS = ['1','2','3','4','5','6','7','8','9'];
var LOWERCASE = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UPPERCASE = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var SPCIALCHARACT = ['!','%','&','*','+','-','.','?','~'];

function getUserResponse() {
  if (hasLowercase === true || hasLowercase) {
    console.log('Password has lowercase');
    // might need to put build password function?
      function buildPassword() {
        passwordStr = passwordStr + LOWERCASE[Math.round(Math.random() * LOWERCASE.length)]
      }
  }

  if (hasUppercase === true || hasUppercase) {
    console.log('Password has uppercase');
    function buildPassword() {
      passwordStr = passwordStr + UPPERCASE[Math.round(Math.random() * UPPERCASE.length)]
    }
  }

  if (hasSpecialChar === true || hasSpecialChar) {
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

  var passwordStr = getUserResponse();
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