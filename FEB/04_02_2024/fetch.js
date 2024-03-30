const url='https://jsonplaceholder.typicode.com/users';

const dataFetech=()=>{
    fetch(url).then(res=>{
        if(!res.ok){
            throw new Error('Network Error!');
        }
        return res.json();
    }).then(data=>{
        for(let i=0;i<data.length;i++){
            console.log(data[i].name);
        }
    }).catch(err=>console.error(err));
}

dataFetech();