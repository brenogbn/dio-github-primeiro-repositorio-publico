// Como podemos melhorar o esse código usando TS? 

// isto pode ser melhor representado utilizando Orientação a Objetos.

interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

var pessoas: Pessoa[] = [
    {nome: 'Maria',idade: 29,profissao: 'Atriz'},
    {nome: 'Roberto',idade: 19,profissao: 'Padeiro'},
    {nome: 'Laura',idade: 32,profissao: 'Atriz'},
    {nome: 'Carlos',idade: 19,profissao: 'Padeiro'}
]

/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/