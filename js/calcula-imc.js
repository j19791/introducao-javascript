var titulo = document.querySelector(".titulo");//selecionar o elemento da página atraves da classe
// # seleciona atraves do id
titulo.textContent = "Aparecida Nutricionista";//atribui o conteudo no h1

//var paciente = document.querySelector("#primeiro-paciente"); //selecionando o conteudo que pertence a classe primeiro-paciente (Tr)
var pacientes = document.querySelectorAll(".paciente");  //atribui a um array, todos os elementos com a classe paciente

for(i=0;i<pacientes.length;i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso"); //selecionando o td com id .info-peso do 1o. paciente
	var tdAltura = paciente.querySelector(".info-altura");

	var peso = tdPeso.textContent; //conteudo do td
	var altura = tdAltura.textContent;

	//var imc = peso / (altura * altura); //precedencia é da esquerda p/ direita - incluir parenteses

	var tdImc = paciente.querySelector(".info-imc");

	//tdImc.textContent = imc; //atribuindo ao valor do td o valor calculado do imc



	if(peso <= 0 || peso > 1000){
	    console.log("Peso inválido");
	}

	if(peso <= 0 || peso > 1000){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	}

	if(altura <= 0 || altura >= 1000){
	    console.log("Altura inválida");
	    tdImc.textContent = "Altura inválida!";
	}

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	//if(peso <= 0 || peso > 1000){
	if(!pesoEhValido){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	    paciente.classList.add("paciente-invalido"); //ira artibuir a classe do css no tr
	    pesoEhValido = false;
	}

	//if(altura <= 0 || altura >= 1000){
	if(!alturaEhValida){
	    console.log("Altura inválida");

	    tdImc.textContent = "Altura inválida!";
	    paciente.classList.add(".paciente-invalido");
	    alturaEhValida = false;
	}

	if(pesoEhValido && alturaEhValida){
	    var imc = calculaImc(peso,altura);
	    tdImc.textContent = imc.toFixed(2);//concatena em 2 casas decimais
	}
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc;
}


function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
