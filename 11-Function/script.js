// Functions

// Function Declarations
function greet(first = 'Nick', last = 'Talman') {
    return `Hello ${first} ${last}`;
}
//console.log(greet('Ezzi', 'Moralez'));
console.log(greet()); // return Nick Talman if no argument is blank

// Fuction Expression
const square = function (x = 3) {
    return x * x;
};
console.log(square()); // return 9 coz argument is set to 3 if argument is blank.
console.log(square(4));

// Immidiatley Invokabale Function Expression (IIFES)
// Run by itself
// Use in module pattern

// exp blank parameter:
(function () {
    console.log('IIFE run');
})();

// exp with parameter
(function (person) {
    console.log(`Hello ${person}`)
})('Ezzi');


// Property Methods
// a function inside an object
const todo = {
    add: function () {
        console.log('Add function.');
    },
    edit: function () {
        console.log('Edit function.');
    }
}

// add a new function inside the todo object
todo.delete = function () {
    console.log('Delete function.');
};

// call the object method / functions
todo.add();
todo.edit();
todo.delete();


// ARROW FUNCTION <-- ALWAY USE THIS IN JS

// Basic function
// const name = (params) => {
//     // statements
// }

// call the arrow function
// name();

// Exp2:
const square2 = (number) => {
    return number * number;
}
// call the error function
const result = square2(4);
console.log(result);

// Exp3: if only have single line of statement can use like this:
const square3 = (number) => number * number;
// call the function
//const result3 = square3;
console.log(square3(10));


// Exp: If only have 1 perimeter can use like this:
const square4 = number => number * number;
// calll the arrow function
const result4 = square4(20);
console.log(result);































