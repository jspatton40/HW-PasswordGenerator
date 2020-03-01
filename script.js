//var passwordLength =prompt("How long would you like your password to be? Must be between 8 and 128 characters long.")
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&()*+,-./:;<=>?@^[]^_`{|}~';
var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+<>,.{}|~`"

var password = '';

function generate() {
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
    if (passwordLength <= 8 && passwordLength >= 128) {
        alert("Passwords must be between 8 and 128 characters long.");
    }

    var confirmLowercase = confirm("Would you like to use lowercase characters");
    var confirmUppercase = confirm("Would you like to use uppercase characters");
    var confirmNumbers = confirm("Would you like to use numbers");
    var confirmSpecialCharacters = confirm("Would you like to use special characters");

    if (confirmLowercase === true){
        password += lowercase;
        console.log(password)
    }

    if (confirmUppercase === true){
        password += uppercase;
        console.log(password)
    }

    if (confirmNumbers === true){
        password += numbers;
        console.log(password)
    }

    if (confirmSpecialCharacters === true){
        password += symbols;
        console.log(password)
    }

    for (i = 0; i < passwordLength; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    

    return password;
}
generate();