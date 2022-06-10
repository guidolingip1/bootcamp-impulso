"use strict";
// Como podemos melhorar o esse código usando TS?
/*
    let pessoa1 = {};
    pessoa1.nome = "maria";
    pessoa1.idade = 29;
    pessoa1.profissao = "atriz";

    let pessoa2 = {};
    pessoa2.nome = "roberto";
    pessoa2.idade = 19;
    pessoa2.profissao = "Padeiro";

    let pessoa3 = {
        nome: "laura",
        idade: "32",
        profissao: "Atriz",
    };

    let pessoa4 = {
        nome = "carlos",
        idade = 19,
        profissao = "padeiro",
    };
*/
var Profissoes;
(function (Profissoes) {
    Profissoes["Atriz"] = "Atriz";
    Profissoes["Padeiro"] = "Pedreiro";
})(Profissoes || (Profissoes = {}));
const pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissoes.Atriz,
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissoes.Padeiro,
};
const pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissoes.Atriz,
};
const pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissoes.Padeiro,
};
