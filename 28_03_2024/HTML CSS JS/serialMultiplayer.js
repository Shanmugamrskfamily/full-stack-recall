const n=4;
const numbers=[4,5,7,2];

class serialMultiplayer{
    
    constructor(first=1,second=1,third=1,forth=1,fifth=1){
        this.first=first;
        this.second=second;
        this.third=third;
        this.forth=forth;
        this.fifth=fifth;
        this.result=this.first*this.second*this.third*this.forth*this.fifth;
    }

    toString(){
        return this.result.toString();
    }
}

function calculateMultiplay(n,numbers){

    if(n<1||n>5||numbers.length!==n){
        console.log('Invalid Input!');
        return;
    }

    let multiplayer;

    switch (n){

        case 1:
            multiplayer=new serialMultiplayer(numbers[0]);
            break;

        case 2:
            multiplayer=new serialMultiplayer(numbers[0],numbers[1]);
            break;

        case 3:
            multiplayer=new serialMultiplayer(numbers[0],numbers[1],numbers[2]);
            break;

        case 4:
            multiplayer=new serialMultiplayer(numbers[0],numbers[1],numbers[2],numbers[3]);
            break;

        case 5:
            multiplayer=new serialMultiplayer(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]);
            break;
    }

    return multiplayer.toString();
}

console.log(calculateMultiplay(n,numbers));