let ar=[3,4,3,5,3,6];
let counts={};

ar.forEach(num=>{
    if(counts[num]){
        counts[num]++
    }
    else{
        counts[num]=1;
    }
});

let occurence=[];

for(let num in counts){
    occurence.push(`${num}:${counts[num]}`);
}

console.log(occurence);