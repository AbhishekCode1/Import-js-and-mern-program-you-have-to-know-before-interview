// let number = 10;

// if (number % 2 === 0) {
//   console.log(number + " is even.");
// } else {
//   console.log(number + " is odd.");
// }

// At run time

// Get user input from command line arguments
const number = process.argv[2];

// Convert the input to a number
const parsedNumber = parseInt(number);
// node 15.js 150 enter like this


  if (parsedNumber % 2 === 0) {
    console.log(parsedNumber + " is even.");
  } else {
    console.log(parsedNumber + " is odd.");
  }


