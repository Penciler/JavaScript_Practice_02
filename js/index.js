class BaseCharacter {
  constructor(name,hp,ap) {
    this.name=name;
    this.hp=hp;
    this.maxHp=hp;
    this.alive=true;
    this.ap=ap;

  }
  attack(character, damage) {
    if(this.alive==false){
      return;
    }
    character.getHurt(damage);
  }
  
  getHurt() { 
  }
  die() {
  }
}