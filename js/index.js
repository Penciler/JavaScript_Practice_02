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
  
  getHurt(damage) { 
    this.hp -= damage;
    if(this.hp<=0){
      this.die();
    } 
  }
  die() {
  }
}