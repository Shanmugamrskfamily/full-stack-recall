let ar1=[1,5,6,10,12,1], ar2=[2,3,4,5,6,7,8,9]

const findCommon=(ar1,ar2)=>{
    let common=ar1.filter((num)=>ar2.includes(num));
    return common;
}

console.log(findCommon(ar1,ar2));