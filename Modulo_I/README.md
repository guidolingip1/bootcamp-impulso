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

---

# Introdução ao Git e ao GitHub

### Entenda o que é Git e sua importância

O Git é um sistema de controle de versões distribuido.

### Navegação via command line interface e instalação

<details>
  <summary>👩‍💻 Windows</summary>

- dir: lista arquivos de um diretório
- cd: navega entre as pastas
- cls: limpa o terminal do windows
- mkdir: cria uma pasta com o nome passado "mkdir workspace"
- rmdir: remove uma pasta
- echo hello > hello.txt: cria um txt com o texto hello
- del: deleta arquivos de uma pasta

  </details>

<details>
  <summary>👩‍💻 Linux</summary>
  
- ls: lista arquivos de um diretório
- cd: navega entre as pastas
- clear: limpa o terminal do windows
- mkdir: cria uma pasta com o nome passado "mkdir workspace"
- rm -rf: 
- echo hello > hello.txt: cria um txt com o texto hello
- del: deleta um arquivo ou pasta
  </details>

### Entendo como o git funciona por baixo dos panos

SHA - Secure Hash Algorithm, algoritmo de criptografia que gera 40 digitos únicos, serve para garantir que um arquivo não foi modificado, se uma vírgula mudar, o código SHA gerado será completamente diferente.

### Objetos internos do git

- Blobs: "arquivos"
- Trees: Apontam para os blobs
- Commits: Mensagem que se utiliza quando fazemos uma alteração, essa mensagem por sua vez tem seu próprio SHA.

### Primeiros comandos com o Git

- init: inicia um projeto git na pasta atual
- git config --global: usado para setar configurações globais como email e senha
- git add \*: adiciona todos os arquivos.
- git commit -m "": usado para fazer os commits, autoexplicativo

### Ciclo de vida dos arquivos no git

- Untracked: Arquivo não está sendo monitorado pelo git
- Unmodified: Arquivo não sofreu nenhuma alteração desde o último commit
- Modified: Arquivo sofreu alteração
- Staged: Arquivo que está pronto para o commit, após o commit o arquivo vira unmodified
