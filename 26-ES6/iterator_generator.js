// iterator example
function nameIterator(names) {
  let = nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// create an array of names
const namesArr = ["Ezzi", "Nick", "Donny"];
// init iterator and pass in the names array
const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator example
function* sayNames() {
  yield "Jack";
  yield "Ezzi";
  yield "Nick";
}

const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// id creator
function* createIds() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const ids = createIds();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
