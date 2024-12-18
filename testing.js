// event emitter is a class in node js that helps us to create our own custom events

/* const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("Time for lunch");
});

eventEmitter.emit("lunch"); */

//read file
//sync means blocking, blocking means it needs to finish the current task before moving to the next task

/* const { readFile, readFileSync } = require("fs");

const txt = readFileSync("./random.txt", "utf8"); //blocking meaning this will finish before moving to the next task

console.log(txt);

readFile("./random.txt", "utf8", (err, txt) => {
  //non-blocking meaning it will move to the next task before finishing the current task
  if (err) return console.log(err);
  console.log(txt);
});

console.log("stuff"); */

const { readFile } = require("fs").promises;

async function read() {
  const txt = await readFile("./random.txt", "utf8");
  console.log(txt);
}

read();
