function inventoryList(){
    let items=[];
    function add(name){
        if(!items.includes(name)){
            items.push(name);
            console.log(`${name} Added!`);
        }
        else{
            console.log(`${name} is Already Exist!`);
        }
    }

    function remove(name){
        let index=items.indexOf(name);

        if(index!==-1){
            items.splice(index,1);
            console.log(`${name} is Removed!`);
        }
        else{
            console.log(`${name} is Not Found!`);
        }
    }

    function getList(){
        return items.length>0? console.log(items):'Inventory List Empty!';
    }

    return{
        add,remove,getList
    }
}

let inventory=inventoryList();

inventory.add('Trouser');
inventory.add('T-Shirt');
inventory.add('Shirt');
inventory.getList();
inventory.remove('T-Shirt');
inventory.getList();