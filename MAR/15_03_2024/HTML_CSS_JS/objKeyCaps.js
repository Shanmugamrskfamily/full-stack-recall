let obj={jack:"Three", jill: "Two",And:"one"};

function keyCaps(){
    let keyObj={};
    for(let key in obj){
        keyObj[key.toUpperCase()]=obj[key].toLowerCase();
    }

    console.log('Key Caps OBJ: ',keyObj);
}

keyCaps();