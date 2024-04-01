let obj={jack:"Three", jill: "Two",And:"one"};

let capsKey={};

Object.keys(obj).forEach((key)=>{
    capsKey[key.toUpperCase()]=obj[key];
});

console.log(capsKey);