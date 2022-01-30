// object literals

// create new object
const person = {
    firstName: 'Ezzi',
    lastName: 'Moralez',
    age: 41,
    hobbies: ['coding', 'hacking'],
    address: {
        city: 'kl',
        state: 'WP'
    },
    getBirthYear: function () {
        return 2022 - this.age;
    }
}

// get values from object
let val;
val = person;

firstName = person.firstName;
lastName = person['lastName'];
age = person.age;
hobbies = person.hobbies;
hobby = person.hobbies[1];
city = person.address.city;
state = person.address['state'];
birthYear = person.getBirthYear();

console.log(val);
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(hobby);
console.log(city);
console.log(state);
console.log(birthYear);


// create Array object
const peoples = [
    { name: 'Ezzy Moralez', age: 25 },
    { name: 'Nick Talman', age: 30 }
];

console.log(peoples);

// show
for (let i = 0; i < peoples.length; i++) {
    console.log(peoples[i].name);
}



