// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // options of context user can select to generate password
  var password = ''
  var placeHolderPassword = ''

  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  var specialChar = '!@#$%^&*()_+'
  var numbers = '1234567890'

  // generating password length by what user chose between 8-128
  var pwdLength = prompt('How long would you like your password to be?')

  // if user chose outside of 8-128. alerting user to chose number between 8-128
  while (pwdLength < 8 || pwdLength > 128) {
    alert('Password must be betweem 8 and 128 characters')
    pwdLength = prompt('How long would you like your password to be?')
  }

  // prompting user to slect choice of uppercase, lowercase, special character, number for password
  var wantUppercase = confirm('would you like uppercase letters?')
  if (wantUppercase) {
    placeHolderPassword += uppercaseLetters
    console.log(placeHolderPassword)
  }

  var wantLowercase = confirm('would you like lowercase letter?')
  if (wantLowercase) {
    placeHolderPassword += lowercaseLetters
    console.log(placeHolderPassword)
  }

  var wantSpecialchar = confirm('would you like a special character?')
  if (wantSpecialchar) {
    placeHolderPassword += specialChar
    console.log(placeHolderPassword)
  }

  var wantNumeric = confirm('would you like numbers included?')
  if (wantNumeric) {
    placeHolderPassword += numbers
    console.log(placeHolderPassword)
  }

  // if user did not select uppercase, lowercase, number, special character, repromting for content
  while (!wantUppercase && !wantLowercase && !wantSpecialchar && !wantNumeric) {
    alert('You must choose password context')
    wantUppercase = confirm('would you like uppercase letters?')
    if (wantUppercase) {
      placeHolderPassword += uppercaseLetters
      console.log(placeHolderPassword)
    }
    wantLowercase = confirm('would you like lowercase letter?')
    if (wantLowercase) {
      placeHolderPassword += lowercaseLetters
      console.log(placeHolderPassword)
    }
    wantSpecialchar = confirm('would you like a special character?')
    if (wantSpecialchar) {
      placeHolderPassword += specialChar
      console.log(placeHolderPassword)
    }
    wantNumeric = confirm('would you like numbers included?')
    if (wantNumeric) {
      placeHolderPassword += numbers
      console.log(placeHolderPassword)
    }
  }

  // looping through password placeholder number of times user selected to generate randomized password and setting the password to answer of for loop
  for (var i =0; i< pwdLength; i++) {
    password += placeHolderPassword.charAt(Math.floor(Math.random() * placeHolderPassword.length))
  }

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
