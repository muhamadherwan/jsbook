// Person constructor
function Person ( firstName, lastName ) {
    // properties
    this.firstName = firstName;
    this.lastName = lastName;
}

// Person Greeting prototype
Person.prototype.greeting = function () {
    return `Hola ${this.firstName} ${this.lastName}`;
}

person1 = new Person('Ezzi', 'Moralez');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {

    // inherit Person object / constructor
    Person.call(this, firstName, lastName);

    // properties
    this.phone = phone;
    this.membership = membership;
}

// inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return Customer()
Customer.prototype.constructor = Customer;


const customer1 = new Customer('Zuck', 'Kebeg', '755-25-25', 'Premeuim');

console.log(customer1);

// customer greetin
Customer.prototype.greeting = function(){
return `Hola ${this.firstName} ${this.lastName} welcome to Mayaliti!`;
}

console.log(customer1.greeting());
