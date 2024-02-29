class Bird {

  constructor() {
    this.skin = "feather";
    this.header = "nozzle";
  }

  action() {
    return "Fly!";
  }

}

class Chicken extends Bird {

  constructor() {
    super();
  }

  action() {
    return "run";
  }

}

class Duck extends Bird {

  constructor() {
    super();
    this.footer = "Webbed Foot";
  }

  action() {
    return "swims";
  }

}

const myBird = new Bird();
const myChiken = new Chicken();
const myDuck = new Duck();

console.log(myBird.action());
console.log(myBird.skin);

console.log(myDuck.footer);
console.log(myDuck.action());
