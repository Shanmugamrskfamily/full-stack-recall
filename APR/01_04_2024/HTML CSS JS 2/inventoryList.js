const inventoryList = () => {
    let items = [];

    const add = (name) => {
        if (items.length >= 10) {
            console.log(`Inventory Full!`);
            return;
        }
        if (!items.includes(name)) {
            items.push(name);
            console.log(`${name} Added!`);
        } else {
            console.log(`${name} already exists!`);
        }
    }

    const remove = (name) => {
        const index = items.indexOf(name);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`${name} Removed!`);
        } else {
            console.log(`${name} not found!`);
        }
    }

    const getList = () => {
        if (items.length > 0) {
            console.log('\nInventory:');
            items.forEach((item, index) => console.log(`${index + 1}. ${item}`));
        } else {
            console.log('\nInventory:\nNo Data Found!');
        }
    }

    return {
        add,
        remove,
        getList
    }
}

let inventory = inventoryList();

inventory.add('T-Shirt');
inventory.add('Shirt');
inventory.getList();
inventory.remove('Shirt');
inventory.remove('Trouser');
inventory.getList();
inventory.remove('T-Shirt');
inventory.getList();
inventory.add('Shoes');
inventory.add('Hat');
inventory.add('Socks');
inventory.add('Jacket');
inventory.add('Gloves');
inventory.add('Scarf');
inventory.add('Belt');
inventory.add('Watch');
inventory.add('T-Shirt');
inventory.getList();
inventory.add('shan');
inventory.getList();
inventory.add('krish');
inventory.getList();
