function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.abracar = function(){ //toda vez que eu criar uma funcao nova isso ja vai instanciado
    return 'abraçou';        //diferente do prorotype que só é atribuido quando chamado
  }
  this.andar = function() { //ele procura o metodo ANDAR dentro desse objeto, se nao tiver nada
    return 'Andou pelo objeto' //aí sim ele vai pro protoypo, porem aparece sempre esse primeiro
  }
};

Pessoa.prototype.andar = function() {
  return this.nome + 'Pessoa andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + 'Pessoa nadou';
}


const guga = new Pessoa('guga ', 19);

//console.log(Pessoa.prototype);
//console.log(guga.prototype) //guga é um objeto, e nao uma funcao, por isso retorna undefined

const pais = 'Brasil'
const cidade = new String('rio')


const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

//Transforma em um array  
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  }
}

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String
