// Loop & Itterations

// FOR loop. return 1->10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// FOR loop and continue. keep loop after the continue statement.
for (let i = 0; i <= 10; i++) {
    if (i === 2) {
        console.log('My fav num is 2');
        continue;
    }

    console.log(`Number ${i}`);
}

// FOR loop and break. stop the loop when reach the break statement.
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log('stop the loops');
        break;
    }
    console.log(`loop 3 Number ${i}`);
}


// WHILE LOOOPS
let i = 0;
while (i <= 10) {
    console.log(`while Number ${i}`);
    i++;
}

// DO WHILE LOOPS. always loops once no matter what
let x = 0;
do {
    console.log(`do while Number ${x}`);
    x++;
}
while (x <= 10);



// Array Itterations

// 1.Loop tru array with FOR loop
const pets = ['cat', 'dog', 'bird'];
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

// 2. Itterate array using FOREACH <--always use this
pets.forEach(function (pet) {
    console.log(pet);
});

// 3. Itterate array using MAP to return different array
const peoples = [
    { id: 1, name: 'Ezzi' },
    { id: 2, name: 'Nick' },
    { id: 3, name: 'Ron' }
];

const ids = peoples.map(function (people) {
    return people.id;
});
console.log(ids); // return all id in value in the array object


// 4. Itterate array using FOREACH and also return the index
pets.forEach(function (pet, index) {
    console.log(`${index} ${pet}`);
});

// 5. FOR IN loop. <- Always use this for object itteration
const person = {
    firstName: 'Ezzi',
    lastName: 'Moralez',
    age: '25'
};
for (let x in person) {
    console.log(`${x}:${person[x]}`);
}























