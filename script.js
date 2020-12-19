// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function questions(){

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "q", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

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
  alert ("Must Select One");
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

questions()
var randomIndex = "";
function generatePassword() {
for(var i=0; i < questions; i++)  {
randomIndex = question[Math.floor(Math.random()*Array.length)];
password += Array[randomIndex];
}
return randomIndex
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomIndex;

}
}
);
// Add event listener to generate button

