// Definir dados iniciais

const pessoa = {
    nome: 'Bongo',
    sobrenome: 'cat',
    paw: false,
    imagemUP: 'https://steamuserimages-a.akamaihd.net/ugc/960848378059400146/089ABF0F49CFEDCE1E235364065AC836029D6A7A/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    imagemDOWN: 'https://video-images.vice.com/articles/5babb97b292539000669259e/lede/1537988172612-Screen-Shot-2018-09-26-at-115550-AM.png?crop=1xw:0.8049853372434017xh;center,center&resize=1200:*',
}

// Atualizar dados

const elementoNome = document.getElementById('nome');
const elementoSobrenome = document.getElementById('sobrenome');

elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;

// Atualizar humor
function atualizarHumor() {
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');

    if (pessoa.paw) {
        elementoImagem.src = pessoa.imagemDOWN;
        blocoHumor.innerText = pessoa.nome + pessoa.sobrenome + ' PAh!';
    } else {
        elementoImagem.src = pessoa.imagemUP;
        blocoHumor.innerText = pessoa.nome + pessoa.sobrenome + ' UP';
    }
}

atualizarHumor();

// Alterar humor

const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.paw = !pessoa.paw;

    atualizarHumor();
});
