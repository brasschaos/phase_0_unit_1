//I want to make an array called oddLengthArray and have its elements range from 1 - 7 for a total of seven elements.
var oddLengthArray = [1,2,3,4,5,6,7];

//I want to make an array called evenLengthArray and have a total of eight elements, but the first two elements is the number 4, second two elements is the number 5, the next three elements is the number 6 and the last element is the number 7.
//So position 0 and 1 is 4, position 2 and 3 is 5, position 4, 5, and 6 is 6, and positon 7 is 7.
var evenLengthArray = [4,4,5,5,6,6,6,7];


//I want to create a function named assert. This function will have three parameters which are test, message, and test_number.
//Within the function assert there will be an if statement.
var assert = function(test, message, test_number) {

//The first part asks if it is NOT test then the console should log the parameter test_number plus a string of false.
//then it should throw a string of ERROR: plus the parameter message.
	if (!test) {
		console.log(test_number + " false");
		throw "ERROR: " + message;
	};

//Outside of that if statement you will log to the console the parameter test_number plus the string of true.
//then return true.
	console.log(test_number + " true");
	return true

//close out the assert function.
};

//Next we will call the assert function testing the sum.

//First test - call assert filling in the parameters.
//First parameter should be sum instanceof Function in parenthases.
//The second parameter should a string saying sum should be a Function.
//The third parameter should be a string saying 1. and a space.
assert(
	(sum instanceof Function), 
	"Sum should be a Function.", 
	"1 "
);

//Second test - call assert filling in the parameters
//First parameter should be sum with parameter of oddLengthArray being equal to the number 27.
//Second parameter should be the string sum should return the sum of all elements in an array with an odd length.
//Third parameter should be a string with 2. and a space
assert(
	sum(oddLengthArray === 27),
	"Sum should return the sum of all elements in an array with an odd length.",
	"2 "
);

//Third test- call assert ect
//First parameter is sum with parameter of evenLengthArray that is equal to 43
//Second parameter is a string of sum should return the sum of all elements in an array with an even length.
//Third parameter is string 3. with space
assert(
	sum(evenLengthArray === 43),
	"Sum should return the sum of all elements in an array with an even lenth",
	"3 "
);

//Fourth test- call assert testing for mean
//First parameter in parenthases is mean instanceof Function
//Second parameter is a string of mean should be a Function.
//Third parameter is string 4. with space
assert(
	(mean instanceof Function),
	"Mean should be a Function.",
	"4 "
);

//Fifth test - call assert
//First parameter is mean with a parameter of oddLengthArray that is equal to 3.857142857142857
//Second parameter is a string of mean should return the average of all elements in an array with an odd length.
//Third parameter is string 5. with space
assert(
	mean(oddLengthArray === 3.857142857142857),
	"Mean should return the average of all elements in an array with an odd lenth",
	"5 "
);

//Sixth test - 
//First parameter is mean with a parameter of evenLengthArray that is equal to 5.375
//Second parameter is a string of mean should return the average of all elements in an array with an even length.
//Third parameter is string 6. with space
assert(
	mean(evenLengthArray === 5.375),
	"Mean should return the average of all elements in an array with an even length",
	"6 "
);

//Seventh test - call assert testing for median
//First parameter in parenthases is median instanceof Function
//Second parameter is a string of median should be a Function
//Third parameter is string 7. with space
assert(
	(median instanceof Function),
	"Median should be a Function",
	"7 "
);

//Eighth test-
//First parameter is median with a parameter of oddLengthArray that is equal to 4
//Second parameter is a string of median should return the median value of all elements in an array with an odd length.
//Third parameter is string 8. with space
assert(
	median(oddLengthArray === 4),
	"Median should return the median value of all elements in an array with an odd lenth",
	"8 "
);

//Ninth test- 
//First parameter is median with a parameter of evenLengthArray that is equal to 5.5
//Second parameter is string of median should return the median value of all elements in an array with an even length
//Third parameter is 9. with space
assert(
	median(evenLengthArray === 5.5),
	"Median should return the median value of all elements in an array with an even lenth",
	"9 "
);

//PHEW -Allison
//INDEED! -Brian
