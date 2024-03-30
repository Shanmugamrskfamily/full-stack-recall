let str='Hello World!';

let reversed=str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');

console.log('Reversed:',reversed);