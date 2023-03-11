// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// pseudo: if the button is clicked
      // then the user is prompted with the following questions:
      // Which password criteria would you like to include? (length, character types - lower, upper, numeric, speical characters)

      // User Prompt: How long would you like your password to be? (min: 8, max: 128)

      // User prompt: Do you want your password to include lowercase letters?

      // User prompt: Do you want your password to include uppercase letters?

      // User prompt: Do you want your password to include numbers?

      // User prompt: Do you want your password to include special characters?

      // Create the password, following all criteria

      // Display the password to the user once it has been created.



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword() {

  //things here 

});
