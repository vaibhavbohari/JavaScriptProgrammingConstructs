//1. Read single digit number and write in words using switch case
const readline = require('readline-sync');
let input = readline.questionInt("Enter a single digit number to convert to word.");
switch (input) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid input");
        break;
}

//2. Read number and display weekday using switch case
const readline = require('readline-sync');
let input = readline.questionInt("Enter a number to know the day.");
switch (input) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input");
        break;
}

// 3. Read number and display unit, ten, Hundered, Thousand.
const readline = require('readline-sync');
let input = readline.questionInt("Enter a number.");
switch (input) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundered");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("Invalid input");
        break;
}

//4. Unit Conversion.
const readline = require('readline-sync');
let choice = readline.questionInt("Enter your choice \n1. Convert feet to inch\n2. Convert feet to metre\n3. Convert inch to feet \n4. Convert metre to feet");
let inputNumber = readline.questionInt("Enter number to convert: ");
switch (choice) {
    case 1: console.log(inputNumber + "Feet :" + inputNumber * 12 + " Inches");
        break;
    case 2: console.log(inputNumber + "Inches :" + inputNumber / 12 + " Feet");
        break;
    case 3: console.log(inputNumber + "Feet :" + inputNumber * 0.3048 + " Meter");
        break;
    case 4: console.log(inputNumber + "Meter :" + inputNumber * 3.28 + " Feet");
        break;
    default: console.log("Wrong input");
        break;
}