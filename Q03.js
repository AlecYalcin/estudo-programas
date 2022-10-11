function media() {
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;
    D = document.getElementById('D').value;

    media = (parseInt(A)+parseInt(B)+parseInt(C)+parseInt(D))/4;
    alert("Notas: " + A.concat(",",B,",",C,",",D) + "\nMédia: " + media);
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

// INPUT D
let inputD = document.createElement("input");
inputD.setAttribute("type","number");
inputD.setAttribute("id","D");

let labelD = document.createElement("label");
labelD.setAttribute("for","D")
labelD.appendChild(document.createTextNode("Digite o Quarto Número"))

body.appendChild(labelD)
body.appendChild(inputD)
// Criação do Botão
let button = document.createElement("input");
button.setAttribute("type","button")
button.setAttribute("value","CONFIRME")
button.setAttribute("onclick", "media()");

body.appendChild(button)
