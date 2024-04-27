// Given string
// let str = "SiNgH";
// let str = process.argv[2]; if you want value on run time and enter value like this node 11.js "AbHiSheK"
var indexes = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') { 
        // str.lengh =5
    // Inside the loop, we check if the character is a capital letter by comparing it with 'A' and 'Z'.
    //  If it is, we push its index to the indexes array.
      indexes.push(i);
    }
  }
//   return indexes;  
// The return statement is used to exit the current function and return a value.
//  In your case, you're not inside a function, so using return will cause a syntax error.

  console.log("Indexes of capital alphabets", indexes);