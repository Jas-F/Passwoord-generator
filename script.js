// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

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
  length: userInput,
  upperCase1: upperCaseConfirm,
  lowerCase1: lowerCaseConfirm,
  number: numericConfirm,
  specialCharacter: specialCharactersConfirm
}

return questions;
}

function generatePassword() {
  var passOptions = questions()
  var finalResult = []
  var possChar = []
  var guaranteeChar = []

  if (passOptions.specialCharacter === true){
    possChar = possChar.concat(specialCharacterSet)
    guaranteeChar.push(random(specialCharacterSet))
  }
  if (passOptions.upperCase1 === true){
    possChar = possChar.concat(upperCase)
    guaranteeChar.push(random(upperCase))
  }
  if (passOptions.lowerCase1 === true){
    possChar = possChar.concat(lowerCase)
    guaranteeChar.push(random(lowerCase))
  }
  if (passOptions.number === true){
    possChar = possChar.concat(numericSet)
    guaranteeChar.push(random(numericSet))
  }
  console.log(possChar)
  console.log(guaranteeChar)
  for(var i=0; i < passOptions.length; i++) {
    var finalChar = random(possChar)
    finalResult.push(finalChar)
  }
  for(var i=0; i < guaranteeChar.length; i++) {
    finalResult[i]=guaranteeChar[i]
  }
  return finalResult.join("")
}
// for(var i=0; i < questions; i++)  {
// random = question[Math.floor(Math.random()*Array.length)];
// password += Array[randomIndex];
// }
// console.log(randomIndex)
// return randomIndex
// }
function random(array){
  var randomIndex = Math.floor(Math.random()*array.length)
  var randomEl = array[randomIndex]
    return randomEl
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button

