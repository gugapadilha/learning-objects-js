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