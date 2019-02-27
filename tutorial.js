// in line comment
/* multi line comment

*/

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Joe";

myName = 5;

let ourName = "losers";

const pi = 3.14;

/*
var can be used anywhere in the whole program
let can only be used in the place it is defined in
const can never be changed
*/

var a;
var b = 2;
console.log(a)
a = 7;
b = a;

console.log(a)

// ---------------------

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String";
console.log(a)
console.log(b)
console.log(c)

// ------------------------
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//--------------------------------------
var sum = 10 + 10;
console.log(sum)

// Increment numbers
var myVar = 87;
myVar++;

// Decrement number
var myVar = 11;
myVar--;

// Floats
var ourDecimal = 5.7;

// Remainder
var remainder;
remainder = 11 % 3;
console.log(remainder)

// addition shortcuts
/* instead of typing
a = a + 12;
type */
var a = 5;
a += 12;
console.log(a);
a -= 2;
console.log(a);
a *= 2;
console.log(a);
a /= 10;
console.log(a)

// Strings
var myFirstName = "Stupid";
var myLastName = "Idiot";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
var myStr = 'I am a "double quoted" string inside "single quotes"';

/*
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/
var myStr = "firstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)

//Concatenate Strings
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end.";
console.log(myStr)

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

var myName = "Moron";
var myStr = "My name is " + myName + " and I am fat";
console.log(myStr);

var someAdjective = "fat";
var myStr = "Austin is ";
myStr += someAdjective;
console.log(myStr);

// find length of String
var firstNameLength = 0;
var firstName = "Austin";
firstNameLength = firstName.length;
console.log(firstNameLength);
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);
