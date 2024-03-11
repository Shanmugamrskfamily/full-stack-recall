let arr=[
    { name: 'Alice', age: 25 },       
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Dave', age: 35 }
  ];

  arr.sort((a,b)=>a.age-b.age);

  console.log(arr);