let ar=[1,4,2];

const maxi=Math.max(...ar);

let missedNum=[];
for(let i=0;i<maxi;i++){
    if(missedNum.indexOf(i)==-1){
        missedNum.push(i);
    }
}

console.log('Missed Numbers:',missedNum);