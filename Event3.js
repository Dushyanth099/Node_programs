const EventEmitter = require("events");
const myEmitter = new EventEmitter();

//listeneer func 1=sayHi
const sayHi = () => {
  console.log("Hi user");
};

//listener func 2;sayHello
const sayHello = () => {
  console.log("Hello user");
};

//registering sayhi function as listener
myEmitter.on("userJoined", sayHi);

//registering sayHi func as listener
myEmitter.on("userJoined", sayHello);

//Emitting the event
myEmitter.emit("userJoined");

//          http Methods:
// GET=retrrive a resource from the server
// POST=inserts a resources in the server
// PUT=UPdates a existing resource in the server
// DELETE=Deletes a resource from the server