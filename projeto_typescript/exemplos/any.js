"use strict";
let valorAny;
valorAny = 3;
valorAny = "Aaa";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "testão";
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
somarStrings("olá", ", como vai?");
