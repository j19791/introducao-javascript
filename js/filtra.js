var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {//detectar quando o usuário começar a digitar no campo:


  var pacientes = document.querySelectorAll(".paciente");

      if (this.value.length > 0) {//sei foi digitado algo no campo de filtro, deixar invisivel aquela linha cujo nome nao corresponde ao valor do filtro

          for (var i = 0; i < pacientes.length; i++) {
              var paciente = pacientes[i];
              var tdNome = paciente.querySelector(".info-nome");
              var nome = tdNome.textContent;

              var expressao = new RegExp(this.value, "i"); // nossa Expressão Regular busque pelo o que o usário digitou. O modificador "i" é para indicar que estamos buscando por case-insensitive

              if (expressao.test(nome)) {// com a expressão regular em mãos, só precisamos pedir para ela testar se o nome do usuário bate com o que foi digitado.

                paciente.classList.remove("invisivel");



              } else {
                  paciente.classList.add("invisivel");
                  console.log(paciente.classList);
              }
          }
      } else {//nao há nada digitado - todas as linhas da tabela devem ficar visiveis
          for (var i = 0; i < pacientes.length; i++) {
              var paciente = pacientes[i];
              paciente.classList.remove("invisivel");
          }
      }
});
