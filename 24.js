// Define a constructor function
function prson(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the prototype
  prson.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  // Create instances of the prson object
  var prson1 = new prson("Alice", 30);
  var prson2 = new prson("Bob", 25);
  
  // Call the method defined in the prototype
  prson1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  prson2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
  