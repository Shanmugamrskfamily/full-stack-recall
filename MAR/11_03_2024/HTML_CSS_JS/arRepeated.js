let ar1=[1, 2, 2, 2, 3, 4, 5];

const repeated=(ar)=>{
    let common={};
    ar.forEach(num=>{
        if(common[num]){
            common[num]++;
        }
        else{
            common[num]=1;
        }
    });

    let ans=[];
    for(let number in common){
        ans.push(`${number}:${common[number]}`);
    }
    return ans;
}

console.log(repeated(ar1))
