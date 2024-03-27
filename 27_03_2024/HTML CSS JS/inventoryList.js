function inventoryList(){
    let items=[];
    function add(name){
        if(!items.includes(name)){
            items.push(name);
            console.log(`${name} added Successfully!`);
        }
        else{
            console.log(`${name} is already Exist!`);
        }
    }

    function remove(name){
        let index=items.indexOf(name);
        if(index!==-1){
            items.splice(index,1);
            console.log(`${name} is Removed`);
        }
        else{
            console.log(`${name} not Found!`);
        }
    }

    function getList(){
        return items.length>0? console.log(items.slice()):'Inventory is Empty!';
    }

    return{
        add,remove,getList
    }
}

let inventory=inventoryList();

inventory.add('Troused');
inventory.add('T-Shirt');
inventory.add('Saree');
inventory.getList();
inventory.remove('T-Shirt');
inventory.getList();