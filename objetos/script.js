//FOREACH() 
//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original -neste caso é CARROS).

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array) =>{ //usando arrow function " => " AO INVÉS DO FUNCTION()
  //array[index] = 'Teste' //ele percorre o resto dos itens ja com essa modificação
  console.log(item.toUpperCase(), index, array)
})

console.log(carros); //array nao muda quando faz a iteração nela


//FOREACH
const li = document.querySelectorAll('li');

const retornoForeach = li.forEach((i, index) => {
  i.classList.add('ativa' + index)
}); //classe ativa0, ativa1...
console.log(retornoForeach) //O RETORNO DO FOR EACH É SEMPRE UNDEFINED

li.forEach(function(item) {
  item.classList.add('ativa');
});


//[].MAP()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const carros2 = ['Ford', 'Fiat', 'Honda']

const novaArray = carros.map((item, index, array) =>{ //quando colocado na variavel 
  return item.toUpperCase(); //retorna o index 
});

console.log(novaArray) //modifiquei apenas essa nova array, o CARROS CONTINUA IGUAL
console.log(carros)

//ARROW FUNCTION E [].MAP()
const numeros = [5, 4, 9, 21, 94];
const numerosX2 = numeros.map((n) =>{
  return n * 2
});
console.log(numerosX2)


//[].MAP() VS [].FOREACH()
//Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores

const numerosPar = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

console.log(numerosX3); // [6, 12, 18, 24, 30, 36, 42];


//[].MAP() COM OBJETOS
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [ 
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

//const nomeAulas = aula => aula.nome;   //PODE APARECER ASSIM TAMBÉM, E FUNCIONA IGUAL
const nomeAulas = ((aula) =>{
  return aula.nome
});


const arrayNomeAulas = aulas.map(nomeAulas)

console.log(arrayNomeAulas)
console.log(tempoAulas)


//[].REDUCE()
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulasR = [10, 25, 30];

const reduceAulas = aulasR.reduce((acumulador, item, index, array) =>{
  console.log(acumulador, item, index);
  return acumulador + item; //CADA FEZ QUE FAZ O LOOP DE RETORNO ELE SOMA O 33 NOVAMENTE.
}, 33) //SE NAO PASSAR ESSE VALOR ELE PULA A PRIMEIRA INTERACAO

console.log(reduceAulas) //retorna o 68 + 30


//MAIOR VALOR COM [].REDUCE()

const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorNumero = numeros3.reduce((anterior, atual) =>{
  //return anterior > atual ? anterior: atual; (MANEIRA SIMPLIFICADA DE ESCREVER)
  if(anterior > atual){
    return anterior
  }else {
    return atual
  }
}, 0);
console.log(maiorNumero); // 60

//PODEMOS RETORNAR OUTROS VALORES

const aulasS = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulasS.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})


//[].REDUCERIGHT()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


//[].SOME()
//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas2 = ['Banana', 'Pera', 'Uva'];

const temUva = frutas2.some((item) =>{
  return item === 'Uva';
});
console.log(temUva)


//[].EVERY()
//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false

const every = frutas.every((item) =>{
  return item === 'Uva';
});

console.log(every)


const numerozao = [6, 30, 21, 88, 101, 29]

const maiorQue3 = numerozao.every(n => n > 3);
console.log(maiorQue3)

