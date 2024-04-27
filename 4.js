// Call back in node js


// Define a function that takes two numbers and a callback function
function add(a, b, callback) {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
      const result = a + b;
      // Call the callback function with the result
      callback(result);
    }, 1000); // Simulate a delay of 1 second
  }
  
  // Callback function to handle the result
  function handleResult(result) {
    console.log('Result:', result);
  }
  
  // Call the add function with two numbers and the callback function
  add(5, 3, handleResult);
  