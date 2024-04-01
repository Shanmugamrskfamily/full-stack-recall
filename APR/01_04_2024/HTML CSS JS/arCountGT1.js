let ar=[4, 6, 2, 8, 9, 2, 6, 7, 6];

let counts={};

ar.forEach((num)=>{
    if(counts[num]){
        counts[num]++;
    }
    else{
        counts[num]=1;
    }
});

let output=Object.keys(counts).filter((num)=>counts[num]>1).map((num)=>`${num}:${counts[num]}`);

let res={};

for(let num in counts){
    if(counts[num]>1){
        res[num]=counts[num];
    }
}

console.log(output);

console.log(res);