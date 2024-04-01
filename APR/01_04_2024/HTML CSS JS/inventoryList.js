function inventoryList(){
    let items=[];

    function add(name){
        if(!items.includes(name)){
            items.push(name);
            console.log(`${name} added!`);
        }
        else{
            console.log(`${name} already Exist!`);
        }
    }

    function remove(name){
        let index=items.indexOf(name);

        if(index!==-1){
            items.splice(index,1);
            console.log(`${name} removed!`);
        }
        else{
            console.log(`${name} not Found!`);
        }
    }

    function getList(){
        return items.length>0? console.log(items):'No Items in Inventory!';
    }

    return{
        add,remove,getList
    }
}

let inventory=inventoryList();

inventory.add('Shirt');
inventory.add('T-Shirt');
inventory.add('Shirt');
inventory.getList();
inventory.remove('Trouser');
inventory.remove('T-Shirt');
inventory.getList();