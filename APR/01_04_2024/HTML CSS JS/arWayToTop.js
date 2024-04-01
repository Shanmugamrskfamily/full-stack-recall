let num=5;

function wayToTop(n){
    if(n===0||n===1){
        return 1;
    }

    else{
        return wayToTop(n-1)+wayToTop(n-2);
    }
}

console.log(wayToTop(num));