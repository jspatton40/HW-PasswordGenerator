//var passwordLength =prompt("How long would you like your password to be? Must be between 8 and 128 characters long.")


var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
var i;
for (i = 0; i < passwordLength.length; i++) {
    if (passwordLength <= 8 && passwordLength >= 128) {
        prompt("Your password will be " + passwordLength + " long!");
    
    } else { 
        passwordLength = prompt("Please choose a password length between 8 and 128 characters");
    }
}


    function generate() {

        // var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // var lowercase = 'abcdefghijklmnopqrstuvwxyz';
        // var numbers = '0123456789';
        // var symbols = '!"#$%&()*+,-./:;<=>?@^[]^_`{|}~';
        var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+<>,.{}|~`";

        var password = '';





        var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+<>,.{}|~`"

        // var confirmLowercase = confirm("Would you like to use lowercase characters");
        // var confirmUppercase = confirm("Would you like to use uppercase characters");
        // var confirmNumbers = confirm("Would you like to use numbers");
        // var confirmSpecialCharacters = confirm("Would you like to use special characters");

        // if (confirmLowercase === true){
        //     password += lowercase;
        //     console.log(password)
        // }

        // if (confirmUppercase === true){
        //     password += uppercase;
        //     console.log(password)
        // }

        // if (confirmNumbers === true){
        //     password += numbers;
        //     console.log(password)
        // }

        // if (confirmSpecialCharacters === true){
        //     password += symbols;
        //     console.log(password)
        // }

        // for (i = 0; i < passwordLength; i++) {
        //     var character = Math.floor(Math.random() * possibleCharacters.length);
        //     // password += all.substring(character, character + 1);
        // }

        for (var index = 0; index < passwordLength; index++) {
            var character = Math.floor(Math.random() * possibleCharacters.length);
            password += possibleCharacters.substring(character, character + 1);
        }


        return password;
    }
    generate();