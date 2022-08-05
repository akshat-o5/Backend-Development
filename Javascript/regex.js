// SYNTAX:

// /{PATTERN}/{FLAGS}

// new RegExp("patterns", "flags")

// REGEX METHODS:

// str.search(pattern) : It returns the string position of first match.

// pattern.test(str): It returns a true if there is a match and returns false if there is no match

// str.match(pattern): It returns the matched string. If the flag is not set to global, then it returns only the first match. But if the flag is set to global,  it returns an array of matches.



var str = "This is a black ball pen. This pen is really good"

var pattern = /pen/gi

// g -> global flag
// i -> case-insensitive flag

console.log(str.match(pattern))