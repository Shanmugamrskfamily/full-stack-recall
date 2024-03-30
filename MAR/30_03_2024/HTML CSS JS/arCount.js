let ar=[3,4,3,5,3,6];

let count={};

ar.forEach(num=>{
    if(count[num]){
        count[num]++;
    }
    else{
        count[num]=1;
    }
});

let output=[];

for(let num in count){
    output.push(`${num}:${count[num]}`);
}

console.log(output);