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
 var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);