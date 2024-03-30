function inventoryList(){
    let items=[];
    
    function add(name){
        if(!items.includes(name)){
            items.push(name);
            console.log(`${name} Added!`);
        }
        else{
            console.log(`${name} already exist!`);
        }
    }

    function remove(name){
        let index=items.indexOf(name);
        if(index===-1){
            console.log(`${name} not Found!`);
        }
        else{
            items.splice(index,1);
            console.log(`${name} Removed!`);
        }
    }

    function getList(){
        return items.length>0? console.log(`Inventory:\n${items}`):console.log(`Inventory Empty!`);
    }

    return{
        add, remove, getList
    }
}

let inventory=inventoryList();
inventory.add('T-Shirt');
inventory.add('Trouser');
inventory.add('Shirt');
inventory.getList();
inventory.remove('T-Shirt');
inventory.getList();