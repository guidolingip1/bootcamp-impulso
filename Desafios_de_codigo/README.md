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
  <summary>[✔] 🛩 Pedra, Papel, Ataque Aéreo</Summary>

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

<details>
  <summary>[✔] 👌 Array Pares</Summary>

```javascript
var array = [2, 3, 5, 7, 11, 13, 18, 34];

array.map((item) => {
  if (item % 2 === 0) console.log(item);
});
```

</details>

<details>
  <summary>[✔] 🍹 Réveillon de Copacabana</Summary>

```javascript
let T = parseInt(gets());
let N;

while (T != 0) {
  for (let i = 1; i <= T; i++) {
    N = parseInt(gets());
    N % 2 === 0 ? print(N * 2 - 2) : print(N * 2 - 1);
  }
  T = parseInt(gets());
}
```

</details>

<details>
  <summary>[✔] 🐉 Dragão Berrador World</Summary>

```javascript
var s = gets().split(" ");

let n = parseInt(s[0]);
let min = parseInt(s[1]);
let max = parseInt(s[2]);

let altura,
  conta = 0;
for (let x = 0; x < n; x++) {
  altura = parseInt(gets());
  if (altura >= min && altura <= max) {
    conta++;
  }
}
print(conta);
```

</details>
