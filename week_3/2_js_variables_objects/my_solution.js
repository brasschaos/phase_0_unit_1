// I paired [by myself] on this challenge.




// Pseudocode
//  so just define the variables so it fits with with the checks? no problem
//  Define next variable so it satisfies the requirement. it tells what to set it to in the driver code


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ['John','Jim','Invisible_sweet-ass_blues_guitar_solo.jpg','Mary'];






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// I did what had to be done.
//
//
//  ..but seriously, I thought it looked pretty good, thats my original code no clean-ups.
//
//
//               however i added the solo.jpg part for fun once i realized it didnt check the third element at all
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
//  It looked intimidating, but the intimidating looking parts just turned out to be helpful to me
//  as far as testing my variables.
//  So often when I seek examples for help online the example code is still over my head.
//  
//   Again, looked complicated at first. Wasn't once I read it and ran it.
//  Starting to notice a personal trend of being like WHOA at first but at the end laughing at myself for
//  being so intimidated.
// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

