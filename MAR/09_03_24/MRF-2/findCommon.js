function findCommonElements(arr1, arr2) {

    const commonElements = arr1.filter(num => arr2.includes(num));

    return commonElements;
}

let array1 = [1, 2, 3, 4, 5],array2 = [3, 4, 5, 6, 7];
console.log("Common elements:", findCommonElements(array1, array2));
