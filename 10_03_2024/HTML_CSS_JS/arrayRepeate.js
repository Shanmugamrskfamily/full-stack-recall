let ar=[10,2,3,9,9,10,2,3,9,10,3,9,2];

const findRepeat=(ar)=>{
    let counts={};

    ar.forEach(num => {

        if(counts[num]){
            counts[num]++
        }
        else{
            counts[num]=1;
        }
    });

    let output=[];
    for(let number in counts){
        output.push(`${number}:${counts[number]}`);
    }
    return output;
}

console.log(findRepeat(ar));