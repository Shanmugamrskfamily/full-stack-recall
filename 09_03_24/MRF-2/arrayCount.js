const countOccurrences = (arr) => {
    let counts = {};

    arr.forEach(number => {
        if (counts[number]) {
            counts[number]++;
        } else {
            counts[number] = 1;
        }
    });

    console.log(counts);

    let ans = [];
    for (let number in counts) {
        ans.push(`${number}:${counts[number]}`);
    }

    console.log(ans);
    console.log(Array.isArray(ans));
}

let numbers = [4, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1];
countOccurrences(numbers);
