// program using Async await callback and promises
// Define a function that returns a promise to add two numbers
function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous operation with setTimeout
      setTimeout(() => {
        const sum = a + b;
        // Resolve the promise with the sum
        resolve(sum);
      }, 9000); // Simulate a delay of 1 second
    });
  }
  
  // Define an async function to use await
  async function performAddition() {
    try {
      // Await the result of the addAsync function
      const result = await addAsync(5, 3);
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  performAddition();
  


  //Another example of async await

  // Function that returns a promise which resolves after a given delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function using await
async function asyncExample() {
  console.log("Start");

  // Wait for 2 seconds
  await delay(2000);
  
  console.log("After 2 seconds");

  // Wait for 1 second
  await delay(1000);

  console.log("After another 1 second");

  return "Done";
}

// Using the async function
asyncExample().then(result => console.log(result));
