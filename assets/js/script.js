//Password generator that will provide a pasword using anywhere between 8-150 characters. 

// Assigned Code and add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "/", "-", "~", "."];

//Variable Declarations
var confirmLength = "";
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacter;

//1st prompt to confirm how long they want their password to be (8-128 characters).
function generatePassword() {
  var confirmLength = prompt ("Select the number of characters you want your password to be. Must be between 8 - 128 characters long.");

//Verify that the answer fits within the parameters.
if(confirmLength <= 7 || confirmLength >= 129) {
  alert ("Please choose between 8 - 128");  
  //asking again to confirm how long their password should be.
  var confirmLength = prompt ("Select the number of characters you want your password to be. Must be between 8 - 128 characters long."); 
}

//Reiterate to the user how many characters they've selected
alert (`Your password will have ${confirmLength} characters`);

//These are the set parameters that must be followed in order to create a password.
var confirmNumber = confirm ("Click OK to confirm that you would like to use a number value");
var confirmLowerCase = confirm ("Click OK to confirm that you would like to use lowercase letters");
var confirmUpperCase = confirm("Click OK to confirm that you would like to use uppercase letters");
var confirmSpecialCharacter = confirm ("Click OK to confirm that you would like to use a special character")

//If all the answers are outside the allowed parameters, quick back these responses
while(confirmLowerCase === false && confirmUpperCase === false && confirmSpecialCharacter === false && confirmNumber === false) {
  alert ("You must select a least one option");
  var confirmNumber = confirm ("Click OK to confirm that you would like to use a number value");
  var confirmLowerCase = confirm ("Click OK to confirm that you would like to use lowercase letters");
  var confirmUpperCase = confirm("Click OK to confirm that you would like to use uppercase letters");
  var confirmSpecialCharacter = confirm ("Click OK to confirm that you would like to use a special character")
}

//These is code that evaluates what characters will be included in the password.
var includedCharacters = []

if (confirmNumber) {
  includedCharacters = includedCharacters.concat(number)
}

if (confirmLowerCase) {
  includedCharacters = includedCharacters.concat(lowerCase)
}

if (confirmUpperCase) {
  includedCharacters = includedCharacters.concat(upperCase)
}

if (confirmUpperCase) {
  includedCharacters = includedCharacters.concat(specialCharacter)
}

//console log check to see if all options work.
console.log(includedCharacters)

//The loop to generate each character of the password.
var password = ""

for (var i = 0; i < confirmLength; i++) {
  password = password + includedCharacters[Math.floor(Math.random() * includedCharacters.length)];
    console.log(password)
  }
  return password; 

  }




  
  // you can create a function named generatePassword that creates the password
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}