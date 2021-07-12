//NUMBER.ISNAN() E NUMBER.ISINTEGER();
console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.3789012)) //ver se o numero possui casas decimais

//NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
console.log(parseFloat('32465.421')) //se usasse a virgula, cotaria todos os numeros a partir dela. Também se tiver algum caracter na frente, ele retorna NaN (o caracter só pode estar depois do número)

console.log(parseFloat('100.27 reais')) // retorna 100.27
console.log(parseInt('100.27 reais')) // retorna 100 (sendo number ou string)
console.log(parseInt(23.49, 10)) //separa em casas decimais ''por isso usa-se esse 10''

//N.TOFIXED(DECIMAIS)
const preco = 10.323223;
console.log(+preco.toFixed() + 3232) //esse + TRANSFORMA EM NÚMERO, caso contrario apenas concatena

//N.TOSTRING(RADIX)
const preco2 = 2.99;
preco2.toString(10); // '2.99' //TRANSFORMA O NÚMERO EM UMA STRING

//N.TOLOCALESTRING(LANG, OPTIONS);
let valores = 48.49;
valores = valores.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 
valores = valores.toLocaleString('en-US', {style: 'currency', currency: 'URS'}) 
console.log(valores)


//MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()

Math.abs(-5.5); // 5.5 //RETORNA O VALOR ABSOLUTO
Math.ceil(4.8334); // 5 //AREDONDA PRA CIMA
Math.ceil(4.3); // 5    //ARREDONDA PRA CIMA
Math.floor(4.8334); // 4 //AREDONDA PRA BAIXO
Math.floor(4.3); // 4   //ARREDONDA PRA BAIXO
Math.round(4.8334); // 5 //ARREDONDA COM SE FOSSE NA MATEMATICA NORMAL MAIS DE 5 É PRA CIMA, MENOS DE 5 É BAIXO
Math.round(4.3); // 4 //ARREDONDA COM SE FOSSE NA MATEMATICA NORMAL MAIS DE 5 É PRA CIMA, MENOS DE 5 É BAIXO


//MATH.MAX(), MATH.MIN() E MATH.RANDOM();
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 

const aleatorio = Math.floor(Math.random() * 500);

console.log(aleatorio)

const alea = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
console.log(alea)