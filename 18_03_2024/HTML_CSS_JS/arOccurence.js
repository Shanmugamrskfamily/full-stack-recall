let ar=[4,3,1,5,3,4,7,1];

let count={};

ar.forEach(num=>{
    if(count[num]){
        count[num]++
    }
    else{
        count[num]=1;
    }
});

let occurence=[];

for(let num in count){
    occurence.push(`${num}:${count[num]}`);
}

console.log(occurence);