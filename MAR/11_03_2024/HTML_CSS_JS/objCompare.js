const obj1 = { a: 1, b: { c: 2 }, d: [3, 4] };
const obj2 = { a: 1, b: { c: 2 }, d: [3, 4] };

const compare=(obj1,obj2)=>{
    if(typeof obj1!=typeof obj2) return true;

    const key1=Object.keys(obj1);
    const key2=Object.keys(obj2);

    if(key1.length!==key2.length) return false;

    return key1.every(key=>compare(obj1[key],obj2[key]));
}

console.log(compare(obj1,obj2));