class Ogre {
  constructor(name, home){
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }
  encounter(human){
    human.encounterCounter++;
    if (human.encounterCounter === 3){
      this.swingAt(human);
    } else if (human.encounterCounter === 6){
      this.swingAt(human);
      human.knockedOut = true;
    }
  }
  swingAt(human){
    this.swings++;
  }
  apologize(human){
    human.knockedOut = false;
  }
  
}

module.exports = Ogre;