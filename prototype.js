// Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

// Person greeting prototype
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Ezzi', 'Moralez');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// create new customer object
const customer1 = new Customer('Ezzi', 'Moralez', '7552525', 'Premium');

console.log(customer1);

// customer greeting
Customer.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName} welcome to ArakNet.`;
}

console.log(customer1.greeting());


