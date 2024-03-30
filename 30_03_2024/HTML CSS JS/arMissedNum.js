let ar=[0,5,1];

let sorted=ar.sort((a,b)=>a-b);

let maxi=Math.max(...sorted);

let missed=[];

for(let i=0;i<maxi;i++){
    if(sorted.indexOf(i)==-1){
        missed.push(i);
    }
}

console.log(missed);