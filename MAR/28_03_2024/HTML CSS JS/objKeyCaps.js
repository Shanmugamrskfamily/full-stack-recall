let obj = { jack: "Three", jill: "Two", And: "one" };

let capsKey = {};

for (let key in obj) {
    capsKey[key.toUpperCase()] = obj[key];
}

console.log(capsKey);
