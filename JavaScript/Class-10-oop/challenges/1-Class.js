//  Crie uma class Animal com as caracteristicas, raça (race) e nome (name), depois crie uma Class "dog" que herde os atributos da classe pai "animal" e tenha o metodo "action". Paase os valores via argumentos quando criar o objeto.

class Animal {
    constructor(name, race) {
        this.race = race;
        this.name = name;
    }

}

class Dog  extends Animal{
    constructor(name, race, sound) {
        super(name, race);
        this.sound = sound;
    }

    action() {
        return `${this.name} esta ${this.sound}`;
    }
}

const myDog = new Dog("Baleia", "Vira-Lata", "Latindo!");
console.log(myDog.name);
console.log(myDog.race);
console.log(myDog.action());