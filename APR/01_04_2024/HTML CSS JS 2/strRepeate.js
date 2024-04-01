let str='hello';

let unique=Array.from(str).reduce((acc,char)=>!acc.includes(char)?acc+char:acc,'');

console.log(unique);