/*const comida = 'Pizza'
const agua = new String('Agua');

console.log(comida.length) //tamanho de caracter que tem na palavra Pizza (ESPAÇOS CONTAM)

//STR.LENGHT
const frase = 'A melhor comida'
frase.length //15
frase[0] // A


console.log(frase[frase.length - 1]) //usa-se o -1 pra selecionar o ultimo caracter buscado da frase
console.log(frase.charAt(frase.length - 1)) //retorna a mesma coisa


//STR.charAt(N)
const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t
*/

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript'

//const fraseFinal = frase + linguagem //concatenar
const fraseFinal = frase.concat(linguagem, '!!', 'Olá mundo')
console.log(fraseFinal)


//STR INCLUDES(search, position)
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true POIS LISTAFRUTAS CONTEM FRUTAS, OU SEJA, NA LISTA, POSSUI A BANANA
fruta.includes(listaFrutas); // false POIS FRUTA SÓ POSSUI BANANA, E NAO TODA A STRING

//STR ENDSWITH(search) e STR.STARTWITH(search)
console.log(fruta.startsWith('Ba'))
console.log(fruta.endsWith('na'))


//STR.SLICE (START, END) -COMEÇA E TERMINA
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); //corta a palavra da posicao 0 ate a posicao 3 // Dep
console.log(transacao2.slice(-5)) //ele negativo retorna os 5 ultimos caracteres
console.log(transacao3.slice(5)) //corta os 5 primeiros caracteres


//STR.SUBSTRING(START, END) //igual ao slice, porem com números negativos não funcionam
/*const linguagem = 'JavaScript';
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript
*/

//STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
console.log(transacao1.indexOf('p')) //ta na segunda posicao do index, lembrando que começa no 0
console.log(transacao1.lastIndexOf('e')) //retorna a posição do ultimo elemento 'e'


//STR.PADSTART(N, STR) E STR.PADEND(N, STR)
//Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const preco = 'R$ 99,00';

console.log(preco.padStart(30, '-')) //posso passar o caracter que eu quero que ele preencha, no caso o '-'
console.log(preco.padEnd(20, '0')) //padend adiciona no final o restante dos caracteres


const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padEnd(10, ',000'));
})


//STR.REPEAT(N)
const frase2 = 'Ta';

console.log(frase2.repeat(5))// TaTaTaTaTa


//STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); //,no lugar do espaço em branco colocar uma virgula, em todos
console.log(listaItens)         // se nao passar essa regular expression, ele retorna só o primeiro.

let precoR = 'R$ 1200,43';
precoR = precoR.replace(',', '.'); //1200.43
console.log(precoR)

//STR.SPLIT(PADRAO)
const arrayLista = listaItens.split(', '); //ele remove a virgula e mostra como array
console.log(arrayLista)


//STR.TOLOWERCASE() E STR.TOUPPERCASE()

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true


//STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00' //REMOVE TUDO NO COMEÇO E NO FINAL
valor.trimStart(); // 'R$ 23.00   ' //REMOVE TUDO DO INICIO
valor.trimEnd(); // '  R$ 23.00'   //REMOVE TUDO DO FINAL