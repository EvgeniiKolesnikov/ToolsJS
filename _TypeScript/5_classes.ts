class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel     // перезапить readonly только в конструкторе
//   }
// }

// ТОЖЕ самое, только короче
class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

// === модификаторы ======================== 

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  constructor() {
    this.go()
  }

  private go() {
    console.log('GO!');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
// cat.voice                            // NO access (Animal protected)
cat.setVoice('meow')                    // YES
console.log(cat.color);                 // YES 

// === абстрактные классы ===================

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }
  info(): string {
    return 'This is info'
  }
}