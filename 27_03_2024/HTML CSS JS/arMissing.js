let ar=[0,3,1];

const maxi=Math.max(...ar);

let missed=[];

for(let i=0;i<maxi;i++){
    if(ar.indexOf(i)==-1){
        missed.push(i);
    }
}

console.log('Missed Numbers:',missed);