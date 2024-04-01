let ar=[1,2,3,4];

let output= new Array(ar.length).fill(1);

let left=1;
for(let i=0;i<ar.length;i++){
    output[i]*=left;
    left*=ar[i];
}

let right=1;
for(let i=ar.length-1;i>=0;i--){
    output[i]*=right;
    right*=ar[i];
}

console.log(output);