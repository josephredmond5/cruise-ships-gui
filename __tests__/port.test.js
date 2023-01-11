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
});