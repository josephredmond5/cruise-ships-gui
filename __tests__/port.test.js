const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe('Port', () => {
  describe('name, add & remove ship', () => {
      let port;
      let ship;
      beforeEach(() => {
        const ship = jest.fn();
          port = new Port('Dover',[ship]);
      });

    it('returns name of Port', () => {
        const port = new Port('Dover');
        
        expect(port.currentPort).toBe('Dover');
    })

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = jest.fn();

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
    })
})