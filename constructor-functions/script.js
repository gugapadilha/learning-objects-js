// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(this.nome + 'andou')
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function pessoas() {
  this.nome = 'nome'
  this.idade = 0
}

const pessoa1 = new pessoas()
  pessoa1.nome = 'joão'
  pessoa1.idade = 20

  const pessoa2 = new pessoas()
  pessoa2.nome = 'maria'
  pessoa2.idade = 25

  const pessoa3 = new pessoas()
  pessoa3.nome = 'bruno'
  pessoa3.idade = 15

  //OU
/*
  const joao = new Pessoa('João', 20);
  const maria = new Pessoa('Maria', 25)
  const bruno = new Pessoa('Bruno', 15)
*/


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function(classe) { //this add Class é o metodo q vai receber a classe da funcao
    elementList.forEach((item) => { //quando ativo,via pegar a lista de elemntos pra cada item da lista
      element.classList.add(classe); //e vai adicionar essa classe que foi passada
    })
  }
  this.removeClass = function (classe) {
    elementList.forEach((element) =>{
      element.classList.remove(classe);
    })
  }
}

const listaItens = new Dom('li')
const ul = new Dom('ul');

listaItens.addClass('ativar');
listaItens.addClass('ativar-ul');