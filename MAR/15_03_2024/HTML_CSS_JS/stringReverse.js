let string='Hello World!';

function reverseStr(){
let reversedStr=string.split('').reverse().join('');
console.log('Reversed String: ',reversedStr);
}

function reversedSententence(){
    let reversedString=string.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
    console.log('Reversed Sentence: ',reversedString);
}

reverseStr();
reversedSententence();