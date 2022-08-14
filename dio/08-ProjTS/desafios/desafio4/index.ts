// para rodar, npm run start

console.log("Bem-vindo, visitante do DevTools!!")

// o correto era isto não estar no código.
// como é um exemplo, vou deixar aqui.
const SECKEY = 'e1124417198fcf54d74dcded8d673282' ;


// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

var apiKey = SECKEY;
let requestToken;
let username;
let password;
let sessionId;
let listId = '7101979';

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;
let searchContainer = document.getElementById('search-container') as HTMLDivElement;
let botao_login_ = document.getElementById('show_login') as HTMLButtonElement;

botao_login_.addEventListener('click', async () => {
    let div_login = document.getElementById('div_login') as HTMLDivElement;
    div_login.style.display = "flex";
    let div_busca = document.getElementById('div_busca') as HTMLButtonElement;
    div_busca.style.display = "none";
} )


loginButton.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
  
  try{
    await criarRequestToken();
    await pegarListas();
  }catch(e){
    console.log(e)
  }
  let botao_login = document.getElementById('show_login') as HTMLButtonElement;
  botao_login.style.display = "inline";
  let div_login = document.getElementById('div_login') as HTMLButtonElement;
  div_login.style.display = "none";
  let div_busca = document.getElementById('div_busca') as HTMLButtonElement;
  div_busca.style.display = "inline";
})

searchButton.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = document.getElementById('search').value;
  let listaDeFilmes:any = await procurarFilme(query);
  let ul = document.createElement('div');
  ul.id = "lista"
  ul.classList.add('row');
  for (const item of listaDeFilmes.results) {
    console.log(item);
    console.log("item...")
    let li = document.createElement('div');
    li.classList.add('card');
    li.classList.add('col-md-3');
    li.style.width="18rem";
    //li.appendChild(document.createTextNode(item.original_title))
    // acabei utilizando o innerHTML por ser mais rápido
    // não achei na doc da API como pegar a lista de listas de filmes
    // para selecionar as listas.
    /* pensei em colocar uma seleção de listas, com select, mas não achei a API.
    seria interessante também apresentar as listas salvas, e ter uma verificação
    se o filme está ou não lá.
    */
    li.innerHTML = `<div class="card" style="margin: 0.3em;">\
    <img class="card-img-top" style="margin: 0 auto; display: block; width: 8em; height: 12em;" src="https://image.tmdb.org/t/p/w500${item.poster_path}" onerror="this.style.display = 'None'">\
    <div id="card-body">
    <h5 style="text-align: center; white-space:nowrap; overflow:hidden;text-overflow:elipsis" class="card-title" title="${item.overview}">${item.original_title}</h5>\
      </div>`;
    li.classList.add('list-group-item');
    if (item.poster_path) ul.appendChild(li)
  }
  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

function preencherSenha() {
  password = document.getElementById('senha').value;
  validateLoginButton();
}

function preencherLogin() {
  username =  document.getElementById('login').value;
  validateLoginButton();
}

function preencherApi() {
  apiKey = document.getElementById('api-key').value;
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get({url, method, body = null}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

async function procurarFilme(query) {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result
}

async function adicionarFilme(filmeId) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })
  console.log(result);
}

async function criarRequestToken () {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result)
  requestToken = result.request_token
}

async function logar() {
  var result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
    
  })
  console.log("logando...")
  console.log(result)

}

async function criarSessao() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  })
  console.log("criarSessao...")
  sessionId = result.session_id;
  console.log(result);
}

async function criarLista(nomeDaLista, descricao) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })
  console.log(result);
}

async function adicionarFilmeNaLista(filmeId, listaId) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })
  console.log(result);
}

async function pegarLista() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result);
}

async function pegarListas() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/account/${username}/lists?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result);
}
