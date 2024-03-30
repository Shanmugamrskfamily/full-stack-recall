let random=[1,4,5,6,7];

function randomMultiply(){
    if(random.length>5){
        console.log('Given Input Above 5 numbers!');
        return;
    }
    let res=random.reduce((acc,val)=>acc*val);
    console.log('Mulitplied Value: ',res);
}
randomMultiply();