//Comentário em linha
//Exibir no terminal
console.log("Olá Mundo");
//Exibir no navegador
document.write("Olá Navegador!");
//um alerta
alert("Alerta de confirmação!");

//string

var nome = window.prompt("Informe o Nome do Aluno:");
// Guardar a primeira nota
var nota1 = window.prompt("Digite a Nota 1");
// converte a nota1 em texto para decimal
nota1 = parseFloat(nota1);
// Guardar a segunda nota
var nota2 = window.prompt("Digite a Nota 2");
//converte a nota2 em texto para decimal
nota2 = parseFloat(nota2);
//calculo a média das duas notas
var media = (nota1 + nota2)/2;
//Gero a mensagem de exibição do nome e da média do aluno
var mensagem = nome + ", você obteve a média : " + media;
window.alert(mensagem);
