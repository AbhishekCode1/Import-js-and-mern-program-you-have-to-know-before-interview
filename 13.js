// const a =5;
// const b= 10;
// console.log(a+b);

// At run time 

// Get values of a and b from command line arguments
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// enter like this  node 13.js 15 10

console.log("Sum of a and b:", a + b);

