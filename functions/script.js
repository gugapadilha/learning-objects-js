// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');

const totCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) =>{
  return acumulador + item.innerText.length;
}, 0);

console.log(totCaracteres);
console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe): ''; //se classe existir ele retorna aquilo, se nao, nao retorna nada
  conteudo ? elemento.innerHTML = conteudo : null; //posso usar tanto uma string vazia quanto o null
  return elemento
}

console.log(criarElemento('li', 'azul', 'esse é o conteudo')) //n precisa validar a tag, pois sem, nao roda msm

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Cursos de JavaScript')
const cursosHTML = h1Titulo('Cursos de HTML')

console.log(cursosJS, cursosHTML)