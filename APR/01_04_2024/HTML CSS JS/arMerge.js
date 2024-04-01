let ar1= [1, 2, 3, 4, 1, 2, 3, 4 ],ar2= [5, 6, 7, 8];

let merged=ar1.concat(ar2);

let unique=merged.filter((val,index,ar)=>ar.indexOf(val)===index);

console.log(unique);