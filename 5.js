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
  