console.log("Olá Mundo");
document.write("Olá Navegador!");

//string

var nome = window.prompt("Informe o Nome do Aluno");
var nota1 = window.prompt("Digite a Nota1");
nota1 = parseFloat(nota1);
var nota2 = window.prompt("Digite a Nota2");
nota2 = parseFloat(nota2);
var nota3 = window.prompt("Digite a Nota3");
nota3 = parseFloat(nota3);
var nota4 = window.prompt("Digite a Nota4");
nota4 = parseFloat(nota4);
var media = (nota1 + nota2 + nota3 + nota4)/4;
var mensagem = nome + ", você obteve a média : " + média;
window.alert(mensagem);