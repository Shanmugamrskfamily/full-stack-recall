let ar1=[1, 2, 3, 4, 1, 2, 3, 4 ],ar2=[5, 6, 7, 8];

function mergeArray(){
    let merged= ar1.concat(ar2);
    let unique=merged.filter((val,index,self)=>self.indexOf(val)===index);
    console.log('Merged and Removed Duplicates: ',unique);
}
mergeArray();