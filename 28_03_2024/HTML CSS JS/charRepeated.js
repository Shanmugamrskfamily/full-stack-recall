let str='HelLo';

let newStr=str.toLowerCase();

let unique='';

for(let i=0;i<newStr.length;i++){
    if(unique.indexOf(newStr[i])==-1){
        unique+=newStr[i];
    }
}

console.log(unique);