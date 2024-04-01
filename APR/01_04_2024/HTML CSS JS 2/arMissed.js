let ar=[5,1,3];

let sorted=ar.sort((a,b)=>a-b);
let maxi=sorted[sorted.length-1];

let fullArray=Array.from({length:maxi+1},(_,i)=>i);

let missedNum=fullArray.filter(num=>!sorted.includes(num));

console.log(missedNum);