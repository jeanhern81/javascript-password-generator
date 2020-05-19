// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Created a prompt asking user how many characters they want to use.
var userGuess = prompt("How may characters do you want to use? Select between 8 and 128.");
  //alerts if they choose under 7
if (8 < userGuess < 128) {
    alert("try again...");
}

else (userGuess ) { 
    alert("next question");
}  







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
