var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event) {//clique duplo na tabela

  if (event.target.tagName == 'TD') {//target - elemento que sofre o evento de clique (td). parentNode: pai do td(tr); remove tr do elemtno clicado na tabela
        event.target.parentNode.classList.add('fadeOut'); //insere classe css de animação ao clicar na tabela

        setTimeout(function() { //atraso  de 500 ms para executar a função de remover
            event.target.parentNode.remove()
        }, 500);
    }
});
