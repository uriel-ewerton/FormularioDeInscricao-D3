const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');

function login() {
    const idUsuario = document.getElementById('idUsuario').value;
    const senha = document.getElementById('senha').value;

    // Validação
    if (idUsuario === localStorage.idUsuario && senha === localStorage.senha) {
        // Usuário logou com sucesso
        localStorage.setItem('loggedIn', 'true');
        console.log('Logado com sucesso!');

        // Fechar o modal – utilizando a API do Bootstrap:
        const modalEl = document.getElementById('loginModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        // Alterna os botões login e logout;
        toggleLoginButton();
    } else {
        console.log('Dados errados.');
        alert('Dados de login incorretos!');
    }

    // Limpa os campos do formulário se necessário:
    document.getElementById('loginForm').reset();
}

function toggleLoginButton() {
    if (localStorage.loggedIn === 'true') {
        loginButton.setAttribute('style', 'display: none');
        logoutButton.removeAttribute('style', 'display: none');
    } else if (localStorage.loggedIn === 'false') {
        logoutButton.setAttribute('style', 'display: none');
        loginButton.removeAttribute('style', 'display: none');
    }

}

logoutButton.addEventListener('click', logout);

function logout() {
    localStorage.loggedIn = 'false';
    window.location.href = 'home.html';
    toggleLoginButton();
}