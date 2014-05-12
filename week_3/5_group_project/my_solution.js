// This is the refactored code I received from my group

var oddLengthArray = [1,2,3,4,5,6,7];

var evenLengthArray = [4,4,5,5,6,6,6,7];


var assert = function(test, message, test_number) {

	if (!test) {

		console.log(test_number + "false");

		throw "ERROR: " + message;

	};
	console.log(test_number + "true");

	return true

};

// add this:


var sum = function(array){

	var result = 0; for(i = 0; i<array.length; i++){result += array[i]}; return result;

}


var median = function(array) {array.sort (function(a,b){return a-b;}); if (array.length % 2 === 0) {

	return ((array[array.length/2-1] + array[array.length/2])/2).toFixed(1)}

else {return array[Math.round(array.length/2-1)]}

}


median(oddLengthArray)


var mean = function(array){return sum(array)/array.length}


// end


assert(

	(sum instanceof Function), 

	"Sum should be a Function.", 
	"1 "

);


// change this:


assert(
	(sum(oddLengthArray) === 28),

	"Sum should return the sum of all elements in an array with an odd length.",

	"2 "
);


assert(

	(sum(evenLengthArray) === 44),

	"Sum should return the sum of all elements in an array with an even lenth",

	"3 "
);


// end


assert(

	(mean instanceof Function),

	"Mean should be a Function.",
	"4 "

);


// change this:


assert(
	(mean(oddLengthArray) === 4),

	"Mean should return the average of all elements in an array with an odd lenth",

	"5 "
);


assert(

	(mean(evenLengthArray)=== 5.5),

	"Mean should return the average of all elements in an array with an even length",

	"6 "
);


// end


assert(

	(median instanceof Function),

	"Median should be a Function",
	"7 "

);


//change this:


assert(
	(median(oddLengthArray) === 4),

	"Median should return the median value of all elements in an array with an odd lenth",

	"8 "
);


assert(

	(median(evenLengthArray) === 5.5),

	"Median should return the median value of all elements in an array with an even lenth",

	"9 "
);

// end

// REFLECTION SECTION
//
// I did barely anything for the group in this challenge. I was sent code by person 3, as person 4.
// Person 5 probably wrote my portion of the code, because I was sent the above code by person 1 today.
// I wish i could have had more of a hand in the process, but i wouldnt say anyone else in the group did anything they werent supposed to.
// I missed where to learn my person # and they rightfully started without me knowing what was going on.
// I've mulled over this refactored code to pick up what I can, and it seems like something i could have totally helped with.
// Next time I intent to pull my weight.
//
//


