let ar=[3,0,1,6,9];
let sorted=ar.sort((a,b)=>a-b);
let maxi=Math.max(...sorted);
let res=[];
for(let i=0;i<maxi;i++){
    if(sorted.indexOf(i)==-1){
        res.push(i);
    }
}
console.log('Missed Numbers are: ',res);