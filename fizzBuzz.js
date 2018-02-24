// Write a program that prints the numbers from 1 to 100. If it’s a multiple of 3,
// it should print “Fizz”. If it’s a multiple of 5, it should print “Buzz”. If it’s
// a multiple of 3 and 5, it should print “Fizz Buzz”.

var array = []; // create an empty array
var number = 0;  // create counter to start at 0

// populate array with numbers 1-100

while (array.length < 100) {
    number = number + 1;
    array.push(number);
}

// iterate through array and print values

array.forEach( function (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log( number + " FizzBuzz!");
    } else if (number % 3 === 0) {
        console.log(number + " Fizz!");
    } else if (number % 5 === 0) {
        console.log(number + " Buzz!");
    } else {
        console.log(number);
    }
});
