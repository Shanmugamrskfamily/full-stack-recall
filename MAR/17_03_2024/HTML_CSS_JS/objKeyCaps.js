let obj={jack:"Three", jill: "Two",And:"one"};
let newObj={};
for(let key in obj){
    newObj[key.toUpperCase()]=obj[key];
}
console.log(newObj);