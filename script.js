
// In this specific example we are using 
// - functions, 
// - arrays, 
// - Math.random() (and everything that comes with it!!!)
// - eventListeners
    // var maxLength = 142;
    // var minLength = 8;
    var passwordOutput = document.querySelector("#password-output");
    var generateBtn = document.querySelector("#generate");
    var charArray = [ ];
    // var clipboard = document.querySelector("#clipboard");
    
    // Step 1: 
    // 1. create an array of lowerCase characters
    var lowercase = ["abcdefghijklmnopqrstuvwxyz"]; 
    lowercase[0].split("");
    console.log(lowercase);

    // 2. create an array of upperCase characters
    var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    uppercase[0].split("");
    console.log(uppercase);

    // 3. create an array of numbers
    var numbers = ["1234567890"];
    numbers[0].split("");
    console.log(numbers);
    // 4. create an array of special characters
    var special = ["!@#$%^&*()"];
    special[0].split("");
    console.log(special);

    // Step 2: 
    // 1. create a function that asks the user about the specifics of the password:
    //     -length
    generateBtn.addEventListener("click", function(event) {
        //     -lowerCase characters
        var userPromptL = confirm("Do you want your password to contain lowercase characters?");
        if (userPromptL === true) {
            console.log("Password will contain lowercase characters");
            charArray = charArray.concat(lowercase[0].split(""));
        }
        else {
            console.log("Password will not contain uppercase characters");
        }
        
        //     -upperCase characters
        var userPromptU = confirm("Do you want your password to contain uppercase characters?");
        if (userPromptU === true) {
            console.log("Password will contain uppercase characters");
            charArray = charArray.concat(uppercase[0].split(""));
        }
        else {
            console.log("Password will not contain uppercase characters");
        }
        //     -numbers
        var userPromptN = confirm("Do you want your password to contain numbers?");
        if (userPromptN === true) {
            console.log("Password will contain numbers");
            charArray = charArray.concat(numbers[0].split(""));
        }
        else {
            console.log("Password will not contain numbers");
        }
        //     -special characters
        var userPromptS = confirm("Do you want your password to contain special characters?");
        if (userPromptS === true) {
            console.log("Password will contain special characters");
            charArray = charArray.concat(special[0].split(""));
        }
        else {
            console.log("Password will not contain special characters");
        }

        var passLength = prompt("Input desired length between 8 and 142 characters.")
            console.log(passLength);    
        
        var password = [];
            for (var i = 0; i <= passLength; i++){
               var passGen = charArray[Math.floor(Math.random() * charArray.length)];
               password.push(passGen);
               console.log("Char: " + passGen);
            }
            console.log(password);

        passwordOutput.innerHTML = password.join("");
        console.log(passwordOutput);
    })
    