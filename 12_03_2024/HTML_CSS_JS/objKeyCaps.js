let obj={jack:"Three", jill: "Two",And:"one"};

let keyObj={};

for(let key in obj){
    keyObj[key.toUpperCase()]=obj[key];
}

let valObj={};

for(let key in obj){
    valObj[key]=obj[key].toUpperCase();
}

console.log('Key Caps Obj: ',keyObj);
console.log('Value Caps Obj: ',valObj);