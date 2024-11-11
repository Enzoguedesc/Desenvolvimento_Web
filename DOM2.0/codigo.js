const container = document.getElementById('container');

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const trataClick = ( e ) => {
    const id = e.currentTarget.dataset.id;
    const artigo = e.currentTarget;

    //cookie
    document.cookie = `id=${id}`
    document.cookie = `nome=${artigo.dataset.nome}`
    document.cookie = `imagem=${artigo.dataset.caminhoImagem}`


    //session
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('nome', artigo.dataset.nome);
    sessionStorage.setItem('atleta', JSON.stringify(artigo.dataset));

    //local
    localStorage.setItem('id', id);


    window.location = `outra.html?id=${id}`;
}

const montaCartao = (atleta) => { 
    const cartao = document.createElement('article');
    const nome = document.createElement('h1');
    const imagem = document.createElement('img');
    const descri = document.createElement('p');

    /*const link = document.createElement('a');*/

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);


    /*link.innerHTML = "Saiba mais"
    link.href = `outra.html?id=${atleta.id}&altura=${atleta.altura};`
    cartao.appendChild(link);*/

    cartao.onclick = trataClick;

    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.caminhoImagem = atleta.imagem;




    container.appendChild(cartao);
}

pega_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
    ( obj ) => {
        console.log('isso imprime depois');
        obj.forEach( (elemento) => montaCartao(elemento));
    }
)

console.log('isso imprime antes');

const verificaSenha = ( ) => {
    const entrada = document.getElementById("senha").value;
    const senha = "df132c591533645a2df79d4503325c4a"; //amarelo
    if (hex_md5(entrada) === senha){
        sessionStorage.setItem("logado", "sim");
        alert("Entrou!");
    } else {
        alert("A senha está incorreta");
    }
}

document.getElementById("logar").onclick = verificaSenha;

document.getElementById("sair").onclick = ( ) => {sessionStorage.removeItem("logado"); alert("Saiu!")}
