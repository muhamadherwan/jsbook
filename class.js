// js es6 oop blue print
// Person class
class Person {
    // constructor
    constructor( firstName, lastName, dob) {
        // properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    // greeting method
    greeting() {
        return `Hola ${this.firstName} ${this.lastName}`;
    }

    // getAge method
    getAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // getMarried method
    getMarried( newLastName ) {
        this.lastName = newLastName;
    }

    // static method
    static addNumber(x,y) {
        return x + y;
    }


}

// instant new object
ezzi = new Person("Ezzi","Moralez", "12-27-1980");

console.log(ezzi.greeting());
console.log(ezzi.getAge());
ezzi.getMarried("Zuck");
console.log(ezzi.greeting());

// called the static method. no need to instance as a new object
console.log(Person.addNumber(1,2));