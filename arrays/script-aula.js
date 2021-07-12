//ARRAYS

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda')

carros[2] = 'Ferrari'; //substitui o valor na posicao 2
carros[3] = 'Kia'; // adiciona na posicao 3 (ou seja, criou uma nova)
carros[20] = 'Kia'; //se nao tiver, ele preenche com espaços em brancos até chegar na posicao desejada

console.log(carros.length)


//const li = document.querySelectorAll('li');
//const arrayLi = Array.from(li )
//console.log(li) //parecido com um array
//console.log(arrayLi) //transformado em um array mesmo



const obj = {
  0: 'guga',
  1: 'yoda',
  2: 'kakashi',
  length: 3, // preciso ter essa propriedade LENGHT pra transformar um obj em um array
}

const objArray = Array.from(obj);
console.log(objArray)

//ARRAY.ISARRAY()
let li = document.querySelectorAll('li'); // NodeList
Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true


//ARRAY.OF(), ARRAY() E NEW ARRAY()

Array.of(10); // [10] //CRIA UM ARRAY COM O VALOR 10
Array.of(1,2,3,4); // [1,2,3,4] //CRIA ARRAY NA SEQUENCIA
new Array(5); // [,,,,] //CRIA UM ARRAY VAZIO COM 5 ESPACOS
Array(5); // [,,,,]     //CRIA UM ARRAY VAZIO COM 5 ESPACOS
Array(1,2,3,4); // [1,2,3,4] //CRIA UM ARRAY NA SEQUENCIA


//PROPRIEDADES E MÉTODOS DO PROTOTYPE

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]; //array dentro de uma array (RETORNA 3 ITENS)
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

console.log(frutas[0].length) //PEGANDO O LENGHT DA STRING "BANANA" QUE ESTA NA POSICAO 0 - RETORNANDO 6
console.log(frutas[2][0].length) //BUSCANDO O SEGUNDO ITEM, E PEGANDO A POSICAO 0 DELE, OU SEJA ''UVA ROXA''


const instrumento = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); //vai organizar a array por ordem alfabética

const idades = [32,31,33,43,1,12,8]
idades.sort(); //ele organiza por casas decimais, mas nao arruma em ordem

console.log(instrumentos)
console.log(idades)


//[].UNSHIFT() E [].PUSH()

const carro = ['Ford', 'Fiat', 'VW'];
carro.unshift('kia', 'ferrari') //adiciona o elemento no inicio da array e retorna a propria array
carro.push('paratti', 'gol') //adiciona o elemento no final do array

console.log(carro)


//[].SHIFT() E [].POP()

console.log(carros.pop()) //remove o primeiro item da array e retorna ele 
console.log(carros.shift()) //remove o ultimo item da array e retorna ele

//[].REVERSE()
const carrosRapidos = ['ferrari', 'porsche', 'langerover']
//console.log(carrosRapidos.reverse()) //inverte a ordem (MODIFICA O ARRAY)

//[].SPLICE()
console.log(carrosRapidos);
console.log(carrosRapidos.splice(2,0, 'Fusca')) //a partir do segundo elemento, nao removo NADA, e add FUSCA
console.log(carrosRapidos)

//[].COPYWITHIN() 
//a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.


console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2)); //adicionou uma cópia que começa na posicao 0 e vai ate o 2.

//[].FILL()
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].fill('Banana', 1)) //vai preencher tudo com BANANA a partir do index que eu passar, nesse caso ele começa a preenher a partir do index 1

//------------------------------DAQUI PRA BAIXO NENHUMA ALTERA O ARRAY EM SÍ---------------------------

//MÉTODOS DE ACESSO [].CONCAT()
const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto']

transporte1.concat(transporte2) //ele junta as duas arrays

//[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true //ELE VÊ SE O VALOR BUSCADO EXISTE NESTA ARRAY
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4 //RETORNA A POSICAO DO INDEX NA ARRAY
linguagens.indexOf('ruby'); // 2 //RETORNA -1, POIS NAO EXISTE
linguagens.lastIndexOf('js'); // 5 //ULTIMO INDEX

//[].JOIN()
let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2'); //quebrar quando chega nesse h2
htmlString = htmlString.join('h1') //colocou no lugar

console.log(htmlString)


//[].SLICE()
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];

console.log(linguagens2.slice(2)) //cortar a partir da posicao 2