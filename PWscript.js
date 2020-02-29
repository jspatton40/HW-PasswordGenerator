

var i = 0
while (i < 1) {
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
        alert("Your password will be " + passwordLength + (" characters long!"));
            i++
    }
    else {
        alert("Your password length is either too long, too short or not a number, please choose again.")
    }
}

var i=0

while (i < 1) {
    var confirmLowercase = confirm("Would you like to use lowercase characters");
    var confirmUppercase = confirm("Would you like to use uppercase characters");
    var confirmNumbers = confirm("Would you like to use numbers");
    var confirmSpecialCharacters = confirm("Would you like to use special characters");
    if (confirmLowercase === true || confirmUppercase === true || confirmNumbers === true || confirmSpecialCharacters) {
        i++
    }
    else {
        alert("Please try again, password length must be between 8 and 128 characters.")
    }
}

console.log(confirmLowercase);
console.log(confirmUppercase);
console.log(confirmNumbers);
console.log(confirmSpecialCharacters);


var lowercase =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var uppercase =("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers =("123456789");
var special =("~`!@#$%^&*()_+={[{}]|:;'<>,.?/");
//var passwordOutput =
 


//if (passwordLength >= 8 && passwordLength <= 128 && confirmLowercase === true && confirmUppercase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
    // var passwordOutput= function(lowercase){
      //   return lowercase[Math.floor(Math.random()*lowercase.passwordLength)]
     //}
//}

//alert("Your password is " + passwordOutput)