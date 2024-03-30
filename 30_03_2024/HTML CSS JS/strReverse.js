let str='Hello World!';
let reversed=str.split(' ').map(w=>w.split('').reverse().join('')).join(' ');

console.log(reversed);