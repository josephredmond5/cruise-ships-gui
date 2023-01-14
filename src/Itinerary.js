function Itinerary(ports) {
  this.ports = ports;
};



module.exports = Itinerary;

* the this keyword refers to the object that it is cotained inside of
 || that it is used inside of 
 || that it is coded inside of *

const person = {
  name: 'joseph';
  age: 25;
  console.log(person);
}

personGrowsUp() {
  this.age++;
}

personGrowsUp();

// ask ryan to explain this when at his tomorrow 
// ask ryan about methods and functions and objects

