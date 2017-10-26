var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) { //escutador de eventos: executa a função qdo o botao for clicado (evento click)
    //console.log("Fui clicado!");
    event.preventDefault();//não faz o componente (botão) submeter o formulário (evento padrão)
    var form = document.querySelector("#form-adiciona"); //seleciona o form

    var paciente = obtemPacienteDoFormulario(form);

    //var pacienteTr = document.createElement("tr"); //cria um elemento tr

    /*var nomeTd = document.createElement("td"); //cria cada celula da nova linha
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");*/


    /*var nomeTd = montaTd('nome', 'info-nome');
    var pesoTd = montaTd('peso', 'info-peso');
    var alturaTd = montaTd('altura', 'info-altura');
    var gorduraTd = montaTd('gordura', 'info-gordura');
    var imcTd = montaTd('imc', 'info-imc');*/

    /*nomeTd.textContent = nome; //os valores de cada campo são incluidos nos tds criados
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);*/

    /*pacienteTr.appendChild(nomeTd); //adiciona ao tr uma td
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);*/

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;//nao roda o código abaixo caso tenha mensagens de erro
    }

    adicionaPacienteNaTabela(paciente);

    //var tabela = document.querySelector("#tabela-pacientes");

    //tabela.appendChild(pacienteTr); //adiciona a tabela o tr criado

    form.reset();//limpa o formulario depois de clicado o botão

    var ulerros = document.querySelector('#mensagens-erro');
    ulerros.innerHTML = "";
});

//no addEventListener nao passar () no nome da função senão será associado o retorno da função.


function obtemPacienteDoFormulario(form){

    var paciente = {
        nome : form.nome.value, //pega os valores de cada campo do form
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function montaTr(paciente) {
    //Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return pacienteTr;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");//colocar elementos dentro de um array
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {//percorre o array de erros. erro é o elemento sendo percorrido
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//função utilizada em buscar-pacientes
function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
