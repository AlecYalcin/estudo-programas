// Manipulando o DOM
let body = document.body; 
// INPUT A
let idade = document.createElement("input");
idade.setAttribute("type","number");
idade.setAttribute("id","idade");
body.addEventListener("change", function() {
    if (document.querySelector("#idade").value >= 18) {
        alert("Maior de Idade");
    } else {
        alert("Menor de Idade");
    }
});

let label = document.createElement("label");
label.setAttribute("for","idade")
label.appendChild(document.createTextNode("Digite sua Idade"))

body.appendChild(label)
body.appendChild(idade);
