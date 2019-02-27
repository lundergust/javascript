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
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

//madlibs
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store"
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("boy Richard", "tiny", "walked", "slowly"));


// arrays
var ourArray = ["James", 23];
console.log(ourArray[0]);
console.log(ourArray[1]);
// nested arrays
var ourArray = [["Towns", 42],["Wiggins", 22]];
console.log(ourArray[0]);
console.log(ourArray[1][0]);
//modify arrays
ourArray[1][0] = "Okogie";
ourArray[1][1] = 20;
console.log(ourArray);
// adding elements to arrays with push
ourArray.push(["Gibson", 67]);
console.log(ourArray);
// remove item from array with pop
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray);
//remove first iem with shift
removedFromOurArray = ourArray.shift();
console.log(ourArray);
// unshift
ourArray.unshift(["Teague", 0]);
console.log(ourArray);

// FUNCTIONS

function ourReuusableFunction () {
  console.log("Hello World");
}
ourReuusableFunction();

function ourFunctionWithArgs(a,b) {
  console.log(a-b);
}
ourFunctionWithArgs(10,5);

// Global scope and function

var myGlobal = 10;
function fun1() {
  // assign 5 to oopsGlobal here
  // must have var before oops global for fun2 to work sicne its defined in a function
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

// global vs local in functions

var outerWear = "Shirt"

function myOutfit() {
  var outerWear = "Sweater"
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

function timesFive(num) {
  return num*5;
}
console.log(timesFive(5));

// understanding undefined
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}
addFive();
console.log(sum);
console.log(addFive()); // returns undefined

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

// Queue

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


// booleans
function welcomeToBooleans() {
  return false;
}

//conditional logic if statement

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(true));

// equality
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));


// strict equality does not do type conversion
/*
3 === 3  is true
3 === '3'  is false since its a string
*/

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict('7'));

function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10,'19'));


// inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

//strict inequality

function testNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual('17'));

// greater than
function testGreaterThan(val) {
  if (val > 100) {
    return "over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or under";
}
console.log(testGreaterThan(10));


// greater than or equal to
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or over";
  }
  if (val >= 10) {
    return "10 or over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(10));


// and operator

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10));


// or operator

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside:";
  }
  return "Inside";
}
console.log(testLogicalOr(15));


// else statements

function testElse(val) {
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}
console.log(testElse(2));


// else if

function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(7));


// golf CODE

var names = ["Hole in One", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  }
  return names[6];
  }
console.log(golfScore(4,8));


// switch statements

function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(3));


// default option in switch statements

function switchOfStuff(val) {
  var answer = "";
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff(2));


// multiple identical options in switch statements
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
console.log(sequentialSizes(6));


// change else if chain to switch.

function startingLineup(val) {
  var answer = "";
  switch(val) {
    case  "pg":
      answer = "Teague";
      break;
    case "sf":
      answer = "Wiggins";
      break;
    case "sg":
      answer = "Covington";
      break;
    case "pf":
      answer = "Gibson";
      break;
    case "c":
      answer = "Towns";
      break;
  }
  return answer;
}
console.log(startingLineup("c"));


// return booleans from FUNCTIONS
// this works because all comparison operators return boolean
function isLess(a,b) {
  return a < b;
}
console.log(isLess(10,15));


// return early from FUNCTIONS

function abTest(a,b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2));


// counting cards

var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}
cc(2); cc(10); cc("K"); cc("A");
console.log(cc(4));


// build javascript objects
var timberwolves = {
  "pg": "Teague",
  "sg": "Covington",
  "sf": "Wiggins",
  "pf": "Gibson",
  "c": "Towns",
  "bench": ["Rose","Okogie","Tolliver"],
  "head coach": "Thibodeau"
};
var sixthMan = timberwolves.bench[0];
console.log(sixthMan);
var headCoach = timberwolves["head coach"];
console.log(headCoach);


// acessing objects with variables
var numbers = {
  0: "Teague",
  33: "Covington",
  22: "Wiggins",
  67: "Gibson",
  32: "Towns"
};
var playerNumber = 22;
var player = numbers[playerNumber];
console.log(player);


// updating object properties
timberwolves["head coach"] = "Saunders";
console.log(timberwolves);

// adding properties
timberwolves.stadium = "Target Center";
console.log(timberwolves);
numbers[25] = "Rose";
console.log(numbers);

// delete property from object
delete timberwolves.sg;
console.log(timberwolves);


// using objects for lookups like a dictionary

var lookup = {
  "DEN": "Denver",
  "BOS": "Boston",
  "CHI": "Chicago",
  "MIN": "Minnesota"
};

function triCodeLookup(val) {
  var result = "";
  result = lookup[val];
  return result;
}
console.log(triCodeLookup("CHI"));


// testing objects for properties
function checkObj(checkProp) {
  if (lookup.hasOwnProperty(checkProp)) {
    return lookup[checkProp];
  } else {
    return "Team Not Found"
  }
}
console.log(checkObj("NYK"));


// manipulating complex objects
var teams = [
  {
    "pg": "Curry",
    "sg": "Thompson",
    "sf": "Durant",
    "pf": "Green",
    "c": "Cousins",
    "bench": ["Livingston", "Igudaloa"],
    "coach": "Kerr"
  },
  {
    "pg": "Irving",
    "sg": "Brown",
    "sf": "Hayward",
    "pf": "Tatum",
    "c": "Horford",
    "bench": ["Smart", "Rozier"],
    "coach": "Stevens"
  }
];


// accessing nested objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myPlants = [
  {
    type: "flowers",
    lsit: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      'fir',
      'pine',
      'birch'
    ]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

// Coding Challenge

var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "aritst": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

// keep a copy of collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop]
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));



// while loops
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// for loops
var ourArray = [];

for (var i = 1; i < 6; i++) {
  ourArray.push(i);
}
console.log(ourArray);


// iterate odd numbers with for loops
var oddArray = [];
for (var i = 1; i < 10; i += 2) {
  oddArray.push(i);
}
console.log(oddArray);


// count backwards with for loops
var backArray = [];
for (var i = 10; i > 0; i -= 2) {
  backArray.push(i);
}
console.log(backArray);


// iterate through arrays

var itArr = [ 9, 10, 11, 12];
var itTotal = 0;

for (var i = 0; i < itArr.length; i++) {
  itTotal += itArr[i];
}
console.log(itTotal);


// nesting for loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);


// do while loops
// do always does this first even if while isnt satisfied

var doArray = [];
var i = 10;
do {
  doArray.push(i);
  i++;
} while (i < 5)
console.log(i, doArray)


// profile lookup coding Challenge
var contacts = [
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "likes": ["Hogwarts","Magic","Ginny"]
  },
  {
    "firstName": "Ron",
    "lastName": "Weasley",
    "likes": ["Rats", "Chess"]
  }
];


function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || " No such property";
    }
  }
  return "No such contact"
}

var data = lookUpProfile("Harry", "likes");
var data2 = lookUpProfile("Hermione", "likes");
console.log(data);
console.log(data2);


// create random fraction

function randomFranction() {
  return Math.random();
}
console.log(randomFranction());

// create random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

// whole random numbers in a range

function randomRange (myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5,15);
console.log(myRandom);

// integer to stringify
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

// use parseInt with a radix
function convertToInt(str) {
  return parseInt(str,2)
}
console.log(convertToInt("10011"));


// conditional ternary operator
// condition ? statement-if-true : statement-if-false
// there is no need for this code since return a === b will return true or false anyway
function checkEqual(a, b) {
  return a === b ? true : false;
}


// multiple ternary operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-90));


// difference between var and Let
/* cannot do This
  let name = Joe
  let name = austin

  but can do This
  var name = Joe
  var name = Austin

  and can do This
  let name = Joe
  name = austin

  can sometimes write "use stict"; at beginning to catch mistakes for not declaring variables

  */
// var is declared globally or locally
// let is only local
// for example

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

// read only variables with const
// use all caps when declaring constants
// this means you cannot do This
/*
const SENTENCE = "this is cool"
SENTENCE = "this is awesome"

^^ this will return an error saying SENTENCE is read only!

*/
// you can mutate an array with constant, but cannot redeclare it

const s = [5,7,2];
function editInPlace () {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);


// object.freeze prevents data mutation

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// use arrow functions to write concise anonymous FUNCTIONS
// this can be shortened
/*
var magic = function() {
  return new Date();
};
*/

const magic = () => new Date();

// write arrow functions with parameters
//this changes to
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1,2],[3,4,5]));

// This
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));
