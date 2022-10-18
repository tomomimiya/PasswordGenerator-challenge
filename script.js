var passElement = document.getElementById("password");
var passwordLengthAnswer = prompt(
  "How long would you like your password to be?"
);
var passwordLength = parseInt(passwordLengthAnswer);
var hasLowercase = confirm("Would you like lowercase letters?");
var hasUppercase = confirm("Would you like uppercase letters?");
var hasSpecialChar = confirm("Would you like special characters?");
var passwordStr = "";
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var LOWERCASE = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var UPPERCASE = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var SPCIALCHARACT = ["!", "%", "&", "*", "+", "-", ".", "?", "~"];

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  if (hasLowercase === true || hasLowercase) {
    console.log("Password has lowercase");
    // might need to put build password function?
    function buildPassword() {
      passwordStr =
        passwordStr + LOWERCASE[Math.round(Math.random() * LOWERCASE.length)];
    }
  }

  if (hasUppercase === true || hasUppercase) {
    console.log("Password has uppercase");
    function buildPassword() {
      passwordStr =
        passwordStr + UPPERCASE[Math.round(Math.random() * UPPERCASE.length)];
    }
  }

  if (hasSpecialChar === true || hasSpecialChar) {
    console.log("password has special character");
    function buildPassword() {
      passwordStr =
        passwordStr +
        SPCIALCHARACT[Math.round(Math.random * SPCIALCHARACT.length)];
    }
  }
  return {
    passwordLength,
    hasLowercase,
    hasUppercase,
    hasSpecialChar,
  };
}
//creating the final password thats displayed in the user window
function buildPasswordStr() {
  console.log("Building password");

  var passwordStr = generatePassword();
  var passwordText = document.querySelector("#password");
  //Last part of function
  passElement.textContent = passwordStr;
}

generateBtn.addEventListener("click", buildPasswordStr);
