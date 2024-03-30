class seriesMultiplay{
    constructor(first=1,second=1,third=1,forth=1,fifth=1){
        this.first=first;
        this.second=second;
        this.third=third;
        this.forth=forth;
        this.fifth=fifth;
        this.result=this.first*this.second*this.third*this.forth*this.fifth;
    }
    ans(){
        return this.result;
    }
}

function calculateMutiplay(n,numbers){
    if(n<1||n>5||n!==numbers.length){
        return 'Invalid Input!';
    }

    let multiplayer;

    switch (n){
        case 1:
            multiplayer=new seriesMultiplay(numbers[0]);
            break;
        case 2:
            multiplayer=new seriesMultiplay(numbers[0],numbers[1]);
            break;
        case 3:
            multiplayer=new seriesMultiplay(numbers[0],numbers[1],numbers[2]);
            break;
        case 4:
            multiplayer=new seriesMultiplay(numbers[0],numbers[1],numbers[2],numbers[3]);
            break;
        case 5:
            multiplayer=new seriesMultiplay(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]);
            break;
    }

    return multiplayer.result;
}

let n=4;
let numbers=[4,5,7,2]

console.log(calculateMutiplay(n,numbers));