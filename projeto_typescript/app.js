"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let apiKey;
let requestToken;
let sessionId;
let listId;
let accountId;
let listaDeFilmes;
/** REFERENCIAS */
let loginButton = document.getElementById("login-button");
let searchButton = document.getElementById("search-button");
let createListButton = document.getElementById("createList-button");
let searchContainer = document.getElementById("search-container");
let listContainer = document.getElementById("list-container");
let searchBar = document.getElementById("search");
let logoutButton = document.getElementById("logout-button");
let myListsButton = document.getElementById("myLists-button");
let validateButton = document.getElementById("validate-button");
/************************************************/
validateButton === null || validateButton === void 0 ? void 0 : validateButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield criarRequestToken();
    yield aprovaToken();
}));
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield criarSessao();
    yield pegaId();
}));
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let lista = document.getElementById("lista");
    let criarList = document.getElementById("criarListaContainer");
    let listas;
    if (sessionId) {
        listas = yield pegarListas();
    }
    if (lista) {
        lista.outerHTML = "";
    }
    if (criarList) {
        searchContainer.removeChild(criarList);
    }
    let query = searchBar.value;
    let listaDeFilmes = yield procurarFilme(query);
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
                let select = this.previousElementSibling;
                let value = select === null || select === void 0 ? void 0 : select.options[select.selectedIndex].value;
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
}));
myListsButton === null || myListsButton === void 0 ? void 0 : myListsButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let lista = document.getElementById("lista");
    let criarList = document.getElementById("criarListaContainer");
    if (lista) {
        lista.outerHTML = "";
    }
    if (criarList) {
        searchContainer.removeChild(criarList);
    }
    let listaDeListas = yield pegarListas();
    let ul = document.createElement("ul");
    ul.id = "lista";
    for (const item of listaDeListas.results) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.name));
        /* Button VER LISTA*/
        let botao = document.createElement("button");
        botao.textContent = "Ver Lista";
        botao === null || botao === void 0 ? void 0 : botao.addEventListener("click", () => pegaListaAtualEPopula(item.id));
        /* */
        li.appendChild(botao);
        ul.appendChild(li);
    }
    searchContainer.appendChild(ul);
    console.log(listaDeListas.results);
}));
createListButton === null || createListButton === void 0 ? void 0 : createListButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    criarListaInterface();
}));
function pegaListaAtualEPopula(listId) {
    return __awaiter(this, void 0, void 0, function* () {
        let lista = document.getElementById("lista");
        if (lista) {
            lista.outerHTML = "";
        }
        let listaAtual = yield pegarLista(listId);
        let ul = document.createElement("ul");
        ul.id = "lista";
        for (const item of listaAtual.items) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(item.title));
            ul.appendChild(li);
        }
        searchContainer.appendChild(ul);
        console.log(listaAtual);
    });
}
function pegaId() {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = yield req.json();
        accountId = JSON.stringify(json.id);
        console.log(accountId);
    });
}
function preencherApi() {
    apiKey = document.getElementById("api-key").value;
    validateLoginButton();
}
function validateLoginButton() {
    if (apiKey) {
        if (loginButton != null) {
            loginButton.disabled = false;
        }
    }
    else {
        if (loginButton != null) {
            loginButton.disabled = true;
        }
    }
}
/** AUTHENTICATION */
function criarRequestToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`, {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = yield req.json();
        requestToken = json.request_token;
        console.log("Minha request Token: " + requestToken);
    });
}
function aprovaToken() {
    return __awaiter(this, void 0, void 0, function* () {
        https: window.open("https://www.themoviedb.org/authenticate/" + requestToken);
    });
}
function criarSessao() {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = yield req.json();
        sessionId = json.session_id;
        console.log("Minha session: " + json.session_id);
    });
}
/** END AUTHENTICATION */
function criarListaInterface() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function criarLista(nomeDaLista, descricao) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                name: nomeDaLista,
                description: descricao,
                language: "pt-br",
            }),
        });
    });
}
function adicionarFilmeNaLista(filmeId, listaId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(filmeId + " " + listaId);
        const req = yield fetch(`https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                media_id: filmeId,
            }),
        });
        const res = yield req.json();
        console.log("Respostaaaaaa: " + JSON.stringify(res));
    });
}
function pegarListas() {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://api.themoviedb.org/3/account/1/lists?api_key=${apiKey}&session_id=${sessionId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = yield req.json();
        console.log("AQUI ESTAO AS LISTAS: " + JSON.stringify(json));
        return json;
    });
}
function pegarLista(listId) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = yield req.json();
        console.log("Minha listaaaa: " + JSON.stringify(json));
        return json;
    });
}
function procurarFilme(query) {
    return __awaiter(this, void 0, void 0, function* () {
        query = encodeURI(query);
        const req = yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = yield req.json();
        return json;
    });
}
