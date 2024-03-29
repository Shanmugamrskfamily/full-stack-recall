let ar1=[1, 2, 2, 2, 3, 4, 5],ar2=[1, 2, 4, 5];

let common=ar1.filter(num=>ar2.includes(num));

let unique=common.filter((val,index,self)=>self.indexOf(val)===index);

console.log(unique);


// 1. **Objective of the Program**:
//    - The objective of this program is to find the common elements between two arrays (`ar1` and `ar2`) and then filter out the
//      duplicates from the common elements.

// 2. **How the Logic is Implemented**:
//    - First, the `filter()` method is used on `ar1` to filter out elements that are present in `ar2`. This is achieved by using the
//     `includes()` method within the filter function.
//    - Then, another `filter()` method is applied to the `common` array to filter out duplicate values. This is done by checking if
//      the index of the current element is the same as the first occurrence of that element (`self.indexOf(val) === index`).

// 3. **Why this Logic is Implemented**:
//    - The logic is implemented to find the common elements between two arrays and ensure that each common element appears only
//      once in the final result.

// 4. **Methods Used in the Program**:
//    - `filter()`: Used to create a new array with all elements that pass the test implemented by the provided function.
//    - `includes()`: Used to check if an array contains a certain element.
//    - `indexOf()`: Used to get the index of the first occurrence of a specified value in an array.

// 5. **Alternative Methods**:
//    - Instead of using nested `filter()` functions, you could use other array methods like `forEach()` or a combination of `filter()`
//      and `indexOf()` to achieve the same result. For instance, you could iterate over `ar1` using `forEach()` and check if each
//      element exists in `ar2` using `indexOf()`, and then filter out duplicates similarly.