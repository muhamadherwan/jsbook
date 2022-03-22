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

// inheritance (subclass) exp: inherit Person class
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        // get the parent properties
        super(firstName, lastName);

        this.phone = phone;
        this.membershop = membership;
    }

    // method
    getProduct() {
        return 'laptop, gaming pc, keyboard.'
    }
    // static method
    static getFee(){
        return 500;
    }
} 

// instant new customer object
customer1 = new Customer("Zuck", "Keberg", "755-25-25", "Gold");

console.log(customer1);

// inherit person method
console.log(customer1.greeting());

// static in subclass exp:
console.log(Customer.getFee());

// subclass method exp
console.log(customer1.getProduct());


// instant new person object
ezzi = new Person("Ezzi","Moralez", "12-27-1980");

console.log(ezzi.greeting());
console.log(ezzi.getAge());
ezzi.getMarried("Zuck");
console.log(ezzi.greeting());

// called the static method. no need to instance as a new object
console.log(Person.addNumber(1,2));