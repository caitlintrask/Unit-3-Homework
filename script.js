
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

        var passLength = prompt("Input desired length between 8 and 142.")
            console.log(passLength);    
        
        var password = [];
            for (var i = 0; i <= passLength; i++){
               var passGen = charArray[Math.floor(Math.random() * charArray.length)];
               password.push(passGen);
               console.log("Char: " + passGen);
            }
            console.log(password);
        
        passwordOutput.innerHTML = password.join("");
    })
        //     Save each of these specifications in a variable. Now we know password specifics!
        
        // 2. once we know the password's specifics, we can now create another variable
        //     that will include ALL the characters that the user wants to include. For example, 
        //     if the user wants to include numbers and special characters only, this new variable will have ONLY 
        //     numbers and special characters. Where are these coming from? --See Step 1.
// Step 3:
// 1. create another function that will take two parameters (length and specifiedCharacters), 
//     and inside this function create a new variable and assign an empty array to it. 
//     This new variable will hold your generated password. 
    
// 2. this function will also include your loop and push a randomly selected 
//     character from specifiedCharacters into a new variable that you just created. So, how many time does this loop run?

// 3. make sure to return the variable after the loop, but still inside the function. This variable may not come in the format you want. 
//     You may want to google .join() method. Use it on this variable. 
//     Notice how we return a variable from this function!!!
//     This means that when we execute/invoke this function, we can assign the returned value of this function to a variable. 

// Step 4:
// 1. go back to your first function from Step 2, and inside it execute the function from Step 3 while passing 
//     two parameters (length and specifiedCharacters). Create a new variable; assign the returned value of the function to this variable. 

// 2. now, take this variable and display it in a div or p tag.

// Step 5: 
// 1. target your button from html and add an click event listener to it, and execute/invoke the function from Step 1. 

// !!! ***CONSOLE.LOG() often to see what you are working with*** !!!
// !!! if it's not working, open CONSOLE and see the error !!!

// This is your MVP: minimum viable product!

// On your own, take it a step further to validate the user's responses: certain length and at least one response should be true. 
