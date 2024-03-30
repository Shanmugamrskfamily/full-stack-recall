let ar=[3,4,3,5,3,6];

function numOccurence(){
    let common={};

    ar.forEach(num=>{
        if(common[num]){
            common[num]++;
        }
        else{
            common[num]=1;
        }
    });
    let res=[];
    for(let num in common){
        res.push(`${num}:${common[num]}`);
    }
    console.log('Array Occurence: ', res);
}

numOccurence();