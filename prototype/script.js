// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const guga = new Pessoas('guga', 'padilha', 19);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIELEMENT // li.constructor. name
li.click; //FUNCTION // li.click.constructor.name
li.innerText; //STRING
li.value; //NUMBER                  //CADA UM DESSES TEM ACESSO A DIFERENTES PROPRIEDADES E METODOS
li.hidden; //BOOLEAN
li.offsetLeft; //NUMBER
li.click(); //UNDEFINED

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //STRING
