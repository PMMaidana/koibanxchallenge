const Store = require('../models/store')

let StoreCreator = class {
     
    
    async create(...args) {
        let store = await new Store();{
            store.name = args[0].name;
            store.cuit = args[0].cuit;
            store.concepts1 = args[0].concepts1;
            store.concepts2 = args[0].concepts2;
            store.concepts3 = args[0].concepts3;
            store.concepts4 = args[0].concepts4;
            store.concepts5 = args[0].concepts5;
            store.concepts6 = args[0].concepts6;
            store.currentBalance = args[0].currentBalance;
            store.active = args[0].active;
            store.lastSale = args[0].lastSale;
            //await Store.create(store);
            return store;
        }
    }
}

module.exports = StoreCreator;