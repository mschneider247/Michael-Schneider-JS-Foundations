class Werewolf {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change(){
    this.human = !this.human;
    this.wolf = !this.wolf;
    if(this.wolf === true){
      this.hungry = true;
    }
    if(this.human === true){
      this.hungry = false;
    }
  }
  eat(victim){
    if(this.hungry === true && this.human === false){
      victim.alive = false;
      this.change();
      return "Delicious";
    }
    return "Don't eat other people";
  }
  
}

module.exports = Werewolf