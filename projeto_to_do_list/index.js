window.onload = function (e) {
  var input = document.getElementById("textoInput");
  var botaoAdicionar = document.getElementById("botaoAdicionar");
  var lista = document.getElementById("lista");

  function teste() {
    let todo = input.value;
    console.log(todo);

    // tenho que ter um li com dois elementos
    // a checkbox e a label

    let listItem = document.createElement("li");
    let minhaCheckbox = document.createElement("input");
    minhaCheckbox.type = "checkbox";
    minhaCheckbox.value = todo;

    let checkLabel = document.createElement("label");
    checkLabel.innerHTML = " " + todo;

    listItem.appendChild(minhaCheckbox);
    listItem.appendChild(checkLabel);
    lista.append(listItem);

    input.value = "";
  }

  botaoAdicionar?.addEventListener("click", () => teste());
};
