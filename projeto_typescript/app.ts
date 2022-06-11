let apiKey: string = "5703b8e437fb5317da32c17cc2116716";
let requestToken: string;
let sessionId: string;
let listId: string;
let accountId: string;
let accessToken: string;
let listaDeFilmes: Object;

/** REFERENCIAS */
let loginButton = document.getElementById("login-button") as HTMLButtonElement | null;
let searchButton = document.getElementById("search-button");
let searchContainer = document.getElementById("search-container") as HTMLElement;
let searchBar = document.getElementById("search") as HTMLInputElement;
let logoutButton = document.getElementById("logout-button") as HTMLButtonElement | null;
let myListsButton = document.getElementById("myLists-button") as HTMLButtonElement | null;
let validateButton = document.getElementById("validate-button") as HTMLButtonElement;
/************************************************/

validateButton?.addEventListener("click", async () => {
  await criarRequestToken();
  await aprovaToken();
});

loginButton?.addEventListener("click", async () => {
  await criarSessao();
  await geraAccessToken();
  await pegaId();
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

async function pegaId() {
  const req = await fetch(
    `https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  accountId = JSON.stringify(json.id);
  console.log(accountId);
}

function preencherApi() {
  //apiKey = (document.getElementById("api-key") as HTMLInputElement).value;
  validateLoginButton();
}

function validateLoginButton() {
  if (apiKey) {
    if (loginButton != null) {
      loginButton.disabled = false;
    }
  } else {
    if (loginButton != null) {
      loginButton.disabled = true;
    }
  }
}

/** Authentication */
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
  console.log("Minha request Token: " + requestToken);
}

async function aprovaToken() {
  window.open("https://www.themoviedb.org/authenticate/" + requestToken);
}

async function geraAccessToken() {
  const req = await fetch(`https://api.themoviedb.org/4/auth/access_token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      request_token: requestToken,
    }),
  });
  const json = await req.json();
  accessToken = json.access_token;
  console.log("Access_token: " + json.access_token);
}

async function criarSessao() {
  const req = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  sessionId = json.session_id;
  console.log("Minha session: " + json.session_id);
}

async function criarLista(nomeDaLista: string, descricao: string) {
  const req = await fetch(
    `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    {
      method: "POST",
      body: JSON.stringify({
        name: nomeDaLista,
        description: descricao,
        language: "pt-br",
      }),
    }
  );
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
  const req = await fetch(
    `https://api.themoviedb.org/3/account/1/lists?api_key=${apiKey}&session_id=${sessionId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  console.log("Minhas listas: " + JSON.stringify(json));
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
