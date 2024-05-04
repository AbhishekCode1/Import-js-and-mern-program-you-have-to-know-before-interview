//EventEmitter Class: The EventEmitter class is used to bind event listeners to named events and emit events when certain actions occur.
const EventEmitter = require('events'); // EventEmitter is a class
//Creating Custom Event Emitters
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Listening for Events: You can listen for events by using the on method or its alias addListener. 
// You specify the event name as the first argument and the event handler function as the second argument:
myEmitter.on('myEvent', () => {
    console.log('Event occurred!');
});
// Emitting Events: You can emit events using the emit method. 
// This triggers all the listeners attached to that particular event
myEmitter.emit('myEvent');
// Once and RemoveListener: You can use the once method to listen for an event only once.
//  You can remove event listeners using the removeListener method:
function myEventHandler() {
    console.log('Event handled!');
}

myEmitter.on('myEvent', myEventHandler);

// Remove listener after handling the event once
myEmitter.once('myEvent', myEventHandler);

// Remove listener
myEmitter.removeListener('myEvent', myEventHandler);
//Asynchronous Event Handling: Event listeners are executed asynchronously, allowing for non-blocking event handling
myEmitter.on('asyncEvent', async () => {
    await someAsyncFunction();
    console.log('Async event handled!');
});

myEmitter.emit('asyncEvent');
