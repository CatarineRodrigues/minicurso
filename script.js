const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#condicao');

const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');

const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#condicao3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });   
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
    });
}

pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
    });
}
novosPersonagens = () => {
    pegarPersonagem(), pegarPersonagem2(), pegarPersonagem3();
}

botao.onclick = novosPersonagens