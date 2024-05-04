// const nam = {  // this is object and it has two property firstname and lastname
//     firstname:"Abhishek",
//     lastname:"Singh",
//     printFullName: function() { // printfullname is method
//         console.log(this.firstname+" "+ this.lastname );
//     }
// }
// nam.printFullName(); // invoke method

// const nam2 ={
//     firstname:"Shivam",
//     lastname:"gupta",
// }

// //call method borrow the function
// nam.printFullName.call(nam2);

// Second way

const nam = {  
        firstname:"Abhishek",
        lastname:"Singh",
       
    }
const printFullName= function() { 
        console.log(this.firstname+" "+ this.lastname );
    }
    printFullName.call(nam); // invoke method
    
    const nam2 ={
        firstname:"Shivam",
        lastname:"gupta",
    }
    
    //call method borrow the function
    printFullName.call(nam2);
    

