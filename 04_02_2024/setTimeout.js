const myProgram = () => {
    console.log('Start');

    setTimeout(() => {
        console.log('Set Timeout Message');
    }, 3000);

    const interval = setInterval(() => {
        console.log('Interval message!');
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Cleared Interval!');
    }, 10000);
}

myProgram();
