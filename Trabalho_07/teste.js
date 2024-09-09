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