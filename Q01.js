function maiorMenor() {
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;

    alert("Lista: " + A.concat(",",B,",",C) + "\nMaior: " + Math.max(A,B,C) + "\nMenor: " + Math.min(A,B,C))
}

// Manipulando o DOM
let body = document.body; 
// INPUT A
let inputA = document.createElement("input");
inputA.setAttribute("type","number");
inputA.setAttribute("id","A");

let labelA = document.createElement("label");
labelA.setAttribute("for","A")
labelA.appendChild(document.createTextNode("Digite o Primeiro Número"))

body.appendChild(labelA)
body.appendChild(inputA)
// INPUT B
let inputB = document.createElement("input");
inputB.setAttribute("type","number");
inputB.setAttribute("id","B");

let labelB = document.createElement("label");
labelB.setAttribute("for","B")
labelB.appendChild(document.createTextNode("Digite o Segundo Número"))

body.appendChild(labelB)
body.appendChild(inputB)
// INPUT C
let inputC = document.createElement("input");
inputC.setAttribute("type","number");
inputC.setAttribute("id","C");

let labelC = document.createElement("label");
labelC.setAttribute("for","C")
labelC.appendChild(document.createTextNode("Digite o Terceiro Número"))

body.appendChild(labelC)
body.appendChild(inputC)
// Criação do Botão
let button = document.createElement("input");
button.setAttribute("type","button")
button.setAttribute("value","CONFIRME")
button.setAttribute("onclick", "maiorMenor()")

body.appendChild(button)