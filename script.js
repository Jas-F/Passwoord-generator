// Assignment Code
var generateBtn. = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

functiion

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "q", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

var userInput = promt ("Desired Passwoord Length Between 8 - 128.");
var lowerCase = confirm ("Would You Like Lower Case Letters?");
var upperCase = confirm ("Would You Like Upper Case Letters?");
var numeric = confirm ("Would You Like Numeric Characters?");
var specialCharacters = confirm ("Would You Like Special Characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

