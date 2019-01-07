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
        console.log("Peso Inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("peso-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("altura-invalida");
    }

    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

/*---------------- FUNÇÃO ANÔNIMA ----------------
titulo.addEventListener("click", function(){
    console.log("Teste!")
}); */

/*---------------- FUNÇÃO NOMEADA ----------------
function mostraMensagem(){
    console.log("Olá eu fui clicado");
} */

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome;
    var peso = form.peso;
    var altura = form.altura;
    var gordura = form.gordura;

    console.log(altura);
    console.log(nome);
    console.log(peso);
    console.log(gordura);
});

//Verificar o erro que está ocorrendo para a VARIÁVEL botaoAdicionar.