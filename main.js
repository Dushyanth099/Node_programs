//blocking the code
var fs = require("fs"); //fs-file server
var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("Program ended");
