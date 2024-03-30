let str='helLo woRld!';
const reversedChar=str.split('').reverse().join('');
const reversedStr=str.split(' ').map((word)=>word.split('').reverse().join('')).join(' ');
const caps=str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ');
console.log('Reversed Charactors:',reversedChar);
console.log('Reversed String:',reversedStr);
console.log('Caps: ',caps);