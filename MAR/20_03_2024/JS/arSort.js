let ar=[54,546,548,60];

if(ar.length>=1000||ar.length<=1){
    console.log('Array Length not in range between 1 to 1000');
    return;
}

for(let i=0;i<ar.length;i++){
    if(ar[i]>=100000||ar[i]<=1){
        console.log('Number is Not in Range between 1 to 100000!');
        return
    }
}

let sorted=ar.reverse();

let join=sorted.join(',').split(',').join('');

console.log(join);
