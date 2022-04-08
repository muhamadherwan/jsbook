// destructuring element

let a, b;
[a, b] = [100, 200];
// console.log(a);

// rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
// console.log(c);
// console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(b);

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(rest);

// Array destructuring
// const people = ["ezzy", "daigo", "chris"];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// parse array returned from function
function getPeople() {
  return ["ezzy", "daigo", "zuck"];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// object destructuring
const person = {
  name: "daigo saito",
  age: 22,
  city: "tokyo",
  gender: "male",
  sayHello: () => console.log("hello"),
};

const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello;
