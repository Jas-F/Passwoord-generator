// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    questions()
function questions () {
var userInput = parseInt( prompt ("Desired Password Length Between 8 - 128."));

if (userInput > 128 || userInput < 8) {
  alert ("Must Be Between 8 - 128.")
  return
}

if (isNaN(userInput) === true) {
  alert ("Not A Number.")
  return
}

var lowerCaseConfirm = confirm ("Would You Like Lower Case Letters?");
var upperCaseConfirm = confirm ("Would You Like Upper Case Letters?");
var numericConfirm = confirm ("Would You Like Numeric Characters?");
var specialCharactersConfirm = confirm ("Would You Like Special Characters?");

if (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === false && specialCharactersConfirm === false) {
  alert ("Must Select One")
  return
}

var questions = {
  userInput: userInput,
  upperCase: upperCaseConfirm,
  lowerCase: lowerCaseConfirm,
  number: numericConfirm,
  specialCharacter: specialCharactersConfirm
}

return questions;

}

var userInput = userInput

for(var i=0; i<userInput; i++)  {
  var randomIndex = Math.floor(Math.random()*Array.length);
  password += Array[random]
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
