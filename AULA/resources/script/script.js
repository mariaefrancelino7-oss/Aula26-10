// funções no javascript

// function sayHello() {
//   return "Hello World";
// }

// let message = sayHello ();

// console.log(message)

// function saudacao() {
//     return "seja bem vindo!";

// }

// let mensagem = saudacao(); 
// console.log(mensagem);

// function multiply(a, b) {
//     if(isNaN(a) ||isNaN(b)){
//         return "Erro, digite um valor válido"
//     }
//   return a * b;
// }
// let num1 = Number(prompt("Digite um número"));
// let num2 = Number(prompt("Digite mais um número"));

// let produto = multiply(num1,num2);
// console.log(produto);

// function soma(a, b) {
//      if(isNaN(a) ||isNaN(b)){
//      return "Erro, digite um valor válido"
//     }
//   return a + b;
// }
// let num1 = Number(prompt("Digite um número"));
// let num2 = Number(prompt("Digite mais um número"));

// let produto = soma(num1,num2);
// console.log(produto);


// function verificarPar (a,b){
//         if(isNaN(a) || isNaN(b)); {
//             return "Erro, insira apenas valores válidos.";
//         }
//         if(a % 2 === 0 && b % 2 === 0) {
//             return "par";
//         }
//          else if (a % 2 === 0 || b % 2 === 0){
//             return "um dos números é impar";
//          }
//          else {
//             return "impar"
//          }

// }
//     let n1 = Number(prompt("Digite um núnero."));
//     let num2 = Number(prompt("Digite o segundo número."));
//     let resultado = verificarPar(n1, n2);
//     console.log(resultado);
       
    
function calcularMedia(a,b,c){
    return (a + b + c) / 3
}

function verificaAprovacao(media){
    if(media >= 7){
        return "Aprovado";
    }
    else if(media >= 5 && media < 7){
        return "Recuperação";
    }
    else{ 
        return "Reprovado";
    }
}

let nota1 = Number(prompt("Digite sua nota:"));
let nota2 = Number(prompt("DIigite uma nota:"));
let nota3 = Number(prompt("Digite uma nota:"));

let mediaAluno = calcularMedia(nota1,nota2,nota3);
let resultado = verificaAprovacao(mediaAluno);
console.log(resultado)
