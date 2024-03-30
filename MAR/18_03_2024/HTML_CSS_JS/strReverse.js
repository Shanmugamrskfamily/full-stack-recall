let str='Hello World!';
let reversedStr=str.split('').reverse('').join('');
let reversedSentence=str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');

console.log(reversedStr);
console.log(reversedSentence);