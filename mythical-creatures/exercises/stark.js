class Stark {
  constructor(name, location){
    this.name = name;
    this.location = location || 'Winterfell';
    this.safe = false;
  }
  houseWords(){
    if(this.location == "Dorn" && this.safe === true){
      return "The North Remembers";
    }
    return "Winter is Coming"
  }
}

module.exports = Stark;