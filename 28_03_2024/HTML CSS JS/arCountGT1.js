let ar=[4, 6, 2, 8, 9, 2, 6, 7, 6];

let count={};

ar.forEach(n=>{
    if(count[n]){
        count[n]++
    }
    else{
        count[n]=1;
    }
});

let res={};

for (let num in count) {
    if (count[num] > 1) {
        res[num] = count[num];
    }
}

console.log(res);