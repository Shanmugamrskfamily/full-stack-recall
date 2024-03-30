let obj={USD:1234, IMD:345};

let ar=Object.keys(obj).map((key,index)=>{
    return{
        id:key,
        value:obj[key],
        index:index
    }
});

console.log(ar);