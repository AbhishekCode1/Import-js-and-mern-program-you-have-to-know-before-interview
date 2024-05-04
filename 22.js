// temporat dead zone, let const declaration hoisted, syntaxerror vs refrence error, type error
 
console.log(b);
var b =10;   // it is possible
 
//but
console.log(b)
let b =190; // it is not possible -- uncaught refrence error
 
//
let b=10
console.log(b);
 
// var jaha par memory me allocate hota hai wo global ban jata hai
//but let and const memory allocate to karte hai but kahi aur store hote hai unko hum tabhi access kar skte hai jab unko value initialize karte hai
// is ke bich ki time ko temporal dead zone bolte hai
// if you try to access a variable in temporal dead zone it will gives you -- refrence error
//when js egine try to find out any value and it was not able to find it then we get refrence error
// syntax error means wrong javascript
//