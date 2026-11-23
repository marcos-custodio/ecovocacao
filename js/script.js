// script do site EcoVocacao
// usamos o que aprendemos na aula 10: getElementById, addEventListener,
// style, innerText, setAttribute, localStorage e validacao de formulario


// ==================================================
// 1. acessibilidade: tamanho da letra e alto contraste
// (esses botoes estao no topo de todas as paginas)
// ==================================================

const btnAumentar = document.getElementById('btnAumentar');
const btnDiminuir = document.getElementById('btnDiminuir');
const btnContraste = document.getElementById('btnContraste');

// pega o tamanho salvo no navegador. se nao tiver nada salvo, comeca com 16
let tamanhoFonte = Number(localStorage.getItem('tamanhoFonte'));
if (!tamanhoFonte) {
    tamanhoFonte = 16;
}
document.body.style.fontSize = tamanhoFonte + 'px';

// se a pessoa ja tinha ligado o alto contraste, liga de novo
if (localStorage.getItem('altoContraste') === 'sim') {
    document.body.className = 'alto-contraste';
    btnContraste.setAttribute('aria-pressed', 'true');
}

btnAumentar.addEventListener('click', function () {
    // limite de 24px pra nao quebrar o layout
    if (tamanhoFonte < 24) {
        tamanhoFonte = tamanhoFonte + 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
        localStorage.setItem('tamanhoFonte', tamanhoFonte);
    }
});

btnDiminuir.addEventListener('click', function () {
    if (tamanhoFonte > 14) {
        tamanhoFonte = tamanhoFonte - 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
        localStorage.setItem('tamanhoFonte', tamanhoFonte);
    }
});

btnContraste.addEventListener('click', function () {
    if (document.body.className === 'alto-contraste') {
        document.body.className = '';
        btnContraste.setAttribute('aria-pressed', 'false');
        localStorage.setItem('altoContraste', 'nao');
    } else {
        document.body.className = 'alto-contraste';
        btnContraste.setAttribute('aria-pressed', 'true');
        localStorage.setItem('altoContraste', 'sim');
    }
});


// ==================================================
// 2. pagina de midia: botoes do video
// (o if serve pra so rodar na pagina que tem o video)
// ==================================================

const video = document.getElementById('videoEco');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnPular = document.getElementById('btnPular');
const btnAssisti = document.getElementById('btnAssisti');

if (video) {
    btnPlayPause.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            btnPlayPause.innerText = '⏸ Pause';
        } else {
            video.pause();
            btnPlayPause.innerText = '▶ Play';
        }
    });

    // desafio da aula 10: pular pro minuto 1:30 (90 segundos)
    btnPular.addEventListener('click', function () {
        video.currentTime = 90;
        video.play();
        btnPlayPause.innerText = '⏸ Pause';
    });

    // se a pessoa usar os controles do proprio video, o texto do botao acompanha
    video.addEventListener('pause', function () {
        btnPlayPause.innerText = '▶ Play';
    });
    video.addEventListener('play', function () {
        btnPlayPause.innerText = '⏸ Pause';
    });
}

// atividade da aula 10: botao embaixo do video do youtube
if (btnAssisti) {
    btnAssisti.addEventListener('click', function () {
        alert('Você assistiu ao vídeo sobre reciclagem! Apoie o EcoVocação.');
    });
}


// ==================================================
// 3. pagina de contato: validacao do formulario
// o html5 ja valida required, email, tel (pattern), date e number.
// aqui o javascript faz as regras extras.
// ==================================================

const form = document.getElementById('formContato');

if (form) {
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputMensagem = document.getElementById('mensagem');
    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroMensagem = document.getElementById('erroMensagem');
    const msgSucesso = document.getElementById('msgSucesso');

    form.addEventListener('submit', function (event) {
        // impede de recarregar a pagina enquanto valida
        event.preventDefault();

        let formularioValido = true;

        // limpa os erros antigos
        erroNome.innerText = '';
        erroEmail.innerText = '';
        erroMensagem.innerText = '';
        msgSucesso.innerText = '';
        inputNome.style.borderColor = '';
        inputEmail.style.borderColor = '';
        inputMensagem.style.borderColor = '';

        // nome nao pode ser so espacos
        if (inputNome.value.trim() === '') {
            erroNome.innerText = 'Digite o seu nome.';
            inputNome.style.borderColor = 'red';
            formularioValido = false;
        }

        // e-mail precisa ter @ e ponto
        if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
            erroEmail.innerText = 'Digite um e-mail válido, por exemplo: nome@email.com';
            inputEmail.style.borderColor = 'red';
            formularioValido = false;
        }

        // mensagem precisa ter pelo menos 10 caracteres (atividade da aula 10)
        if (inputMensagem.value.trim().length < 10) {
            erroMensagem.innerText = 'A mensagem precisa ter pelo menos 10 caracteres.';
            inputMensagem.style.borderColor = 'red';
            formularioValido = false;
        }

        if (formularioValido) {
            // os dados ainda nao vao pra um servidor (isso fica pro proximo semestre com php)
            // guarda o nome antes de limpar o formulario
            const nome = inputNome.value.trim();
            form.reset();
            msgSucesso.innerText = 'Mensagem enviada com sucesso! Obrigado, ' + nome + '. Vamos responder em breve.';
        } else {
            // leva o foco pro primeiro campo com erro
            if (erroNome.innerText !== '') {
                inputNome.focus();
            } else if (erroEmail.innerText !== '') {
                inputEmail.focus();
            } else {
                inputMensagem.focus();
            }
        }
    });

    // quando a pessoa clica em limpar, tira as mensagens de erro tambem
    form.addEventListener('reset', function () {
        erroNome.innerText = '';
        erroEmail.innerText = '';
        erroMensagem.innerText = '';
        msgSucesso.innerText = '';
        inputNome.style.borderColor = '';
        inputEmail.style.borderColor = '';
        inputMensagem.style.borderColor = '';
    });
}
