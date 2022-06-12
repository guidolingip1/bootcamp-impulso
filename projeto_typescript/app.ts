let apiKey: string;
let requestToken: string;
let sessionId: string;
let listId: string;
let accountId: string;
let listaDeFilmes: Object;

/** REFERENCIAS */
let loginButton = document.getElementById("login-button") as HTMLButtonElement | null;
let searchButton = document.getElementById("search-button");
let createListButton = document.getElementById("createList-button") as HTMLButtonElement;
let searchContainer = document.getElementById("search-container") as HTMLElement;
let listContainer = document.getElementById("list-container") as HTMLElement;
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
  await pegaId();
});

searchButton?.addEventListener("click", async () => {
  let lista = document.getElementById("lista");
  let criarList = document.getElementById("criarListaContainer");
  let listas: any;

  if (sessionId) {
    listas = await pegarListas();
  }

  if (lista) {
    lista.outerHTML = "";
  }

  if (criarList) {
    searchContainer.removeChild(criarList);
  }

  let query = searchBar.value;
  let listaDeFilmes = await procurarFilme(query);
  let ul = document.createElement("ul");
  ul.id = "lista";
  for (const item of listaDeFilmes.results) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.original_title));
    if (sessionId) {
      let selectLista = document.createElement("select");
      selectLista.id = "selectLista";

      for (const i of listas.results) {
        let opcao = document.createElement("option");
        opcao.innerHTML = i.name;
        opcao.value = i.id;

        selectLista.appendChild(opcao);
      }

      let botao = document.createElement("button");
      botao.textContent = "Favoritar";

      botao.addEventListener("click", function () {
        let select = this.previousElementSibling as HTMLSelectElement;
        let value = select?.options[select.selectedIndex].value;
        adicionarFilmeNaLista(item.id, value);
      });

      let menu = document.createElement("div");
      menu.id = "menu-div";
      menu.appendChild(selectLista);
      menu.appendChild(botao);
      li.appendChild(menu);
    }
    ul.appendChild(li);
  }
  searchContainer.appendChild(ul);
  console.log("Lista results: " + listas.results);
  console.log(listas);
});

myListsButton?.addEventListener("click", async () => {
  let lista = document.getElementById("lista");
  let criarList = document.getElementById("criarListaContainer");

  if (lista) {
    lista.outerHTML = "";
  }

  if (criarList) {
    searchContainer.removeChild(criarList);
  }

  let listaDeListas = await pegarListas();
  let ul = document.createElement("ul");
  ul.id = "lista";
  for (const item of listaDeListas.results) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.name));
    /* Button VER LISTA*/
    let botao = document.createElement("button");
    botao.textContent = "Ver Lista";
    botao?.addEventListener("click", () => pegaListaAtualEPopula(item.id));
    /* */

    li.appendChild(botao);
    ul.appendChild(li);
  }
  searchContainer.appendChild(ul);
  console.log(listaDeListas.results);
});

createListButton?.addEventListener("click", async () => {
  criarListaInterface();
});

async function pegaListaAtualEPopula(listId: string) {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }

  let listaAtual = await pegarLista(listId);
  let ul = document.createElement("ul");
  ul.id = "lista";
  for (const item of listaAtual.items) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.title));
    ul.appendChild(li);
  }
  searchContainer.appendChild(ul);
  console.log(listaAtual);
}

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
  apiKey = (document.getElementById("api-key") as HTMLInputElement).value;
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

/** AUTHENTICATION */
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
  https: window.open("https://www.themoviedb.org/authenticate/" + requestToken);
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
/** END AUTHENTICATION */

async function criarListaInterface() {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  if (searchContainer.querySelector("#criarListaContainer") === null) {
    let criarListaContainer = document.createElement("div");
    criarListaContainer.id = "criarListaContainer";

    let title = document.createElement("h1");
    title.id = "criarListaContainer-title";
    title.innerHTML = "Criar Lista";

    let inputName = document.createElement("input");
    inputName.id = "criarListaContainer-inputName";
    inputName.placeholder = "Nome da lista";
    inputName.type = "text";

    let inputDescription = document.createElement("input");
    inputDescription.id = "criarListaContainer-inputDescription";
    inputDescription.placeholder = "Descrição da lista";
    inputDescription.type = "text";

    let button = document.createElement("Button");
    button.id = "criarListaContainer-button";
    button.innerHTML = "Criar Lista";

    button.addEventListener("click", () => criarLista(inputName.value, inputDescription.value));

    criarListaContainer.appendChild(title);
    criarListaContainer.appendChild(inputName);
    criarListaContainer.appendChild(inputDescription);
    criarListaContainer.appendChild(button);

    searchContainer.appendChild(criarListaContainer);
  }
}

async function criarLista(nomeDaLista: string, descricao: string) {
  const req = await fetch(
    `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name: nomeDaLista,
        description: descricao,
        language: "pt-br",
      }),
    }
  );
}

async function adicionarFilmeNaLista(filmeId: number, listaId: string) {
  console.log(filmeId + " " + listaId);
  const req = await fetch(
    `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        media_id: filmeId,
      }),
    }
  );
  const res = await req.json();
  console.log("Respostaaaaaa: " + JSON.stringify(res));
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
  console.log("AQUI ESTAO AS LISTAS: " + JSON.stringify(json));
  return json;
}

async function pegarLista(listId: string) {
  const req = await fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const json = await req.json();
  console.log("Minha listaaaa: " + JSON.stringify(json));
  return json;
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
