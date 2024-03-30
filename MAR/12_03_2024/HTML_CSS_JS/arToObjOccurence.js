let ar=[4, 6, 2, 8, 9, 2, 6, 7, 6];

const findOccurence=(ar)=>{
    let count={};

    ar.forEach((num)=>{
        count[num]=(count[num]||0)+1;
    });
    
    return count;
}

console.log(`occurence of Obj: `,findOccurence(ar));