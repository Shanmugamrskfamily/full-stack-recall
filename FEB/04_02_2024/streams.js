const fs = require('fs');

// Create a readable stream to read from input.txt
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to write to output.txt
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle errors
readableStream.on('error', (err) => {
  console.error('Error reading from input.txt:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing to output.txt:', err);
});

// Handle completion
writableStream.on('finish', () => {
  console.log('Data written to output.txt successfully.');
});
