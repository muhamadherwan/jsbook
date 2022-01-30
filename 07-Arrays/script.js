// Array

// Create new array
const arr = [];
const number = [1, 2, 3, 4];
const number2 = new Array(5, 6, 7, 8);
const fruits = ['orange', 'apple', 'banana'];
const mixeds = [22, 'string', true, undefined, { a: 1, b: 1 }, new Date(), [43, 44, 45]];

console.log(arr);
console.log(number);
console.log(number2);
console.log(fruits);
console.log(mixeds);

// get arrat length
length = number.length;
console.log(length);

// check array is array
chk = Array.isArray(mixeds);
console.log(chk);

// get single value
arr1 = number[3];
arr2 = number[0];
console.log(arr1);
console.log(arr2);

// insert into array
number[2] = 100;
console.log(number);

// find index of values
find = number.indexOf(100);
console.log(find);

// Add on the end of the array
number.push(20);
console.log(number);

// Add on the front of the array
number.unshift(11);
console.log(number);

// Remove from the back off the array
number.pop(20);
console.log(number);

// Remove from the front off the array
number.shift(11);
console.log(number);

// Remove value using splice
number3 = [1, 90, 3, 40, 5, 6, 7, 8, 9]
number3.splice(2, 2); // first value for which array to start, sencond value for how many array to remove after the start array.
console.log(number3); // return [1,90,5,6,7,8,9]

// reverse
console.log(number3.reverse());

// Join array with concate
newArr = number.concat(number3);
console.log(newArr);

// sort alphabet array
val = fruits.sort();
console.log(val);

// sorting array number in asc
asc = number3.sort(function (x, y) {
    return x - y;
});
console.log(asc);

// sorting array number in desc
desc = number3.sort(function (x, y) {
    return y - x;
});
console.log(desc);

