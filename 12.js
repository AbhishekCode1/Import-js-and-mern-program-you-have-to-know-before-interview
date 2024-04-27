// Given string
// let str = "SiNgH";
let str = process.argv[2]; 
// for run time and enter value like this node 12.js "AbHiSheK"

// Reverse the string
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
 // reversedStr += str[i];
 reversedStr = reversedStr + str[i];
}
// += is the concatenation assignment operator in JavaScript. 
// It is used to concatenate (or join) the value of the right operand (str[i]) to the value of the left operand (reversedStr) and then assign the result back to the left operand (reversedStr).
// Output the reversed string
console.log(reversedStr); // This will output: HgNiS
