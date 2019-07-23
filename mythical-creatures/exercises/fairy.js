class Fairy {
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris'],
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief(){
    this.dust++;
  }
  believe(){
    this.dust += 10;
  }
  makeDresses(array){
    this.clothes.dresses = this.clothes.dresses.concat(array);
  }
  provoke(){
    this.disposition = 'Vengeful';
  }
  replaceInfant(infantObj){
    if (this.disposition === 'Vengeful'){
      infantObj.disposition = 'Malicious';
      this.humanWards.push(infantObj);
      if (this.humanWards.length >= 3){
        this.disposition = 'Good natured';
      }
    }
    else {
      return infantObj;
    }
  }
}

module.exports = Fairy;