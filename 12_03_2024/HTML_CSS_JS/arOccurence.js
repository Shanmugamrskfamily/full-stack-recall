let ar=[3,4,3,5,3,6];

const findoccurence=(ar)=>{
    let count={};

    ar.forEach(num=>{
        if(count[num]){
            count[num]++;
        }
        else{
            count[num]=1;
        }
    });

    let res=[];

    for(let num in count){
        res.push(`${num}:${count[num]}`);
    }
    return res;
}

console.log(`Array Occurence: `, findoccurence(ar));