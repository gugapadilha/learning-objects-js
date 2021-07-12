// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimntoTotal = 0;
transacoes.forEach((item) =>{
  const numeroLimpo = +item.valor.replace('R$ ', '') //o + na frente de uma string, vira um NUMERO 
  if(item.descricao.slice(0, 4) === 'Taxa'){
    taxaTotal += numeroLimpo
  }else {
    recebimntoTotal += numeroLimpo
  }
});
console.log(taxaTotal)
console.log(recebimntoTotal)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';')
console.log(array)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a')
console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1])
//ou
//console.log(frase.slice(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) =>{
    item = item.toLocaleLowerCase()
    item = item.trim()  //tira todos os espacos
    item = item.slice(0, 4) //separa pelas iniciais

    if(item === 'taxa'){ //posso pasasr depó, tari - PARA VER QUANTOS DE CADA IRIA RETORNAR
      taxasTotal++
    };
});

