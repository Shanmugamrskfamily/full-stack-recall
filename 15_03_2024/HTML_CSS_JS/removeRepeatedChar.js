let str='Hello';

function removeRepeatedChar(){
    let unique='';
    for(let i=0;i<str.length;i++){
        if(unique.indexOf(str[i])===-1){
            unique+=str[i];
        }
    }
    console.log('Removed Repeated Charactor: ',unique);
}

removeRepeatedChar();