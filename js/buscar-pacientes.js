var botaoAdicionar = document.querySelector("#buscar-pacientes");

  botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest(); //cria objeto que faz requisições ajax - assincronas - nao trava o js

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //configuração do objeto criado

    //escuta a resposta - quando carrega-la
    xhr.addEventListener("load", function() {

      var erroAjax = document.querySelector("#erro-ajax");

      if (xhr.status == 200) { //ok
        erroAjax.classList.add("invisivel"); //a mensagem de erro vai desaparecer caso a resposta esteja ok
        var resposta = xhr.responseText; //a resposta do servdor - uma string
        var pacientes = JSON.parse(resposta); //transforma a string json em objeto array de pacientes

        pacientes.forEach(function(paciente) {
              adicionaPacienteNaTabela(paciente);
        });

      }else{
        erroAjax.classList.remove("invisivel");//a mensagem de erro vai aparecer na tela caso algo de errado na requisição
      }



    });


    xhr.send(); //envia a requisição

});
