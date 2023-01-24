function Port(name) {
    this.currentPort = 'Dover';
    this.ships = [];
};

  Port.prototype.addShip = function addShip(ship) {
    this.ships.push(ship);
  };

  Port.prototype.removeShip = function removeShip(ship) {
    this.ships.pop(ship);
  };
 
  

module.exports = Port;


