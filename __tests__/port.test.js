const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");



describe('Port', () => {
    it('can be an instance of an Object', () => {
        expect(new Port()).toBeInstanceOf(Object)
    });

    it('returns name of Port', () => {
        const port = new Port('Dover');
        
        expect(port.currentPort).toBe('Dover');
    })

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
      })

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
      })
    });
