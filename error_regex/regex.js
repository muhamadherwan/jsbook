let re;
re = /hello/;
re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source);

// exec() - return result in array or null
// const result = re.exec("hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - return true or false
// const result = re.test("Hello");
// console.log(result);

// match() - return result array or null
// const str = "Hello there";
// const result = str.match(re);
// console.log(result);

// search() - return index of the first match if not found return -1
// const str = "Brad Hello there";
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
const str = "hello there";
const newStr = str.replace(re, "kababoom!");
console.log(newStr);
