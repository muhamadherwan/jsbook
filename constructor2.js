// Person constructor
function Person (name, dob) {
    this.name = name;
    // this.age = age;
    this.bday = new Date(dob);

    // calculate age method
    this.calculateAge = () => {
        const diff = Date.now() - this.bday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
}

// create the new person object
const ezzi = new Person('ezzi', '9-10-1990');
const brad = new Person('brad', '12-27-1981');

console.log(ezzi);
console.log(brad);

console.log(ezzi.calculateAge());
console.log(brad.calculateAge());

// off topic. create new object and new array exp:
const ezzi2 = { firstname:"ezzi", lastname:"moralez" };

const zuck = [1,2,3,4];

console.log(ezzi2);
console.log(zuck);


