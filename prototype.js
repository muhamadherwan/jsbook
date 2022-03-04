// Person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// Person get full name prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}



