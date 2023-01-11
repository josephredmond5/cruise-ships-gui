const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Ship', () => {
   it('can be instantiated', () => { 
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Dover');
        
        expect(ship.currentPort).toEqual('Dover');
    });

    it('can set sail', () => {
        const ship = new Ship('Dover');
        
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })

});   