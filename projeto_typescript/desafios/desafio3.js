"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
function somarAoSaldo(soma) {
    campoSaldo.innerHTML = `${Number(campoSaldo.innerHTML) + soma}`;
    // ou
    //campoSaldo.innerHTML = (Number(campoSaldo.innerHTML) + soma).toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = "";
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
