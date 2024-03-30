let  ar1= [1, 2, 3, 4, 1, 2, 3, 4 ], ar2= [5, 6, 7, 8];

const merged=ar1.concat(ar2);

const unique=merged.filter((val,index,self)=>self.indexOf(val)===index);

console.log('Merged and Unique:',unique);