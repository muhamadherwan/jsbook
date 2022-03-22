// person prototype
const personPrototype = {
    greeting: function() {
        return `Hola there ${this.firstName} ${this.lastName}`;
    },
    // get married method
    getMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const ezzi = Object.create(personPrototype);
ezzi.firstName = 'Ezzi';
ezzi.lastName = 'Moralez';

ezzi.getMarried('Keberg');
console.log(ezzi.greeting());
console.log(ezzi);

// other way to set properties 
const zuck = Object.create(personPrototype, {
    // create the properties using object
    firstName: {value: 'Zuck'},
    lastName: {value: 'Keberg'},
    age: {value: 36}
});

console.log(zuck);
console.log(zuck.greeting());