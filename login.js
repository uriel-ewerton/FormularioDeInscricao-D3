const btnModalLogin = document.getElementById('btnLoginModal');
const modal = document.querySelector('.modalLogin');
const closeModal = document.querySelector('.close');

const btnSubmitLogin = document.querySelector('.btnLogin');
btnSubmitLogin.onclick = fazerLogin;

btnModalLogin.onclick = function () {
    modal.classList.add('modalLogin-show');
}

closeModal.onclick = function () {
    limparCampos();
}

window.onclick = function (event) {
    if (event.target == modal) {
        limparCampos();
    }
}

function limparCampos() {
    modal.classList.remove('modalLogin-show');

    const idUsuarioInput = modal.querySelector('#idUsuario');
    const senhaInput = modal.querySelector('#senha');

    if (idUsuarioInput) idUsuarioInput.value = '';
    if (senhaInput) senhaInput.value = '';
}

function fazerLogin(){
    const idUsuario = document.getElementById('idUsuario');
    const senha = document.getElementById('senha');

    if(idUsuario.value === localStorage.idUsuario && senha.value === localStorage.senha){
        console.log('Logado kkkkk')
    }
    else{
        console.log('Dados errados.')
    }
    limparCampos();
}