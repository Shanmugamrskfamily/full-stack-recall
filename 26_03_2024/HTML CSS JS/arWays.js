const n=5;
function ways(n){
    if(n===0||n===1){
        return 1;
    }
    else{
        return ways(n-1)+ways(n-2);
    }
}
console.log('No Ways:',ways(n));