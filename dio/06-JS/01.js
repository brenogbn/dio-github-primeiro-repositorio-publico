

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

function tam (...args){
    return args.length
}
console.log(tam(1,2,3,4,5))

// destructuring

const user = {
    name: "asdf",
    age: 23,
    address: {
        street: "asdfs",
        city: "asdf",
        state: "asdf"
    }
}
function getuser({name, age}) {
    console.log(name, age)
}
getuser(user)

function getuser2({name, age, address: {street:a, city, state}}) {
    console.log(name, age, a, city, state)
}
getuser2(user)

/*
if else, clean code, etc...
devemos declarar tudo antes de usar...

const, var, let...

switch (?){
    case 1:
        return 1;
    case 2:
        return 2;
        etc...
    default:
        return 3;
}
for (let i = 0; i < 10; i++) {
    console.log(i)
}

em objetos
for (key in obj) {
    console.log(key)
}

em strings
for (key of str) {
    console.log(key)
}

só executa se ? for verdadeiro
while (?) {
    console.log(?)
}

executa pelo menos uma vez
do while (?) {
    console.log(?)
}

O queé this?
this é uma referencia para o contexto onde está

seja da função, do objeto, etc...
ou pode ser usado no HTML em alguma chamada.

dentro de um evento, o this é o objeto que o invocou
se for um botão, o this é o botão


const myObj = {
    num1: 1,
    num2: 2,
    num3: 3
}
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b)
}
soma(1,2)
soma.call(myObj,1,2)
soma.apply(myObj,[1,2])

map

filter
-> cria uma nova lista apenas com os itens que passaram pelo filtro

array.filter(callback, thisArg)
const frutas = ["abacaxi", "banana", "caju", "damasco", "uva"]
const frutasFiltradas = frutas.filter((fruta) => frutas.includes("banana"))

reduce

const callbackFn = (accumulator, currentValue, index, array){
    return accumulator + currentValue
}
array.reduce (callbackFn, initialValue)


tipos de erro
tratando erros
criando erros

objeto error ecmascript
erro dom
tem mensagem, nome, linha, callstack

domexception
envolvido no contexto onde relaciona o JS a uma página web

como buscar um nó que não existe ou tentar inserir onde não pode.


trhow vs return
trhow -> lança um erro
return -> retorna um valor

se não tratar aparece uncaught exception
function verificaPalindromo(palavra) {
    if (palavra.toLowerCase() === palavra.split("").reverse().join("").toLowerCase()) {
        return true;
    } else {
        throw new Error("Não é palíndromo");
    }
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    }
    catch (error) {
        console.log(error.message);
    }
}

Como criar um erro personalizado?
error tem uma série de propriedades e métodos
new Error(message, fileName, lineNumber)
todos os parametros são opcionais
pode ver no w3 schools para ver a compatibilidade dos parametros
const meuErro = new Error("Erro de teste")

throw meuErro;
erro.name
erro.message
erro.stack
erro.fileName
erro.lineNumber

try
catch 
finally






*/

