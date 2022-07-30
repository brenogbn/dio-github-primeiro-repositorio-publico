

// Global variables

var map = new Map()
var array = new Array()
var object = new Object()
var string = new String()
var number = new Number()
var boolean = new Boolean()
var date = new Date()
var regexp = new RegExp()
var error = new Error()


// Tipos de Funções

function nome(parametro) {
    console.log("Nome, parametro =", parametro)
    return parametro;
}


nome("aaa");

// Função anonima

const soma = function (a, b) {
    return a + b;
}

const mult = (a, b) => a * b;

// callback

const add = (a, b) => {
    return (a + b);
}
const sub = (a, b) => {
    return (a - b);
}
const call = (x, y, callback) => {
    return callback(x, y);
}

console.log(call(1, 2, sub))


// Auto Invocável

console.log((function (a) {
    let name = a
    return a
})("asdf"))

// parametros

function params() {
    console.log("params,", arguments)
}

params("asdf")
params(1, 2, 3, 4, 5)




const nums = [1, 2, 3, 4, 5]
const sm = function (a, b, c, d, e) {
    return a + b + c + d + e
}
console.log(sm(...nums))