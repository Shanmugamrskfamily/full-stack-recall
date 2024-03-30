let ar=[6,1,3,5,0];

let missedNumbers=(ar)=>{
    let sorted=ar.sort((a,b)=>a-b);
    let max=Math.max(...sorted);
    let missedNum=[];
    for(let i=0;i<max;i++){
        if(sorted.indexOf(i)==-1){
            missedNum.push(i);
        }
    }
    return missedNum;
}

console.log(missedNumbers(ar));