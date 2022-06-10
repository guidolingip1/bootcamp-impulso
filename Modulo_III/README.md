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

## 🚀 Manipulando a D.O.M com JavaScript

### O que é DOM

DOM significa Document Object Model, o DOM é um padrão de como acessar e modificar os elementos HTML de uma página.

### O que é BOM

BOM significa Browser Object Model
é tudo o que está dentro do objeto Window.

### Métodos

```javascript
document.getElementById("titulo");
document.getElementByTagName("li");
document.getElementByClassName("textos");
document.querySelectorAll(".primeira-classe .segunda-classe");
document.querySelectorAll("li .opcao");
document.createElement(element);
document.removeChild(element);
document.appendChild(element);
document.replaceChild(element);
```

### Trabalhando com estilos

```javascript
meuElemento.classList.add("novo-estilo");
meuElemento.classList.remove("classe");
meuElemento.classList.toggle("dark-mode");

// acessando o css diretamente
document.getElementsByTagName("p").style.color = "Blue";
```

### Eventos

- mouseover
- mouseout
- click
- dbclick
- change
- load
- addEventListener

## 🚀 JavaScript Assíncrono

- Síncrono: Os processos esperam uns pelos outras.
- Assíncrono: Os processos podem ocorrer ao mesmo tempo.

### Promises

Objeto de processamento assíncrono, pode ser resolvido ou rejeitado.

```javascript
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Resolvida");
    }, 2000);
  });

  await myPromise
    .then((result) => result + " Passando pelo then")
    .then((result) => result + " e agora acabou")
    .catch((err) => console.log(err));
  return resolved;
}
```

### Consumindo APIs

API significa Application Programming Interface, uma API é uma forma de intermediar os resultados do back-end.

- API: Application Programming Interface
- JSON: JavaScript Object Notation
- fetch: Utilizado para consumir APIs

## 🚀 Orientação a Objetos

### Paradigmas de programação

- Imperativo: Foca em como vamos resolver os problemas.
- Delcarativo: Foca em o que vamos fazer.

Pilares

- Abstração
- Herança
- Encapsulamento
- Polimorfismo

### Protótipos e classes

JavaScript não possui classes nativamente, todas as classes são objetos e a herança se dá por protótipos.

```javascript
class Meal {
  constructor(food) {
    this.food = food;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }
  eat() {
    return "😊 ";
  }
}
```

### Atividade prática

```javascript
class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return "Operacao negada";
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

class ContaCorrente {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "poupanca";
  }
}

class ContaUniversitaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "universitaria";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operacao Negada!";
    }

    this.saldo = this._saldo - valor;
  }
}
```

## 🚀 Introdução ao Typescript

### Vantagens e desvantagens do TypeScript

Faz com que o desenvolvedor estruture seu código de forma a minimizar qualque tipo de erro.

- Vantagem: Minimiza erros.
- Desvantagem: Demora um pouco a mais para desenvolver.

```typescript
// Função
function soma(a: number, b: number) {
  return a + b;
}

soma(1, 2);

// Interface
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquatico';
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno'| 'medio'|'grande";
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'aquatico';
}

const felino: IFelino = {
  nome: 'Leao';
  tipo: 'Terrestre';
  visaoNoturna: true;
}

// Types: Normalmente são usados para unir interfaces
type IDomestico = IFelino | ICanino;
```

### Tratando a tag input

```typescript
const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});
```

### O que são generic types

```typescript
function adicionaApendiceALista<T>(array: any[], value: T) {
  return array.map((item) => item + value);
}

console.log(adicionaApendiceALista([1, 2, 3], 1));
console.log(adicionaApendiceALista(["1", "2", "3"], "1"));
```

### Desenvolvimento de condicionais a partir de parâmetros

```typescript
interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ("cargo" in usuario) {
    // redirecione..
  }
}
```
