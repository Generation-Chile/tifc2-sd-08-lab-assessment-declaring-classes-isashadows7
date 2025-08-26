export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`)
  }

}
const jugador = new Player ("Isa", 6);
jugador.info();