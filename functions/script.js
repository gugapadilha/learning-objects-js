//Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.
const perimetro = new Function('lado', 'return lado * 4')


//Function.length retorna o total de argumentos da função.
//Function.name retorna uma string com o nome da função
function somar(n1, n2){
  return n1 + n2;
}

console.log(somar.name);

//FUNCTION CALL
//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
  marca: 'xisdead',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018


//THIS
//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().


const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

//carros.forEach.call(carros, (item) => {
 // console.log(item);
//}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta



//EXEMPLO REAL
//O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul');

const li = {
  element: document.querySelector('li')
}



ul.ativo.call(li, 'ativo')
//ul.ativo('ativar')
console.log(ul)


//ARRAY'S E CALL
//É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).


const frutas2 = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas2); //MESMA COISA QUE frutas.pop()
//frutas.pop();


//ARRAY-LIKE
//HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

const arrayLike = { //OBJETO ARRAYLIKE, É TIPO UM ARRAY
  0: 'item 1',
  1: 'item 2',
  2: 'item 3',
  lenght: 3,
}

const li2 = document.querySelectorAll('li');
const arrayLi2 = Array.from(li);


const filtro = Array.prototype.filter.call(li2, (item) => {
  return(item.classList.contains('ativo'))
});

console.log(filtro)
console.log(li)