// Simple Math
const num1 = 10;
const num2 = 200;

let val;
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; // return Pi
val = Math.E; // return Enumurate number
val = Math.round(2.4); // return round number = 2
val = Math.ceil(2.4); // return up round number = 3
val = Math.floor(2.8); // return down round number = 2
val = Math.sqrt(64); // return square number = 
val = Math.abs(-30); // return absloute number = 3
val = Math.pow(8, 2); // return 8 power 2 = 64
val = Math.min(2, 4, 1); // return the min number
val = Math.max(2, 4, 1); // return the max number
val = Math.random(); // return random decimal number

// return random number from 1 to 2
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
