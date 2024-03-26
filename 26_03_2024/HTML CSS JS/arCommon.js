let ar1=[1, 2, 2, 2, 3, 4, 5], ar2=[1, 2, 4, 5];

const common=ar1.filter(num=>ar2.includes(num));

const unique=common.filter((val,index,self)=>self.indexOf(val)===index);

console.log('Common and Unique:',unique);