// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numerals = '0123456789';
  var special = '/?.>,<;:}{}][\|+=_-)(*&^%$#@!';
  var allTheThings = '';
  var password = '';

  var passLength = prompt('Password length between 8 and 128 characters?')

  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength)
  } else {
    alert('Please pick a number 8 or greater, but no more than 128')
    return '';
  }

  var watLowerCase = confirm('Use lower case characters?')
  var watUpperCase = confirm('Use upper case characters?')
  var watNumerals = confirm('Use numerals?')
  var watSpecial = confirm('Use special characters?')

  if (watLowerCase) {
    allTheThings += lowerCase
  }
  console.log(watLowerCase)

  if (watUpperCase) {
    allTheThings += upperCase
  }
  console.log(watUpperCase)

  if (watNumerals) {
    allTheThings += numerals
  }
  console.log(watNumerals)

  if (watSpecial) {
    allTheThings += special
  }
  console.log(watSpecial)

  if (
    !watLowerCase && !watUpperCase && !watNumerals && !watSpecial
  ) {
    return alert('Help me to help you...');  
  }

  for (let i = 0; i < passLength; i++) {
    password += allTheThings[Math.floor(Math.random () * allTheThings.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
