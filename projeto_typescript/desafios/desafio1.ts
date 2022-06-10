/*
    Como podemos rodar isso em um arquivo .ts sem causar erros?
    let employee2 = {};
    employee2.code = 10;
    employee2.name = "John";
    Temos diversas formas de resolver
*/

// Forma 1
const employee1 = {
  code: 10,
  name: "John",
};

// Forma 2
interface Empregado {
  code: number;
  name: string;
}

const employee: Empregado = {
  code: 10,
  name: "John",
};

// Forma 3
const employee2: { code: number; name: string } = {
  code: 10,
  name: "John",
};
