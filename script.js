// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length= parseInt(prompt("How long do you want your password to be?"));

  if(isNaN(length)===true){


    alert("Please enter a number value");
    return;
  }

  if(length<10){

    alert("Password is too short");
    return;
  }

  if (length>64){

    alert("Password is too long");
    return;
  }
  var hasLowerCasedCharacters = confirm("Click ok to confirm lowercase characters");


  var hasSpecialCharacters = confirm("Click ok to confirm special charcaters");


  var hasNumericCharacters = confirm("Click ok to confirm numeric charcters");


  var hasUpperCasedCharacters = confirm("Click ok to confirm uppercase characters");



  if (hasSpecialCharacters === false && hasNumericCharacters === false && hasLowerCasedCharacters === false && hasUpperCasedCharacters === false)
    {


      alert("Please select at least one type of character");
      

      return;

    }
  
    var passwordOptions = {

      length: length, hasSpecialCharacters: hasSpecialCharacters, hasLowerCasedCharacters: hasLowerCasedCharacters, hasUpperCasedCharacters: hasUpperCasedCharacters
    };

    return passwordOptions;

}



// Function for getting a random element from an array


function getRandom(arr) {


  var randIndex = Math.floor(Math.random() * arr.length);

  var randElement = arr   [randIndex];

  return randElement;
}










// Function to generate password with user input
function generatePassword() {
var result = [];

  var options = getPasswordOptions();
    var guaranteedCharacters = [];



  var possibleCharacters = [];


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

    result[i]= guaranteedCharacters[i];



   }



    return result.join("");

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);