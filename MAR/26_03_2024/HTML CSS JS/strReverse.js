const str='Hello Wolrd!';

const reversed=str.split('').reverse().join('');

const reversedStr=str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');

console.log('Normal Reverse:',reversed);

console.log('Word Reverse:',reversedStr);