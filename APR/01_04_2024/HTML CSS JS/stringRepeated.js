let str='hello';
let unique='';

for(let i=0;i<str.length;i++){
    if(unique.indexOf(str[i])===-1){
        unique+=str[i];
    }
}

console.log(unique);

let out=Array.from(str).reduce((acc,char)=>!acc.includes(char)? acc+char:acc);

console.log(out);