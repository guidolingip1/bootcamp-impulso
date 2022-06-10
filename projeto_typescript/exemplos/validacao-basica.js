let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function somarNumeros(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return Number(n1) + Number(n2);
  }
}

button.addEventListener("click", () =>
  console.log(somarNumeros(input1.value, input2.value))
);
