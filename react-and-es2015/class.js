class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static getHoge() {
        return 'hoge';
    }
}
var shiro = new Person('Shiro Amada');
console.log(shiro.getName());
console.log(Person.getHoge());

class Athlete extends Person {
    constructor(name,sports) {
        super(name);
        this.sports = sports;
    }
    getName() {
        return `${this.name} (${this.sports})`;
    }
}

var amada = new Athlete('Shiro Amada','arm wrestling');
console.log(amada.getName());