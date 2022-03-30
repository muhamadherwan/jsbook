let re;
// literal character
re = /hello/;
re = /hello/i;

// metacharacter
re = /^h/i; // must start with
re = /rld$/i; // must end with
re = /^hello$/i; // must start and end with
re = /h.llo/i; // match any ONE character
re = /h*llo/i; // match any character 0 or more
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // escape character

// string to match
// const str = "Hesllokkafd World";
const str = "grey?";

// log results
const result = re.exec(str);
console.log(result);

function reTest(result) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  }
}

reTest(re, str);
