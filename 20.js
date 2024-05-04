const nam = {  
    firstname:"Abhishek",
    lastname:"Singh",
   
}
const printFullName= function(hometown, state) { 
    console.log(this.firstname+" "+ this.lastname +"from"+hometown+"state"+state );
}
printFullName.call(nam, "in","up"); // invoke method

const nam2 ={
    firstname:"Shivam",
    lastname:"gupta",
}

//call method borrow the function
printFullName.call(nam2, "Mumbai","MH");

//bind method
printFullName.apply(nam2, ["Mumbai","MH"]);

// bind method keep the copy of method and invoke it later
let a = printFullName.bind(nam2, "Mumbai","MH");  // copy of method and it's a function
console.log(a);
a();