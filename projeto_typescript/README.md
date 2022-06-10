# Aprendendo Typescript

## Tipos básicos

```
// number
let numero: number = 100;

// string
let frase: string = "Geração Tech Unimed-BH | Fullstack";

// boolean
let assistiuAsAulas: boolean = true;

// array
let stack: string[] = ["TypeScript", "JavaScript", "Angular.."];
```

## Objetos

```
const eu = {
  nome: "Guilherme",
  idade: 26,
  profissao: "Desenvolvedor",
};
```

## Interfaces

```
interface Dev {
  nome: string,
  idade: number,
  profissao: string,
}

const eu: Dev = {
  nome: "Guilherme",
  idade: 26,
  profissao: "Desenvolvedor",
};
```

## Enum

```
enum CategoriasDeFilmes {
  Terror,
  Suspense,
  Comedia,
  Drama
}

const filme = {
    name: "Forrest Gump",
    categoria: CategoriasDeFilmes.Drama,
    melhorFilmeJaProduzido: true
}
```
