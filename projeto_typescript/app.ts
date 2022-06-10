let apiKey: string = "5703b8e437fb5317da32c17cc2116716";
let requestToken: string;
let username: string = "guidolingip";
let password: string = "32173187";
let sessionId: string;
let listId: string = "7101979";

let listaDeFilmes: Object;

let loginButton = document.getElementById(
  "login-button"
) as HTMLButtonElement | null;
let searchButton = document.getElementById("search-button");
let searchContainer = document.getElementById(
  "search-container"
) as HTMLElement;
let searchBar = document.getElementById("search") as HTMLInputElement;
let logoutButton = document.getElementById(
  "logout-button"
) as HTMLButtonElement | null;
let myListsButton = document.getElementById(
  "myLists-button"
) as HTMLButtonElement | null;

loginButton?.addEventListener("click", async () => {
  await criarRequestToken();
  await criarSessao();
  console.log(sessionId);
  await logar();
});

searchButton?.addEventListener("click", async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }

  let query = searchBar.value;
  let listaDeFilmes = await procurarFilme(query);
  let ul = document.createElement("ul");
  ul.id = "lista";
  for (const item of listaDeFilmes.results) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.original_title));
    let botao = document.createElement("button");
    botao.textContent = "Favoritar";
    li.appendChild(botao);
    ul.appendChild(li);
  }
  searchContainer.appendChild(ul);
  console.log(listaDeFilmes.results);
  console.log(listaDeFilmes);
});

myListsButton?.addEventListener("click", async () => {
  pegarListas();
});

function preencherSenha() {
  password = (document.getElementById("senha") as HTMLInputElement).value;
  console.log();
  validateLoginButton();
}

function preencherLogin() {
  username = (document.getElementById("login") as HTMLInputElement).value;
  validateLoginButton();
}

function preencherApi() {
  apiKey = (document.getElementById("api-key") as HTMLInputElement).value;
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    if (loginButton != null) {
      loginButton.disabled = false;
    }
  } else {
    if (loginButton != null) {
      loginButton.disabled = true;
    }
  }
}

async function criarRequestToken() {
  const req = await fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  requestToken = json.request_token;
}

async function criarSessao() {
  location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000`;
  const req = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request_token: requestToken,
      }),
    }
  );
  const json = await req.json();
  console.log("ESSE JSON AQUI: " + json.session_id);
}

async function logar() {
  console.log("Minha request token chega aqui?: " + requestToken);
  fetch(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: { username },
        password: { password },
        request_token: { requestToken },
      }),
    }
  ).then((response) => {
    console.log(response);
  });
}

async function criarLista(nomeDaLista, descricao) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br",
    },
  });
  console.log(result);
}

async function adicionarFilmeNaLista(filmeId, listaId) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId,
    },
  });
  console.log(result);
}

async function pegarListas() {
  let listas = await fetch(
    `https://api.themoviedb.org/3/account/${sessionId}/lists?api_key=${apiKey}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await listas.json();
  return json;
}

async function pegarLista() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET",
  });
  console.log(result);
}

async function adicionarFilme(filmeId) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET",
  });
  console.log(result);
}

async function procurarFilme(query: string) {
  query = encodeURI(query);
  const req = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  return json;
}
