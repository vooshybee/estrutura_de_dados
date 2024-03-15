import { maior_n } from "./maior_recursivo_meio_model";

let a:number[] = [1, 3, 9, 12 ,15, 24];
console.log("array original:");
console.log(a);
let maior = maior_n(a);
console.log("O maior numero do array é:", maior)