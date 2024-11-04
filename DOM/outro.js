const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const acha_cookie = (chave) => {
    const array_cookies = document.cookie.split('; ')
    const procurado = array_cookies.find(
        ( ele ) => ele.startsWith(`${chave}=`)
    )

    return procurado.split('=')[1];
}


console.log(acha_cookie('nome'));

console.log(sessionStorage.getItem('nome'));

const obj = JSON.parse(sessionStorage.getItem('atleta'));

console.log(obj.caminhoImagem);

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    ( atleta ) => {

        document.body.innerHTML = '';



        const nome = document.createElement('h1');
        nome.innerHTML = atleta.nome;

        document.body.appendChild(nome);


        
        const posicao = document.createElement('h2');
        posicao.innerHTML = atleta.posicao;

        document.body.appendChild(posicao);



        const elenco = document.createElement('h3');
        elenco.innerHTML = atleta.elenco;

        document.body.appendChild(elenco);



        const imagem = document.createElement('img');
        imagem.src = atleta.imagem;
        imagem.alt = `foto de ${atleta.nome}`

        document.body.appendChild(imagem);


        
        const nascimento = document.createElement('p');
        nascimento.innerHTML = atleta.nascimento;

        document.body.appendChild(nascimento);



        const naturalidade = document.createElement('p');
        naturalidade.innerHTML = atleta.naturalidade;

        document.body.appendChild(naturalidade);



        const n_jogos = document.createElement('p');
        n_jogos.innerHTML = atleta.n_jogos;

        document.body.appendChild(n_jogos);



        const detalhes = document.createElement('p');
        detalhes.innerHTML = atleta.detalhes;

        document.body.appendChild(detalhes);


    }
)

