/*
This program practices the use of callbacks. ReadFileSync is synchronous while
readFile is asynchronous. WriteFileSync is synchronous while writeFile is 
asynchronous. JavaScript execution in Node.js is single threaded. However, the external libraries
written in C or C++ can spawn threads all they want. If loading data takes a long
time (maybe streaming it off the internet), then the whole program will block. 
*/

const fs = require('fs'); //This is a core Node.JS module and stands for File System.

//Encoding is used because it will be read as 0 and 1s. What do these 0s and 1s mean?
var readFile = fs.readFileSync('FileToRead.txt', 'utf8');   //Sync means it's synchronous. Won't execute code below until this is done.

console.log(readFile);  //Write file contents to the console.

fs.writeFileSync('FileToWrite.txt', readFile);   //Write the contents of readFile to the specified text document.

/*
Synchronous program could take a long time to perform a task which 'blocks' the program.
Blocking is when the execution of additional JavaScript in the Node.js process must wait utnil a
non-JavaScript operation completes. Methods that have blocking counterparts have names that end with Sync.
Note that in the synchronous version if an error is thrown it will need to be caught or the process will crash.
*/

//Usning an arrow function here. Same as function(err, data) {...}
fs.readFile('FileToRead.txt', 'utf8', (err, data) => {  //Asynchronous version. Non-blocking.
    if (err) throw err;
    console.log(data);
});
console.log('I run before read file above.');

