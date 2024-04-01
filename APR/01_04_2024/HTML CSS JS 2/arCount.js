let ar=[4, 6, 2, 8, 9, 2, 6, 7, 6];

let counts={};
ar.forEach(num=>{
    if(counts[num]){
        counts[num]++;
    }
    else{
        counts[num]=1;
    }
});

let output=Object.keys(counts).map((num)=>`${num}:${counts[num]}`);

console.log(output);

console.log(counts);
