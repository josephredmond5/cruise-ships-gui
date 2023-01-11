function Ship(name) {
    this.currentPort = 'Dover';
}

Ship.prototype = {
    setSail() {
      this.currentPort = false;
    },
    dock(port) {
      this.currentPort = port;
    },
  };










module.exports = Ship;



