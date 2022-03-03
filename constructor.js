// Person constructor
function Person(name, dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = () => {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


// const brad = new Person('Brad', 40);
// const ezzi = new Person('Ezzi Moralez', 23);

// console.log(brad);
// console.log(ezzi);
// console.log(ezzi.age);

const ezzi = new Person('Ezzi', '9-10-1981');
console.log(ezzi.calculateAge());