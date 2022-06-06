# Introdução à Programação e Pensamento Computacional

---

<details>
  <summary>👩‍💻 Pensamento Computacional</summary>
  
  ---

### O que é Pensamento Computacional?

É o processo de pensamento envolvido na expressão de soluções em passos computacionais ou algoritmos que podem ser implementados no computador.

### Quatro Pilates do Pensamento Computacional

- Decomposição
- Reconhecimento de padrões
- Abstração
- Design de Algoritmos

### Conceitos de POO

- Classes
- Métodos
- Herança
- Polimorfismo

### Habilidades Complementares

- Raciocínio Lógico: É uma forma de pensamento estruturado que permite encontrar a conclusão ou determinar a resolução de um problema.

  - Indução
  - Dedução
  - Abdução

- Aperfeiçoamento: A partir de uma solução, econtrar um ponto de melhora e refinamento.
  - Encontrar solução eficiente
  - Otimizar processos
  - Simplificar linhas de códigos
  - Funções bem definidas

### Decomposição

"If you can't solve a problem, then there is an easier problem that you can solve: find it".

Dado um problema complexo, devemos quebra-lo em problemas menores. Portanto, problemas mais fáceis e gerenciáveis.

- Identificar ou coletar dados
- Agregar os dados
- Funcionalidade

### Padrões

Porque detectar padrões?
Generalizar, com o objetivo de ober resolução para problemas diferentes.

- Modelo base
- Estrutura invariante
- Repetição

### Abstração

Abstração na lógica é a operação intelectual que consiste em reunira numa classe geral, um conjunto de seres ou fenômenos similares.

Como classificar os dados?

- Características
- Pontos essenciais
- Generalizar

### Algoritmos

- Processamento de dados: O Computador recebe, manipula, armazena e processa dados
- Programas: São constituidos pelas instruções e contém passo a passo o que o computador precisa realizar.
- Sequencia de passos com objetivo

Como construir um algoritmo?

- Compreensão do problema
- Definição dados de entrada
- Definir processamento
- Definir dados de saída
- Utilizar um método de construção
- Teste e diagnóstico

Construção

- Narrativa
- Fluxograma
- Pseudocódigo

</details>

### Soma de um intervalo

```
let sum = (a,b) => {
let r = 0;
  while(a <= b) {
  	r += a;
    a++;
	}
  return r;
}

console.log(sum(1,100));
```

Ou podemos usar a Fórmula de Gauss -> (N \* (N1)) / 2

```
let sum = b => {
  return (b*(b+1))/2;
}
```

<details>
  <summary>👩‍💻 Introdução à lógica de programação</summary>
  
- Técnica Linear
    - Execução sequenciada
    - Uma única dimensão
    - Recursos limitados

- Técnica Estruturada

  - Escrita
  - Entendimento
  - Validação
  - Manutenção

- Técnica Modular
  - Simplificação do problema
  - Decomposição
  - Verificação por módulos

</details>

<details>
  <summary>👩‍💻 Fundamentos de Algoritmos</summary>

### Tipologia e variáveis

- Numéricos

  - Inteiros
  - Reais

- Lógicos (boolean)

  - Verdadeiro 1
  - Falso 0

- Variáveis
  - Mutáveis
  - Inconstante
  - Pode ser sobrescrita

### Instruções Primitivas

- Variáveis
- Constantes

### Estruturas Condicionais e Operadores

- If
- Else if
- Else

### Estruturas de Repetição

- For
- While
- do while

### O que são funções

São pedaço de código que realizam alguma tarefa e que são escritos separadamente para serem reutilizados e darem legibilidade ao código.

  </details>

<details>
  <summary>👩‍💻 Linguagens de Programação</summary>

### Como um computador entende um programa?

Os Compiladores pegam o código base, de alto nível e traduzem retornando o programa objeto (baixo nível) que pode ser interpretado pela máquina.

### Características de um programa

- Desenvolvimento de programas
  - Legibilidade
  - Redigibilidade
  - Confiabilidade
  - Custo

### Paradigmas de Programação

Forma de resolução de problemas com diretrizes e limitações específicas de cada paradigma utilizando linguagem de programação.

- Classificação

  - Orientação à objeto
  - Procedural
  - Funcional
  - Estruturado
  - Computação Distribuída
  - Lógico

### Primeiro contato com a programação

Como já sou macaco velho eu decidi fazer esta etapa em js mesmo

```
function mediaAluno(n1, n2) {
	return (n1 + n2)/2;
}
```

  </details>
