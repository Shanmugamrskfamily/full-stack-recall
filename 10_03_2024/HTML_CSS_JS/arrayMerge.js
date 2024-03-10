let ar1=[1,5,6,10,12,1], ar2=[2,3,4,5,6,7,8,9]

const mergedArr=(ar1,ar2)=>{
    let merged=ar1.concat(ar2);
    let duplicates=merged.filter((num,index)=>merged.indexOf(num)===index);
    let sorted=duplicates.sort((a,b)=>a-b);
    return sorted;
}

console.log(mergedArr(ar1,ar2));