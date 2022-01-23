// let variable value can be reassign and not global scope like var 
let car = 'honda city';
console.log(car);

// constants value cannot be reassign. 
const herName = 'ezzy moralez';
console.log(herName);

// array in constant variable. But can mutation on the object or array value refferance
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);

// numbers = [1, 2, 3, 4, 6];
// console.log(numbers); // will return error!

// example mutation object value in constant variable
const persons = {
    name: 'Ezzy Moralez',
    age: 25
};

persons.name = 'Nick';
persons.age = 27;

console.log(persons.name);
console.log(persons.age);







