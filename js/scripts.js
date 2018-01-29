//array de notas/ variavel que representa a nota
var notas = [];

// Lista
function onUpdate(secao) {
  var innerHTML = "";

  for (var index = 0; index < notas.length; index++) {
    if (notas[index].editando) {
      // templete input + textarea
      innerHTML +=
        '<form class="note">' +
        '<input class="note__title" id="inputTitle" type="text" name="title"  autofocus value="' +
        notas[index].titulo +
        '" placeholder="Título"/>' +
        '<textarea class="note__body" id="inputText" name="inputText" rows="5" placeholder="Criar uma nota...">' +
        notas[index].texto +
        "</textarea>" +
        '<button class="note__control" type="button" onclick="adicionarNota(this.form, this.form.parentElement, this.form.title, this.form.inputText, ' +
        index +
        ' )">' +
        "Concluído" +
        "</button>" +
        "</form>";
    } else {
      innerHTML +=
        '<form class="note" id="formulario" onClick="onEditClick(' +
        index +
        ', this.parentElement)">' +
        '<button class="note__control" type="button" onclick="onRemoveNota(' +
        index +
        ', this.form.parentElement)">' +
        '<i class="fa fa-times" aria-hidden="true"></i>' +
        "</button>" +
        '<h1 class="note__title">' +
        notas[index].titulo +
        "</h1>" +
        '<p class="note__body">' +
        notas[index].texto +
        "</p>" +
        "</form>";
    }
  }

  secao.innerHTML = innerHTML;
}

function adicionarNota(formulario, section, inputTitle, inputText, index) {
  if (notas[index]) {
    // pegar a nota
    // trocar titulo e o texto dela
    notas[index].titulo = inputTitle.value;
    notas[index].texto = inputText.value;
    notas[index].editando = false;

    // chamar o atualizar secao
    onUpdate(section);
  } else {
    // Criar um variavel nota
    var nota = {
      titulo: inputTitle.value,
      texto: inputText.value,
      editando: false
    };
    // adiciona nota dentro da lista
    notas.push(nota);

    // Atualiza a secao de notas
    onUpdate(section);

    console.log(notas);

    // limpar o formulario
    formulario.reset();
  }
}

function onRemoveNota(index, secao) {
  // Quero excluir um indice do meu array
  // Splice para excluir
  // 1 pois eu quero excluir um unico indice do meu array
  notas.splice(index, 1);

  //Atualiza a secao de notas que foram excluidas
  onUpdate(secao);
}

function onEditClick(index, secao) {
  // pegar nota e setar editando = true
  notas[index].editando = true;

  // chamo o atualiza tela
  onUpdate(secao);
}
