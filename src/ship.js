function Ship (currentPort) {
  this.currentPort = currentPort;
  this.previousPort = null;
}

Ship.prototype = {
  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  },
    dock(port) {
      this.currentPort = port;
    },
  };










module.exports = Ship;



