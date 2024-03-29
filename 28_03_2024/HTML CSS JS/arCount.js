let ar=[3,4,3,5,3,6];

let count={};

ar.forEach(num=>{
    if(count[num]){
        count[num]++;
    }
    else{
        count[num]=1;
    }
});

let output=[];

for(let num in count){
    output.push(`${num}:${count[num]}`);
}

console.log(output);


// 1. **Objective of the Program**:
//    - The objective of this program is to count the occurrences of each element in the given array `ar` and produce an output
//      showing each unique element along with its count.

// 2. **How the Logic is Implemented**:
//    - The program iterates through each element of the array `ar` using the `forEach()` method.
//    - Inside the loop, it checks if the current element (`num`) exists as a property in the `count` object.
//    - If the element exists in the `count` object, its count is incremented by 1; otherwise, a new property is created with the
//      current element as the key and its count initialized to 1.
//    - After counting the occurrences, the program creates an `output` array containing strings in the format `"element:count"`.
//    - Finally, it logs the `output` array to the console.

// 3. **Why this Logic is Implemented**:
//    - This logic is implemented to efficiently count the occurrences of each element in the array and present the results in a
//      readable format.

// 4. **Methods Used in the Program**:
//    - `forEach()`: Used to iterate over each element of the array.
//    - `push()`: Used to add elements to the end of an array.
//    - `console.log()`: Used to output the results to the console.

// 5. **Alternative Methods**:
//    - Instead of using an object (`count`) to store the counts, you could use a Map object or an array of objects where each object
//      contains the element and its count. Additionally, you could use methods like `reduce()` to achieve similar functionality.
