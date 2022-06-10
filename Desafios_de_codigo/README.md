<details>
  <summary>[✔] 🦆 Patinhos</Summary>

```javascript
let n = parseInt(gets());

while (n != -1) {
  n <= 0 ? print("0") : print(n - 1);
  n = parseInt(gets());
}
```

</details>

<details>
  <summary>[] 🛩 Pedra, Papel, Ataque Aéreo</Summary>

```javascript
let N = parseInt(gets());
let jogador1, jogador2;

function potencia(jogador) {
  switch (jogador) {
    case "ATAQUE":
      return 3;
    case "PEDRA":
      return 2;
    case "PAPEL":
      return 1;
  }
}

for (let i = 0; i < N; i++) {
  jogador1 = gets().toUpperCase();
  jogador2 = gets().toUpperCase();

  if (jogador1 === "ATAQUE" && jogador2 === "ATAQUE") {
    print("Aniquilacao mutua");
  } else if (jogador1 === "PEDRA" && jogador2 === "PEDRA") {
    print("Sem ganhador");
  } else if (jogador1 === "PAPEL" && jogador2 === "PAPEL") {
    print("Ambos venceram");
  } else {
    potencia(jogador1) > potencia(jogador2)
      ? print("Jogador 1 venceu")
      : print("Jogador 2 venceu");
  }
}
```

</details>

<details>
  <summary>[✔] 👩‍💻 Tri-du</Summary>

```javascript
var s = gets().split(" ");
let A = parseInt(s[0]);
let B = parseInt(s[1]);
let C;
if (A > B) {
  C = A;
} else if (B > A) {
  C = B;
} else {
  C = A;
}
print(C);
```

</details>
