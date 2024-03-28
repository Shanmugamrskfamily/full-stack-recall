let str='Hello Guvi!';

let reversed=str.split(' ').map(w=>w.split('').reverse().join('')).join(' ');

console.log(reversed);