/// 1- Generate a random one digit number
console.log(Math.floor(Math.random()*10));

/// 2- Use random to get dice input between 1 to 6
console.log(Math.floor((Math.random()*1000)%6 +1));

/// 3- Add two dice number and print the result.
let diceOne = Math.floor((Math.random()*1000))%6 +1;
let diceTwo = Math.floor((Math.random()*1000))%6 +1;
let sumDice = diceOne + diceTwo;
console.log("Sum of two dice = " + sumDice);

/// 4- Enter the five number and print sum and average.
let sum = 0;
for(let iterator = 0; iterator<5; iterator++ )
{
    sum += Math.floor(Math.random() * 100);
}
console.log("Sum is: " + sum);
console.log("Average is: " + sum/5);

/// 5 - Unit Conversion.
const INCH_IN_FEET = 12;
let conversionRatio = (1/INCH_IN_FEET);
let numberOfInch = 42;

/// 5A - Converting the units using the unitary principle
let numberOfFeet = conversionRatio * numberOfInch;
console.log("Number of feet = " + numberOfFeet);

/// 5B - Converting an area in feet to area in inch square
let areaInFeetSqr = 60*40;
let areaInInchSqr = areaInFeetSqr * (conversionRatio*conversionRatio);
console.log("Area in Square feet = " + areaInFeetSqr +'\n'+ "Area in Square Inch = "+areaInInchSqr);

/// 5C - Computing area of 25 such plots in acre
const NUMBER_OF_PLOTS = 25;

/// Conversion factor taken from conversion tables
const SQRFOOT_IN_ACRES = 43560;
let totalArea = NUMBER_OF_PLOTS*areaInFeetSqr;
let totalAreaInAcre = totalArea/SQRFOOT_IN_ACRES;
console.log("Area in Acre = "+ totalAreaInAcre);