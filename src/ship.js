function Ship(name) {
    this.startingPort = 'Dover';
}

Ship.prototype = {
    setSail() {
      this.startingPort = false;
    },
  };







module.exports = Ship;



