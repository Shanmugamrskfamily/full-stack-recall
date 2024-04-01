let obj={USD:1234, IMD:345};

let ar=[];

Object.keys(obj).forEach((key,index)=>{
    ar.push({id:key,value:obj[key],index:index});
});

console.log(ar);

let ar2=Object.keys(obj).map((key,index)=>{
    return{
        id:key,
        value:obj[key],
        index:index
    }
});

console.log(ar2);