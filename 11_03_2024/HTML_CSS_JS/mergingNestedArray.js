const nestedAr=[1, [2, [3, 4], 5], 6, [7, 8]];

const mergingAr=(nestedAr)=>{
    return nestedAr.reduce((acc,val)=>Array.isArray(val)?acc.concat(mergingAr(val)):acc.concat(val),[]);
}

console.log(mergingAr(nestedAr));