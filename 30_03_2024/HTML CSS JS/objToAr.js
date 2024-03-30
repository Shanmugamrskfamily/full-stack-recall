let obj = {USD: 1234, IMD: 345};

let ar = [];

Object.keys(obj).forEach((key,index)=>{
    ar.push({id:key,value:obj[key],index:index});
})

console.log(ar);
console.log(Array.isArray(ar));
console.log(typeof(ar));