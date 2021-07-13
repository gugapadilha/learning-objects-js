// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos);

const objetoCurso = arrayCursos.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aula = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aula,
    horas
  };
});

console.log(objetoCurso)
console.log(arrayCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const lista = numeros.filter(n => n > 100);
console.log(lista)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((baixo) =>{
  return baixo === 'Baixo';
});
console.log(temBaixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totCompras = compras.reduce((acumulador, item)=> {
  const cleanPreco = +item.preco.replace('R$', '').replace(',', '.') //colocando o + na frente, muda p number

  return acumulador + cleanPreco
}, 0) //SE NAO COMEÇAR COM ESSE 0, ELE PULA O PRIMEIRO ITEM ( BANANA )

console.log(totCompras);

