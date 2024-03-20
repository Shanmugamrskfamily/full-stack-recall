let str='codecode';

function strReverse(){
if(str.length>=100||str.length<=1){
    console.log('String Length Not in range between 1 to 100');
    return;
}

if(str!==str.toLocaleLowerCase()){
    console.log('Given String Not in Lowercase!');
    return;
}
let reversed=str.split('').reverse().join('');
console.log(reversed);
}
strReverse();