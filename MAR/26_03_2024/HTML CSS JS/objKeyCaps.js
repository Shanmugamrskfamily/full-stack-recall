let obj={jack:"Three", jill: "Two",And:"one"};

let capsObj={};

for(let key in obj){
    capsObj[key.toUpperCase()]=obj[key];
}

console.log('Caps Obj:',capsObj);