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
let apiKey = "5703b8e437fb5317da32c17cc2116716";
let requestToken;
let username = "guidolingip";
let password = "32173187";
let sessionId;
let listId = "7101979";
let listaDeFilmes;
let loginButton = document.getElementById("login-button");
let searchButton = document.getElementById("search-button");
let searchContainer = document.getElementById("search-container");
let searchBar = document.getElementById("search");
let logoutButton = document.getElementById("logout-button");
let myListsButton = document.getElementById("myLists-button");
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield criarRequestToken();
    yield criarSessao();
    console.log(sessionId);
    yield logar();
}));
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let lista = document.getElementById("lista");
    if (lista) {
        lista.outerHTML = "";
    }
    let query = searchBar.value;
    let listaDeFilmes = yield procurarFilme(query);
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
}));
myListsButton === null || myListsButton === void 0 ? void 0 : myListsButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    pegarListas();
}));
function preencherSenha() {
    password = document.getElementById("senha").value;
    console.log();
    validateLoginButton();
}
function preencherLogin() {
    username = document.getElementById("login").value;
    validateLoginButton();
}
function preencherApi() {
    apiKey = document.getElementById("api-key").value;
    validateLoginButton();
}
function validateLoginButton() {
    if (password && username && apiKey) {
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
    });
}
function criarSessao() {
    return __awaiter(this, void 0, void 0, function* () {
        location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000`;
        const req = yield fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                request_token: requestToken,
            }),
        });
        const json = yield req.json();
        console.log("ESSE JSON AQUI: " + json.session_id);
    });
}
function logar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Minha request token chega aqui?: " + requestToken);
        fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`, {
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
        }).then((response) => {
            console.log(response);
        });
    });
}
function criarLista(nomeDaLista, descricao) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
            method: "POST",
            body: {
                name: nomeDaLista,
                description: descricao,
                language: "pt-br",
            },
        });
        console.log(result);
    });
}
function adicionarFilmeNaLista(filmeId, listaId) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
            method: "POST",
            body: {
                media_id: filmeId,
            },
        });
        console.log(result);
    });
}
function pegarListas() {
    return __awaiter(this, void 0, void 0, function* () {
        let listas = yield fetch(`https://api.themoviedb.org/3/account/${sessionId}/lists?api_key=${apiKey}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const json = yield listas.json();
        return json;
    });
}
function pegarLista() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
            method: "GET",
        });
        console.log(result);
    });
}
function adicionarFilme(filmeId) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
            method: "GET",
        });
        console.log(result);
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
