//1. Find Maximum and Minimum of 5 randon 3 digit values
let min = 999;
let max = 0;
console.log("Numbers : ");
for (i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    console.log((i + 1) + ")" + number);
    if (number < min) {
        min = number;
    }
    if (number > max) {
        max = number;
    }
}
console.log("Min number : " + min);
console.log("Max number : " + max);

// 2.Check if given year is leap year
const readline = require('readline-sync');
let year = readline.questionInt("Enter a Year");
if (year % 400 == 0) {
    console.log(year + " is a leap year.");
}
else if (year % 100 == 0) {
    console.log(year + " is not a leap year.");
}
else if (year % 4 == 0) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}

// 3. Flip coin prints heads or tails randomly.
const HEAD = 1;
let flip = Math.floor(Math.random() * 10) % 2;
if (flip == HEAD) {
    console.log("HEADS");
}
else {
    console.log("TAILS");
}

//4. Read single digit number and write in words
const readline = require('readline-sync');
let inputNumber = readline.questionInt("Enter a single digit number: ");

if (inputNumber == 1) {
    console.log("One");
}
else if (inputNumber == 2) {
    console.log("Two");
}
else if (inputNumber == 3) {
    console.log("Three");
}
else if (inputNumber == 4) {
    console.log("Four");
}
else if (inputNumber == 5) {
    console.log("Five");
}
else if (inputNumber == 6) {
    console.log("Six");
}
else if (inputNumber == 7) {
    console.log("Seven");
}
else if (inputNumber == 8) {
    console.log("Eight");
}
else if (inputNumber == 9) {
    console.log("Nine");
}
else {
    console.log("Invalid Number");
}

//5. Read number and display weekday
const readline = require('readline-sync');
let inputNumber = readline.questionInt("Enter a number to view day: ");
if (inputNumber == 1) {
    console.log("Monday");
}
else if (inputNumber == 2) {
    console.log("Tuesdat");
}
else if (inputNumber == 3) {
    console.log("Wednesday");
}
else if (inputNumber == 4) {
    console.log("Thursday");
}
else if (inputNumber == 5) {
    console.log("Friday");
}
else if (inputNumber == 6) {
    console.log("Saturday");
}
else if (inputNumber == 7) {
    console.log("Sunday");
}
else {
    console.log("Invalid Number");
}

// 6. Print the Unit of number.
const readline = require('readline-sync');
let input = readline.questionInt("Enter a number: ");
if (input == 1) {
    console.log("Units");
}
else if (input == 10) {
    console.log("Ten");
}
else if (input == 100) {
    console.log("Hundered");
}
else if (input == 1000) {
    console.log("Thousand");
}
else {
    console.log("Invalid input");
}

// 7. Perform Arithmatic Operations and find minimum and maximum
const readline = require('readline-sync');
let a = readline.questionInt("Enter value of a: ");
let b = readline.questionInt("Enter value of b: ");
let c = readline.questionInt("Enter value of c: ");
let d = readline.questionInt("Enter value of d: ");
let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;
let maximum = Math.max(operation1, operation2, operation3, operation4);

if (maximum == operation1) {
    console.log("Maximum : Operation 1" + " Value : " + operation1);
}
else if (maximum == operation2) {
    console.log("Maximum : Operation 2" + " Value : " + operation2);
}
else if (maximum == operation3) {
    console.log("Maximum : Operation 3" + " Value : " + operation3);
}
else {
    console.log("Maximum : Operation 4" + " Value : " + operation4);
}

let minimum = Math.min(operation1, operation2, operation3, operation4);

if (minimum == operation1) {
    console.log("Minimum : Operation 1" + " Value : " + operation1);
}
else if (minimum == operation2) {
    console.log("Minimum  : Operation 2" + " Value : " + operation2);
}
else if (minimum == operation3) {
    console.log("Minimum  : Operation 3" + " Value : " + operation3);
}
else {
    console.log("Minimum : Operation 4" + " Value : " + operation4);
}