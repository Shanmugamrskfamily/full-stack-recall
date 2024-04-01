class seriesProduct{
    constructor(first=1,second=1,third=1,forth=1,fifth=1){
        this.first=first;
        this.second=second;
        this.third=third;
        this.forth=forth;
        this.fifth=fifth;
        this.result=this.first*this.second*this.third*this.forth*this.fifth;
    }

    getResult(){
        return this.result;
    }
}

function calculate(n,numbers){
    if(n<1||n>5||numbers.length!==n){
        return 'Invalid Input Range!';
    }

    let multiplayer;
    
    switch(n){
        case 1:
            multiplayer=new seriesProduct(numbers[0]);
            break;
        case 2:
            multiplayer=new seriesProduct(numbers[0],numbers[1]);
            break;
        case 3:
            multiplayer=new seriesProduct(numbers[0],numbers[1],numbers[2]);
            break;
        case 4:
            multiplayer=new seriesProduct(numbers[0],numbers[1],numbers[2],numbers[3]);
            break;
        case 4:
            multiplayer=new seriesProduct(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]);
            break;
    }

    return multiplayer.getResult();
}

let n=4;
let numbers=[1,3,4,2];

console.log(calculate(n,numbers));