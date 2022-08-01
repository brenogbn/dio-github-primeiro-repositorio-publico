/*


pilares

herança
polimorfismo
encapsulamento
abstração


OOJS
protótipos e cadeia de protótipos

const objeto = {}

__proto__
mesmo que não tenhamos escrito uma função ela herda da classe pai
Object.prototype está no topo disso

jeito antigo
var Meal = function(name, price) {
    this.name = name
    this.price = price
}
Meal.prototype.getPrice = function() {
    return this.price
}
Meal.prototype.getName = function() {
    return this.name
}
Meal.prototype.setPrice = function(price) {
    this.price = price
}
Meal.prototype.eat = function() {
    console.log("Eating " + this.name)
}


jeito novo
class Meal {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    eat() {
        console.log(`Eating ${this.name}`)
    }
}


*/