/*---------------- FUNÇÃO ANÔNIMA ----------------
titulo.addEventListener("click", function(){
    console.log("Teste!")
}); */

/*---------------- FUNÇÃO NOMEADA ----------------
function mostraMensagem(){
    console.log("Olá eu fui clicado");
} */

var titulo = document.querySelector(".titulo");
titulo.textContent = "aChurch";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;
    
    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("peso-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        alturaValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("altura-invalida");
    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}