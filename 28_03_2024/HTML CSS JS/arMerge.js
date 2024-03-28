let ar1=[1, 2, 3, 4, 1, 2, 3, 4 ],ar2=[5, 6, 7, 8];

let mereged=ar1.concat(ar2);

// let unique=mereged.filter((val,index,self)=>self.indexOf(val)===index);

let unique=[...new Set(mereged)];

console.log(unique);