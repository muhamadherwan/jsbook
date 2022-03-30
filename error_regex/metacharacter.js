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

// brackets [] - character sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]rey/; // must be an G or F
re = /[^GF]rey/; // must be anyhing except G or F
re = /[A-Z]rey/; // match uppercase letter
re = /[a-z]rey/; // match lowercase letter
re = /[A-Za-z]rey/; // match any letter
re = /[0-9]rey/; // match any digit

// braces {} - quantifiers
re = /Hel{2}o/i; // must occur exactly {m} amount of time
re = /Hel{2,4}o/i; // must occur exactly {m} amount (min.max)
re = /Hel{2,}o/i; // must occur at least {m} amount of time

// parentheses () - grouping
re = /^([0-9]x){3}$/;

// string to match
// const str = "Hesllokkafd World";
// const str = "Grey?";
// const str = "Hellllllllllllllllo";
const str = "3x3x3x";

// log results
const result = re.exec(str);
console.log(result);

function reTest(result) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  }
}

reTest(re, str);
