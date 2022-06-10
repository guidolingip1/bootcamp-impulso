"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 29,
    profissao: "Desenvolvedora",
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "Pintor",
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática Discreta", "Programação"],
};
const monica = {
    nome: "Monica",
    idade: 28,
    materias: ["Matemática Discreta", "Programação"],
};
function listar(lista) {
    for (let item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);
