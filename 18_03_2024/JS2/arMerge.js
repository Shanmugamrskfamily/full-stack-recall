let ar1= [1, 2, 3, 4, 1, 2, 3, 4 ],ar2= [5, 6, 7, 8];

const merge=ar1.concat(ar2);

const unique=merge.filter((val,index,self)=>self.indexOf(val)===index);

console.log('Merged Array: ',unique);