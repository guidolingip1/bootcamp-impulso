// Acho que por o arquivo ser muito simples, o js executa antes do HTML
// Consequentemente retorna os elementos como null
// Logo eu tive que usar um Window.onload para somente executar apos o html executar.

window.onload = function (e) {
  var botaoSoma = document.getElementById("somar");
  var botaoSubtracao = document.getElementById("subtrair");
  var valorAtualWrapper = document.getElementById("valorAtual");
  var valorAtual = 0;

  function incrementa() {
    valorAtual += 1;
    console.log(valorAtual);
    valorAtualWrapper.innerHTML = valorAtual;
  }

  function decrementa() {
    valorAtual -= 1;
    valorAtualWrapper.innerHTML = valorAtual;
  }

  botaoSubtracao?.addEventListener("click", () => decrementa());
  botaoSoma?.addEventListener("click", () => incrementa());
};
