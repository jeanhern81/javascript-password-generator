//Password generator that will provide a pasword using anywhere between 8-150 characters. 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Arrays
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "/", "-", "~", "."];

//Variable Declarations
var confirmLength;
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacter;

//1st prompt to confirm how long they want their password to be (8-128 characters).
function writePassword() {
  var confirmLength = prompt("Select the number of characters you want your password to be. Must be between 8 - 128 characters long.")



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);