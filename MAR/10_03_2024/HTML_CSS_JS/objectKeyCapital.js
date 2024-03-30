let input={jack:"Three", jill: "Two",And:"one"};

const keyCaps=(obj)=>{
    let newObj={};
    
    for(let key in obj){
        let capital=key.charAt(0).toUpperCase()+key.slice(1).toLowerCase();
        newObj[capital]=obj[key];
    }
    return newObj;
}

console.log(keyCaps(input));