const { expect } = require('chai');
const StoreCreator = require('../api/storeCreator');

let testStore = {
	"concepts1": [],
	"concepts2": [],
    "concepts3": [],
    "concepts4": [],
    "concepts5": [],
    "concepts6": [],
    "name": "test",
	"cuit": "20-32895547-1",
	"currentBalance": "12030",
	"active": "true",
	"lastSale": "02-10-2020"
}

//

describe('StoreCreator', function() {
    it('should return a new store', async function () {
        expect(await new StoreCreator().create(testStore),testStore 
        );
        ;
    })
})
