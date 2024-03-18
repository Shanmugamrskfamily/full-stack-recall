let str='Hello World!';
const reversedChar=str.split('').reverse().join('');
const reversedStr=str.split(' ').map((word)=>word.split('').reverse().join('')).join(' ');
console.log('Reversed Charactors:',reversedChar);
console.log('Reversed String:',reversedStr);