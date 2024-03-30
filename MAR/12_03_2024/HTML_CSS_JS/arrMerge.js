let  ar1= [1, 2, 2, 2, 3, 4, 5],ar2=[1, 2, 4, 5];

const mergedArr=ar1.concat(ar2);

const unique= mergedArr.filter((val,index,self)=>self.indexOf(val)===index);

const common=ar1.filter(num=>ar2.includes(num));

const uniq=common.filter((val,index,self)=>self.indexOf(val)===index);

console.log('Merged: ',unique);

console.log('Common: ',uniq);
