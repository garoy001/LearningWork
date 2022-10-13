class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.strength = Math.floor(Math.random() * 5) + 5
        this.defense = Math.floor(Math.random() * 5) + 5
    }
    attack(target){
        let damage = Math.abs(this.strength - target.defense);
        target.health = target.health - damage;
        console.log(`|${this.name}| did |${Math.floor(damage)}| to |${target.name}| who is left with |${target.health}| health `)
    }
        
}

let fighter1 = new Fighter("Ryu");
let fighter2 = new Fighter("Ken");
let counter = 1
while (fighter1.health > 0 && fighter2.health > 0) {
    if (counter % 2 == 0) {
        fighter2.attack(fighter1);
        counter++
    }
    else {
        fighter1.attack(fighter2);
        counter++
    }
}
if (fighter1.health > 0) {
    console.log(`${fighter1.name} is the winner!`)
}
if (fighter2.health > 0) {
    console.log(`${fighter2.name} is the winner!`)
}