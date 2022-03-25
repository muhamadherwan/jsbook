// const sayHello = () => {
//     console.log('Hello');
// }

// one line function does not need curly bracket
// const sayHello = () => console.log('Hello');

// sayHello();

// one line return
// const sayHello = () => 'Hello';

// return object
// const sayHello = () => ({ msg: 'helo'});

// console.log(sayHello());


// single params does not need paranthesis
// const sayHello = name => (console.log(`Hello ${name}`));

// sayHello('Brad');

const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello('chino', 'moreno');

const users = ['ezzi', 'zuck', 'abahkool'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

// shorter version
const nameLengths = users.map(name => name.length);

console.log(nameLengths);









