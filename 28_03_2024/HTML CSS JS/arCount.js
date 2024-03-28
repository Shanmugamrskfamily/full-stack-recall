let ar=[3,4,3,5,3,6];

let count={};

ar.forEach(n=>{
    if(count[n]){
        count[n]++;
    }
    else{
        count[n]=1;
    }
});

let res=[];

for(let n in count){
    res.push(`${n}:${count[n]}`);
}

console.log(res);