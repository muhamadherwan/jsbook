// 03 - Type conversion

// to string
str = String(555);
console.log(str.length);
arr = [1, 2, 3, 4];
arr = String(arr);
console.log(typeof arr);

// or use this for string conversion
num = [1, 2, 3, 4];
num = num.toString();
console.log(typeof num);

car = (['honda', 'toyota', 'nissan']).toString();
console.log(car);
console.log(car.length);


// convert to numbers
let val;
val = Number('hello'); // return NaN (not a number)
val = Number('5'); // return 5
val = Number(true); // return 1
val = Number(false) // return 0
val = Number(null); // return 0
val = Number([1, 2, 3, 4]); // return NaN

val = parseInt('100.10'); // convert to nondecimal numbers
val = parseFloat('100.01'); // convert to decimal numbers

console.log(val);
console.log(val.toFixed(1)); // convert to float number based on how many place defined

// Type Coersion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum); // return 56 not 11
console.log(typeof sum); // return number not string

