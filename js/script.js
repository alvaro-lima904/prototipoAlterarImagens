let imagem = [
    'img/tsunayoshi2.jpg',
    'img/codeRanger.jpg',
    'img/powerRanger.jpg'
]

function changeImg() {
    let trocar = parseInt(Math.floor(Math.random()*imagem.length));
    document.getElementById('selecionado').src = imagem[trocar];
}



/*  PRIMEIRA FORMA:

function img01() {;
    document.getElementById('selecionado').src = 'img/codeRanger.jpg';
}

function img02() {
    document.getElementById('selecionado').src = 'img/tsunayoshi2.jpg';
}

function img03() {
    document.getElementById('selecionado').src = 'img/powerRanger.jpg';
}*/