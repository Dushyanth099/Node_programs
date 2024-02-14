const EventEmitter = require("events");
const myEmitter = new EventEmitter();

//Listener Function
const greetBirthday=(name,newAge)=>{
    console.log(`Happy Birthday ${name}.You are now ${newAge}`)
}

//listeneing to the birthday event
myEmitter.on("birthdayEvent",greetBirthday)

//emitting the birthdayEvent with some extra parameteres
myEmitter.emit("birthdayEvent","John",24)

