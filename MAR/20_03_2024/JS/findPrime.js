const number = 2;

function isPrime(num){
    if(num<=1){
        return false;
    }

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true;
}

if(isPrime(number)){
    console.log('Yes');
}
else{
    console.log('No');
}