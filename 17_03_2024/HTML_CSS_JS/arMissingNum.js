let ar=[0,1,3];
let maxi=Math.max(...ar);
let missed=[];
for(let i=0;i<maxi;i++){
    if(ar.indexOf(i)==-1){
        missed.push(i)
    }
}
console.log(missed);