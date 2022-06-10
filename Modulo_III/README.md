# Módulo III - Dominando a Linguagem de Programação JavaScript

---

## 🚀 O que é JavaScript?

- Interpretada
- Baseada em protótipos
- Multiparadigma
- Utilizada em aplicações web
- Segue o padrão ECMAScript

## 🚀 Recursos Básicos da linguagem

Aula prática.

```javascript
function soma(a, b) {
  return a + b;
}

soma(3, 5);
```

## 🚀 Console

### Como executar um arquivo JS?

- Usar dev tools dos navegadores
- Usar o NodeJS

## 🚀 JavaScript em uma página da web

### Estrutura de projeto

- assets: Imagens, sounds, videos, js, css (normalmente em react js e css ficam nas pastas dos componentes)
- index.html: html5..

### Inserindo JavaScript em uma página HTML

```javascript
<script src="./scripts.js">
```

### Interagindo com Elementos do DOM

Aula prática

## 🚀 Mercado de Trabalho

## 🚀 Frameworks e Bibliotecas

- VueJS
- Angular
- React
- jQuery

## 🚀 Sintaxe Básica em JavaScript

## 🚀 O que é JavaScript

O JavaScript é uma linguagem de programação de alto nível, que integra o desenvolvimento de apps e páginas web.

## 🚀 Entendendo variáveis e seus valores

### Como funciona a tipagem em JavaScript

A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado.

A tipagem em JavaScript é fraca, isso significa que a declaração de dados acontece de modo dinâmico.

Ex: Ao criarmos uma variável com valor entre aspas, javascript já converte o valor para String.

- Boolean
- number
- string
- function

## 🚀 Vetores e objetos

Arrays são um tipo de lista ou matriz de variáveis.

```javascript
let array = ["string", "teste"];
```

### Métodos de arrays

- forEach
- push
- pop
- shift
- unshift
- indexOf
- splice
- slice

### Objetos

```javascript
let xicara = {
  cor: "azul",
  tamanho: "p",
  funcao: tomarCafe(),
};
```

## 🚀 Funções e suas particularidades

```javascript
function funcao() {
  console.log("Tudo certo");
}

function mensagem(primeiro, segundo) {
  console.log(primeiro, segundo);
}
mensagem("tudo certo ", "jovem");

var funcao = () => {
  console.log("aaaaaaaaaaaaaaaaa");
};

funcao();
```

## 🚀 Variáveis e tipos

- var
- let
- const

- String
- Numbers
- Booleans
- Arrays
- Objetos
- Empty
- Undefined
- Null

```javascript
let frase1 = "socorrammesubinoonibusemmarrocos";

let palindromo = (frase) => {
  for (let i = 0, j = frase.length - 1; i <= frase.length; i++, j--) {
    if (frase[i] !== frase[j]) {
      return "Nao eh palindromo";
    }
  }
  return "Eh palindromo";
};

console.log(palindromo(frase1)); // Eh palindromo
```

## 🚀 Funções

### Tipos de função

```javascript
function soma(a, b) {
  return a + b;
}

let soma = (a, b) => {
  return a + b;
};

const soma = (function (a, b) {
  return a + b;
})(1, 2);

const calc = function (operacao, num1, num2) {
  return operacao(num1, num2);
};
```

### Parametros

Os parametros podem possuir um valor padrão

```javascript
function exponencial(array, num = 1) {
  //faça algo
}
function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

- Spread: Cada elemento de um array, vira um elemento independente
- Rest: O que era elemento independente vira parte de um array;

## 🚀 O que é This

A palavra this faz uma referência ao contexto onde foi inserida.

## 🚀 Tipos de erros

- ECMAScript
- DOMException

### Tratamento de erros

- Throw
- Try...catch
- Finally

### Objeto Error

```javascript
new Error(message, fileName, lineNumber);

const MeuErro = new Error("Mensagem Inválida");

throw MeuErro;
```
