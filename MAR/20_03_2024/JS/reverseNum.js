let num=1000;

if(num>=10000||num<=1){
    console.log('Given Number Not in Range between 1 to 10000');
    return;
}

let reversedNum=parseInt(num.toString().split('').reverse().join(''));

console.log(reversedNum);