class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }

  shoot(){
    this.count++;
    if (this.count >= 3 || this.layingDown){
      this.cranky = true;
      return "NO!";
    }
    return "Twang!!!";
  }

  run(){
    this.count++;
    if (this.count >= 3 || this.layingDown){
      this.cranky = true;
      return "NO!";
    }
    return "Clop clop clop clop!!!"
  }

  sleep(){
    if(this.layingDown == true){
      this.cranky = false;
      this.count = 0;
      return "ZZZZ"
    }
    return "NO!";
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if (!this.standing){
      return "Not while I\'m laying down!"
    }
    if (!this.cranky){
      this.cranky = true;
      return;
    }
    this.cranky = false;
  }
}

module.exports = Centaur