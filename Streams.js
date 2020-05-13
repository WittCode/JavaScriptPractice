/*
Streams are better than just reading the file because you can access it in chunks.
In other words, in the FilReader you had to wait for the whole file to be stored in memory
before calling the callback function. Here it is split into individual chunks are stored in buffer before being sent. 
When the buffer is full it sends to the client. 
*/

const http = require('http');   //In a Node.JS based HTTP server, request is a readable stream and response is a writable stream.
const fs = require('fs');

//UTF-8 says that characters should be encoded in bytes.
var myReadStream = fs.createReadStream('FileToRead.txt').setEncoding('utf8');
var myWriteStream = fs.createWriteStream('FileToWriteTo.txt', 'utf8');

//Streams are event emitters, they emit several events at various points.
//When a chunk of data is available, the readable stream emits a data event and the callback executes.
myReadStream.on('data', function(chunk) {   //Listen for the event called data.
    console.log('new chunk received.');
    myWriteStream.write(chunk); //Write streams are also event emitters.
});

//This is another way to read from the stream. Readable event is emitted when a chunk of data can be read form the stream.
/*
myReadStream.on('readable', () => {
    while ((chunk=myReadStream.read()) != null)
        console.log(chunk);
});
*/

myReadStream.on('end', () => {
    console.log('No more data.');
});

//Piping is a process in which we provide the output of one stream as the input to another stream.
