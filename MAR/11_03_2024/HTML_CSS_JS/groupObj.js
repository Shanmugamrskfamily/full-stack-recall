let obj=[
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 22, gender: 'male' },
    { name: 'Dave', age: 35, gender: 'male' },
  ];

  let property='gender';

  const groupObj=(obj,property)=>{
    return obj.reduce((acc,obj)=>{
        const propsV=obj[property];
        if(!acc[propsV]){
            acc[propsV]=[];
        }
        acc[propsV].push(obj);
        return acc;
    },{});
  }

  const groupObj_2 = (obj, property) => obj.reduce((acc, obj) => (acc[obj[property]] = (acc[obj[property]] || []).concat(obj), acc), {});

  console.log(groupObj(obj,property));
  console.log(groupObj_2(obj,property));
