// para rodar, npm run start

console.log("Typescript")

function soma(a: number, b: number): number {
    return a + b
}

console.log(soma(1, 3))

interface Animal {
    nome: string,
    tipo: 'terrestre' | 'aquatico'
}

interface Felino extends Animal {
    visaoNoturna: boolean,
    rugir(): void
}

const animal: Animal = {
    nome: 'Cachorro',
    tipo: 'terrestre'
}

const felino: Felino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    rugir: () => {
        return "Rugindo"
    }
}

// types
// interfaces
// classes

// no lugar de type pode ter interface
// no type pode ter outras interfaces

type Anim = Animal | Felino
// ele escolhe automaticamente de acordo com as variaveis

const ann: Anim = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    visaoNoturna: true,
}
console.log(typeof ann)


const input = document.getElementById('input') as HTMLInputElement

// console.log(input.value)
input.addEventListener('keydown', (e) => {
    console.log(e)
}
)
input.addEventListener('keyup', (e) => {
    console.log(e)
}
)



interface IUsuario {
    id: string;
    email: string;
}
interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'diretor' | 'supervisor';
}

function redirecione (usuario: IAdmin | IUsuario) {
    if ('cargo' in usuario ){
        console.log('tem cargo')
    } else {
        console.log('não tem cargo')
    }
}


interface IUsuario2 {
    id: string;
    email: string;
    cargo?: 'gerente' | 'diretor' | 'supervisor'; // permite undefined
}


function redirecione2 (usuario: IUsuario2) {
    if ( usuario.cargo ){
        console.log('tem cargo')
    } else {
        console.log('não tem cargo')
    }
}

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

const meuCachorro: Cachorro = {
    nome: 'Rex',
    idade: 1,
    parqueFavorito: 'Parque dos animais'
}

class MeuCachorro implements Cachorro {
    nome;
    idade;
    parqueFavorito?;
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Rex', 1)

type CachorroSomenteLeitura = {
    readonly [k in keyof Cachorro]: Cachorro[k]
}

class MeuCachorroVelho extends Omit<MeuCachorro, 'parqueFavorito'> {
    constructor (nome, idade){
        super(nome, idade)
    }
}


