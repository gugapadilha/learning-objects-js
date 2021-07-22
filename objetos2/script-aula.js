//OBJECT
//Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
const carros = {
  marca: 'Ford',
  ano: 2018,
}

const pessoa2 = new Object({
  nome: 'guga',
  idade: 19,
});


//MÉTODOS DE OBJECT
//Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor){
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' Acelerou'
  },
  buzinar(){
    return this.marca + ' Buzinou'
  }
}

const honda = Object.create(carro);
honda.init('Honda'); //caso esse Honda nao existisse ele passaria o "marca" que foi o primeiro a ser criado.
console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrai'); //MESMA COISA QUE FIZ COM O HONDA, LOGO ACIMA
console.log(ferrari.acelerar());                     //neste caso apenas passei o .init direto


const escolaridade = {
  ensino: 'completo',
  anos: 12,
  faculdade(){
    return this.anos + ' anos de estudos'
  },
}

const completo = Object.create(escolaridade);
completo.faculdade('completado')
console.log(completo.faculdade())


//OBJECT.ASSIGN()
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo

const automovel = {
  acelerar() {
    return 'Acelerou';
  },
  buzinar(){
    return 'Buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

Object.assign(moto, automovel, /*carro*/ )

console.log(moto)


//OBJECT.DEFINEPROPERTIES()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto2 = {
  capa: true
}

Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, //configurado para nunca poder ser alterado
    //writable: true //consigo mudar o valor de moto2, porém ainda nao consigo deletar
    //enumerable: true //torna enumerável
  }
});

delete moto2.capa //consigo deletar o capa, pois ele nao está configurado como o RODAS.
moto.rodas = 5; //continua 2, pois ele nao permite que mude
console.log(moto2)



//GET E SET
//É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const moto3 = {}
Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto3.velocidade = 200;
moto3.velocidade;
console.log(moto3)
// Velocidade 200



const moto4 = {
  capaMoto: true,
}

Object.defineProperties(moto4, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor){
      this._rodas = valor * 4 + ' Total Rodas'
    }
  }
});

console.log(moto4)



//OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade



//OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro4 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro4);
// ['marca', 'ano']
Object.values(carro4);
// ['Ford', 2018]
Object.entries(carro4);
// [['marca', 'Ford'], ['ano', 2018]]




//OBJECT.GETOWNPROPERTYNAMES(OBJ)
//Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro6 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro6);
// ['marca', 'ano']



//OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
//Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutose = ['Banana', 'Pêra']
console.log(Object.getPrototypeOf(frutose)) //MESMA COISA
console.log(Array.prototype) //MESMA COISA

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false




//OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
//Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.


const carro7 = {
  marca: 'Ford',
  ano: 2018,
}
//Object.freeze(carro7) congela carro pra que nao seja alterado (RETORNA FORD AINDA)
//Object.seal(carro7) não permite adicionar mais classes e nem deletar quando usa o seal
//carros.portas = 4;

//Object.preventExtensions() previne que acrescente novas propriedas, mas permite deletar antigas.


carro7.marca = 'Honda'
console.log(carro7);
console.log(Object.isFrozen(carro))



//PROPRIEDADES E MÉTODOS DO PROTÓTIPO
//Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

const frutas3 = ['Banana', 'Uva'];
frutas.constructor; //Array

const frase = 'Isso é uma String';
frase.constructor; //String

const numeros = 82
numeros.constructor; //Number



//{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.


const frutas5 = ['Banana', 'Uva'];

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true


//{}.ISPROTOTYPEOF(VALOR) 
const frutas6 = ['Banana', 'Uva'];
Array.prototype.isPrototypeOf(frutas); // true



const frutas7 = ['Banana', 'Uva', 'Melancia']
const frase2 = 'Oi frase'
const somar = function(a, b){
  return a + b
}

const carro5 = {
  marca: 'Ford'
}

console.log(frutas7.toString());

console.log(Object.prototype.toString.call(frutas7)); // objeto do tipo ARRAY
console.log(Object.prototype.toString.call(frase)); // objeto do tipo STRING
console.log(Object.prototype.toString.call(carro5)); // objeto do tipo OBJETO