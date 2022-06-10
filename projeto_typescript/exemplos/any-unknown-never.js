"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
let stringTeste = "verificar";
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";
let stringTeste2 = "Agora vai";
// O unknown é obrigado a fazer uma validação antes de atribuir uma propriedade
if (typeof unknownValor === "string") {
    stringTeste2 = unknownValor;
}
// Como o throw interrompe o código, usa-se o never como retorno pois o código "não termina", pois foi interrompído
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("eita deu erro", 500);
