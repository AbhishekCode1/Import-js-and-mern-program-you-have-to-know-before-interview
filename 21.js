"use strict";
 
//in the gobal space
console.log(this); // globalobject -- window but in nodejs it will be global
// in the function
function nam(){
    console.log(this);  // if you are inside a function this keyword inside a function it depend on strict("use strict") and non strict mood.
    //the value will be  window in non strict mood and undefined in the stict mood
    // this substitution -- if the value of this keyword is undefined or null this will be replaced with global object only in non strict mood
}
nam(); // output- undefined in strict mood
window.nam(); // output - window object
 
// this inside a object's method
const obj={
    a:10,
    b: function(){ // b is the method of object obj....If you make a function as a part of object it is called method
     console.log(this)
    },
};
obj.b(); // output - {a:10, x:f} --whenever you are inside the method the value of this keyword is the object where this method is present
//this in arrow function
const ob={
    a:10,
    b: () =>{
     console.log(this)
    },
};
ob.b(); // output - window global object
 
//this inside nested arrow function
const obb ={
    a:10,
    x: function(){
        const y = () =>{
          console.log(this);
        }
        y();
    },
};
obb.x(); //output - {a:10, x:f}
 
// this keyword in DOM ===> refrence to HTML element