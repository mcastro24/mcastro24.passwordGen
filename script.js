
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
var specialCharacters = [
  '@','%','!','#','$','^','?',':',',','+','/',"'",'_','.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCasedCharacters = [
  'a', 'b','c','d','e','f','g','h','i','j','k', 'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

function getPasswordOptions() {

  var length = parseInt(
    prompt('How many characters(total)?')
  );

  if (isNaN(length) === true) {
    alert('Password length needs to be a number');
    return;
  }

  if (length < 8) {
    alert('Password length minimum 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password length has to be under 129 characters');
    return;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm special characters.'
  );


  var hasNumericCharacters = confirm(
    'Click OK to confirm numeric characters.'
  );


  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm lowercase characters.'
  );


  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm uppercase characters.'
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select OK to at least one (This OK does not count)');
    return;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

