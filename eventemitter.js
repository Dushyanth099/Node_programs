const EventEmitter = require("events");
const myEmitter = new EventEmitter();

//listener funcion-welcomeUser()

const welcomeUser = () => {
  console.log("hi there,welcome to the server");
};

//listenening to the userJoined event ucsing the on() method
myEmitter.on("userJoined", welcomeUser);

//listenening to the userJoined event ucsing the emit() method
myEmitter.emit("userJoined");

//listener func 1;sayHello
const sayHello = () => {
  console.log("Heloo user");
};

//listener func 2;sayHi
const sayHi = () => {
  console.log("Hi user");
};

//listener func 3;greet Newyear
const greetNewYear = () => {
  console.log("Happy new year");
};

//Subcribing to userJoined event
myEmitter.on("userJoined", sayHello);
myEmitter.on("userJoined", sayHi);
myEmitter.on("userJoined", greetNewYear);

//emitting the userjoined event
myEmitter.emit("userJoined");

