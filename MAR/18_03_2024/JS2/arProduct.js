let ar = [1, 2, 3, 4];
function productExceptSelf(ar) {
    const output = new Array(ar.length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < ar.length; i++) {
        output[i] *= leftProduct;
        leftProduct *= ar[i];
    }

    let rightProduct = 1;
    for (let i = ar.length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= ar[i];
    }
    console.log(output);
}

productExceptSelf(ar);