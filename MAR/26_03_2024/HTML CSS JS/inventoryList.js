function inventoryList() {
    let items = [];

    function add(name) {
        if (!items.includes(name)) {
            items.push(name);
            console.log(`${name} Added!`);
        } else {
            console.log(`${name} is Already Exist!`);
        }
    }

    function remove(name) {
        let index = items.indexOf(name);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`${name} Removed!`);
        } else {
            console.log(`${name} not Found!`);
        }
    }

    function getList() {
        return items.length > 0 ? console.log(items.slice()) : console.log('No Items in inventory!');
    }

    return {
        add,
        remove,
        getList
    };
}

const inventory = inventoryList();

inventory.add('Shirt');
inventory.add('Trouser');
inventory.getList();
inventory.remove('Shirt');
inventory.getList();
inventory.remove('Trouser');
inventory.getList();
