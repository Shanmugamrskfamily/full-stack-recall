let str='wwwe';

let unique='';

for(let i=0;i<str.length;i++){
    if(unique.indexOf(str[i])===-1){
        unique+=str[i];
    }
}

console.log('String Without Repeated Charactor:',unique);