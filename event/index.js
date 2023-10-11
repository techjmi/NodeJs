const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('Event emitted!');
});

myEmitter.emit('event');
