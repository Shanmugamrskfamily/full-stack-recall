let ar=[4, 6, 2, 8, 9, 2, 6, 7, 6];

let count={};

ar.forEach(num=>{
    if(count[num]){
        count[num]++;
    }
    else{
        count[num]=1;
    }
});

let output={};

for(let num in count){
    if(count[num]>1){
        output[num]=count[num];
    }
}

console.log(output);