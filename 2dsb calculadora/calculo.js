let notas = document.querySelectorAll(".notas");

for(i = 0; i < 5;  i++){

let notas = notas [i];
let tdNota = paciente.querySelector(".info-nota");

let nota = tdNota.textContent;

let total = nota / (nota+nota);
console.log(total);

let tdTotal = notas.querySelector(".info-total");

let NotaEhValido = true;
let TotalEhValido = true;

if(nota <= 0 || nota >= 10) {
    tdImc.textContent = "Nota invalida!";
    NotaEhvalido = false
}
//verifica se a altura é valida
if(total <=0 || total >=30) {
    tdTotal.textContent = "Está Reprovado!";
    TotalEhValida = false;
}
//verifica se o peso e a altura são validos
if(NotaEhValido && TotalEhValido){
    let total = nota / (total*total);
    tdtotal.textContent = total.toFixed(2);
} else {
    tdtotal.textContent = "Notas insuficientes!"
}  
}

