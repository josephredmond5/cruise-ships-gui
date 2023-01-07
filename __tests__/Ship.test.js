const Ship = require('../src/ship.js');

describe('Ship', () => {
   it('can be instantiated', () => { 
        expect(new Ship()).toBeInstanceOf(Object);
    });
});