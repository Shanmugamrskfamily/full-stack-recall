class SerialMultiplier {
    constructor(first = 1, second = 1, third = 1, fourth = 1, fifth = 1) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
        this.fifth = fifth;
        this.result = this.first * this.second * this.third * this.fourth * this.fifth;
    }

    toString() {
        return this.result.toString();
    }
}

function calculateProduct(n, numbers) {
    if (n < 1 || n > 5 || numbers.length !== n) {
        console.error("Invalid input");
        return;
    }

    let multiplier;
    switch (n) {
        case 1:
            multiplier = new SerialMultiplier(numbers[0]);
            break;
        case 2:
            multiplier = new SerialMultiplier(numbers[0], numbers[1]);
            break;
        case 3:
            multiplier = new SerialMultiplier(numbers[0], numbers[1], numbers[2]);
            break;
        case 4:
            multiplier = new SerialMultiplier(numbers[0], numbers[1], numbers[2], numbers[3]);
            break;
        case 5:
            multiplier = new SerialMultiplier(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
            break;
    }

    return multiplier.toString();
}

const n = 3;
const numbers = [1,3,4];
console.log(calculateProduct(n, numbers));
