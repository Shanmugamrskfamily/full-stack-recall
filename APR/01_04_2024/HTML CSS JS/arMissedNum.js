let ar = [5, 0, 2];
let sorted = ar.sort((a, b) => a - b);
let maxNum = sorted[sorted.length - 1];

let fullArray=Array.from({length:maxNum+1},(_,i)=>i);

let missedNum=fullArray.filter((num)=>!sorted.includes(num));

let missed=[];
for(let i=0;i<maxNum;i++){
    if(sorted.indexOf(i)===-1){
        missed.push(i);
    }
}

console.log(missed);
console.log(missedNum);