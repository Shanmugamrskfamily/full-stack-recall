let ar=[12,4,5,3,5,6];

const sumArr=(ar)=>{
    return ar.reduce((acc,val)=>acc+val,0);
}

console.log(sumArr(ar));