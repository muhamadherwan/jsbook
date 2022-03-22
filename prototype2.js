// Person Constructor
function Person (firstName, lastName, dob ) {
    // properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Person prototype ( prototype is a method for certain object constructor)
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Person calculate age method / prototype
// calculate age method
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Person getMarried prototype
Person.prototype.getMarried = function(newLastName) {
    this.lastName = newLastName;
}

const ezzi = new Person ('ezzi', 'moralez', '12-27-1990');

console.log(ezzi);
console.log(ezzi.getFullName());
console.log(ezzi.calculateAge());
ezzi.getMarried('zuck');
console.log(ezzi.getFullName());