class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = true;
    if (object.bearded === false){
      this.bearded = false};
    this.isRested = true;
    this.count = 0;
  }
  incantation(spell){
    return spell.toUpperCase();
  }cd 
  cast(spell){
    this.count++;
    if(this.count >= 3){
      this.isRested = false;
      return "I SHALL NOT CAST!";
    }
    return spell.toUpperCase();
  }

}

module.exports = Wizard;