// https://codepen.io/Enzoguedesc/pen/gONqzVM?editors=0012

console.log(2+2);
let variavel = 10
console.log('conta', 10 + ++variavel);
console.log('variavel', variavel);

/*
let resultado;
const preco = 20;

if (preco < 40) {
  resultado = 'Livro é barato';
} else {
  resultado = 'Livro não é barato';
}
console.log(resultado);
*/

// Forma resumida
let resultado;
const preco = 20;
resultado = (preco < 40)? ('Livro é Barato'): ('Livro não é Barato');
console.log(resultado);


let x = 3;

console.log(x === '3');
console.log(x > 3);


const meuObjeto = {
    nome : 'Enzo',
    idade : 22
  }


//funcao
function minhaFuncao(entrada){
    return entrada + 1;
  }


//tipo de funcao 1
const outraFuncao = function(entrada){
    return entrada + 22;
}


// tipo de funcao 2
const setinha = (entrada) => {
    return entrada + 33;
}


// tipo de funcao 3
const setinha2 = (entrada) => entrada + 34;


const meuArray = [21, 34, 'Enzo', [32,45]];

// meuArray.length - conta quantos elementos tem 
// delete meuObjeto.alguamcoisa  - deleta oq vc criou

var minhaGlobal = 34;

function minhaNovissimaFuncao(){
  let minhaGlobal = 23;
  return minhaGlobal;
}


function minhaFuncaoMaior(entrada){
  let resultado;
  if (entrada % 2 === 0){
    resultado = 'par';
  }
  return resultado;
}



meuArrey.forEach((el) => console.log(el))
const funcImprime = (ele, indice) => console.log('indice', indice, ':', ele)
meuArray.forEach(funcImprime)

  
                     
function minhaFuncaoMaior2(entrada){
  let r;
  if (entrada % 2 === 0){
    r = 'par';
  } else{
    r = 'impar';
  }
  return r;
}


function minhaMaiorFuncao(l1, l2, l3){
  const r = '';
  if (l1 == l2 == l3){
    r = 'Equilatero';
  } if (l2 == l3){
    r = 'Isósceles';
  } if (l1 != l2 != l3){
    r = 'Escaleno';
  }else {
  r = "Não é um triângulo"
  }
  return r;
}
