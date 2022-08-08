
// ADD EVENTS TO USE IN THIS FILE
import { EventEmitter } from 'node:events';
// const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => { // A 'WATERFULL' EVENT IS CREATED
  console.log('please turn off the motor'); // IF THE EVENT IS FIRED, THEN THIS LINE WILL EXECUTE
  setTimeout(() =>{
    console.log('A gentle reminder,  please turn off the motor')
  }, 3000)
});

console.log('The script is running')

// "WATERFULL" EVENT WILL ONLY WILL FIRED IF THIS LINE EXECUTES:
myEmitter.emit('WaterFull'); // FIRING OF 'WATERFULL' EVENT

console.log('The script is still running')

myEmitter.emit('WaterFull'); // FIRING OF 'WATERFULL' EVENT
