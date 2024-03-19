let ar=[1,2,3,4];

let res=new Array(ar.length).fill(1);

console.log(res);

let left=1;
for(let i=0;i<ar.length;i++){
    res[i]*=left;
    left*=ar[i];
}

console.log(res);

let right=1;
for(let j=ar.length-1;j>=0;j--){
    res[j]*=right;
    right*=ar[j];
}

console.log(res);