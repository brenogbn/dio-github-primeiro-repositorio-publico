/*

- JavaScript assincrono
- consumo de api
- atividade pratica




promises
- como manipular promises
async/await

assíncrono não ocorre ou se efetiva ao mesmo tempo

js por padrão é síncrono


async continua executando os scripts enquanto faz outra
é como multithread de outras linguagens.

promisses é assíncrono, inicialmente o valor é desconhecido
pode ser resolvida ou rejeitada
promise.then(function(value) {
    // executa quando a promise for resolvida
})
promise.catch(function(reason) {
    // executa quando a promise for rejeitada
})

tem 3 estados:
pending
resolved
rejected

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve("resolvido")
    }, 1000)
}

await myPromise
    .then((result) => result + "passando pelo then")
    .then((result) => result + "passando pelo then")




    
const myPromise = new Promise((resolve, reject) => {
    
        resolve("resolvido")
})





async function resolvePromise() {
    const result = await myPromise
    .then((result) => result + "passando pelo then")
    .then((result) => result + "passando pelo then")
    .catch((error) => console.log(error))
    console.log(result)
}
resolvePromise()



APIs e requisições

método fetch
api intermedia o backend com o frontend
acessa via URLs
a maioria usa JSON

fetch retorna uma promise

metnod: post
cache: no-cache
body: JSON.stringify(...)

await fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
*/
