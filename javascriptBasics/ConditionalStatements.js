const readlineSync = require('readline-sync')
// Conditional Statements in JavaScript

// 1. if statement
// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// }

const userAge = readlineSync.questionInt('Enter Your Age: ');
if (userAge >= 18) {
    console.log('your are Adult')
}

// 2. if-else statement
const temperature = readlineSync.questionInt('Enter the temperature: ');
if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("It's not too hot.");
}

// 3. if-else if-else statement
const score = readlineSync.questionInt('Enter the Score: ');

if (score >= 90) {
    console.log("Grade:A")
} else if (score >= 80) {
    console.log('Grade: B')
} else if (score >= 70) {
    console.log('Grade: C')
} else if (score >= 60) {
    console.log('Grade: D')
} else {
    console.log("Grade: F")
}

// 4. Nested if statements

function getAccess(isLoggedIn, isAdmin) {
    if (isLoggedIn) {
        console.log('Welcome!')
        if (isAdmin) {
            console.log('Admin Permission Granted')
        } else {
            console.log('User Access Granted')
        }
    } else {
        console.log('Please login')
    }
}

let isLoggedIn = true;
let isAdmin = true;

console.log(getAccess(isLoggedIn,isAdmin))

// // 5. switch statement

// console.log("Find the Day using ")

const day = readlineSync.questionInt('Enter the day: ');

switch(day){
    case 1:
        console.log("it's Monday!")
        break;
    case 2:
        console.log("it's Tuesday!")
        break;
    case 3: 
        console.log("it's Wednesday!")
        break;
    case 4: 
        console.log("it's Thursday!")
        break;
    case 5:
        console.log("it's Friday")
        break;
    case 6:
        console.log("it's Saturday")
        break;
    case 7:
        console.log("it's Sunday")
        break;
    default:
        console.log('Invalid Day')
}



// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // 6. Ternary operator (conditional operator)
// let isEven = (10 % 2 === 0) ? "Even" : "Odd";
// console.log(isEven); // Output: Even

// // 7. Logical operators in conditions
// let hasPermission = true;
// let isAuthenticated = false;
// if (hasPermission && isAuthenticated) {
//     console.log("Access granted.");
// } else {
//     console.log("Access denied.");
// }

// // 8. Truthy and falsy values
// let value = 0;
// if (value) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy"); // This will be logged because 0 is falsy
// }

// // 9. Short-circuit evaluation
// let user = null;
// let username = user && user.name; // username will be null
// console.log(username);

// let defaultName = "Guest";
// let displayName = user?.name || defaultName; // Using optional chaining and logical OR
// console.log(displayName); // Output: Guest
