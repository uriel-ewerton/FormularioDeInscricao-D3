// Salvamentos em localStorage
function saveDataOnLocalStorage() {
    // campos de 'Informações do participante'
    localStorage.nome = document.body.querySelector('#nome').value;
    localStorage.dataNasc = document.body.querySelector('#dataNascimento').value;
    localStorage.cpf = document.body.querySelector('#cpf').value;
    localStorage.sexo = document.body.querySelector('#sexo').value;
    localStorage.email = document.body.querySelector('#email').value;
    localStorage.telefone = document.body.querySelector('#telefone').value;

    // campos de 'Endereco'
    localStorage.cep = document.body.querySelector('#cep').value;
    localStorage.rua = document.body.querySelector('#rua').value;
    localStorage.numeroRua = document.body.querySelector('#numero').value;
    localStorage.cidade = document.body.querySelector('#cidade').value;
    localStorage.estado = document.body.querySelector('#estado').value;

    // checkbox de escolha das trilhas
    try { localStorage.trilha = document.body.querySelector('input[name="trilhas"]:checked').value; }
    catch {
        console.log('Trilha não selecionada.')
        return;
    }

    // campos de cadastro
    localStorage.idUsuario = document.body.querySelector('#idUsuario').value;
    localStorage.senha = document.body.querySelector('#senha').value;
}

function showError(element, message) {
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.innerText = message;
    element.parentNode.appendChild(errorSpan);
}

// Remove mensagens de erro existentes
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(span => span.remove());
}

// --- Autoformatação de CEP ---
const cep = document.getElementById('cep');
cep.addEventListener('input', function () {
    let valor = cep.value.replace(/\D/g, '');
    valor = valor.substring(0, 8);
    if (valor.length > 5) {
        cep.value = valor.substring(0, 5) + '-' + valor.substring(5);
    } else {
        cep.value = valor;
    }
});

// --- Autoformatação de CPF ---
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function () {
    let valor = cpfInput.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.substring(0, 11);
    if (valor.length > 9) {
        cpfInput.value = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6, 9) + '-' + valor.substring(9);
    } else if (valor.length > 6) {
        cpfInput.value = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6);
    } else if (valor.length > 3) {
        cpfInput.value = valor.substring(0, 3) + '.' + valor.substring(3);
    } else {
        cpfInput.value = valor;
    }
});

// --- Autoformatação de Telefone ---
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function () {
    let valor = telefoneInput.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.substring(0, 11);

    let formatted = "";
    if (valor.length > 0) {
        formatted = "(" + valor.substring(0, 2);
    }
    if (valor.length >= 2) {
        formatted += ") ";
    }
    if (valor.length > 2) {
        // Formata: (xx) 9xxxx-xxxx
        if (valor.length >= 7) {
            formatted += valor.substring(2, 3) + valor.substring(3, 7) + "-" + valor.substring(7);
        } else {
            formatted += valor.substring(2);
        }
    }
    telefoneInput.value = formatted;
});

// --- Validação do Formulário ---
document.querySelector('.formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão
    clearErrors();
    let valid = true;

    // Nome Completo
    const nome = document.getElementById('nome');
    if (nome.value.trim() === '') {
        showError(nome, 'Nome é obrigatório.');
        valid = false;
    }

    // Data de nascimento
    const dataNascimento = document.getElementById('dataNascimento');
    if (dataNascimento.value.trim() === '') {
        showError(dataNascimento, 'Data de nascimento é obrigatória.');
        valid = false;
    }

    // CPF - Formato: xxx.xxx.xxx-xx
    const cpf = document.getElementById('cpf');
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (cpf.value.trim() === '') {
        showError(cpf, 'CPF é obrigatório.');
        valid = false;
    } else if (!regexCPF.test(cpf.value)) {
        showError(cpf, 'CPF inválido. Use o formato 000.000.000-00.');
        valid = false;
    }

    // Sexo
    const sexo = document.getElementById('sexo');
    if (sexo.value.trim() === '') {
        showError(sexo, 'Campo obrigatório.');
        valid = false;
    }

    // E-mail
    const email = document.getElementById('email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        showError(email, 'E-mail é obrigatório.');
        valid = false;
    } else if (!regexEmail.test(email.value)) {
        showError(email, 'E-mail inválido.');
        valid = false;
    }

    // Telefone - Formato: (xx) 9xxxx-xxxx
    const telefone = document.getElementById('telefone');
    const regexTelefone = /^\(\d{2}\) 9\d{4}-\d{4}$/;
    if (telefone.value.trim() === '') {
        showError(telefone, 'Telefone é obrigatório.');
        valid = false;
    } else if (!regexTelefone.test(telefone.value)) {
        showError(telefone, 'Telefone inválido. Use o formato (00) 9xxxx-xxxx.');
        valid = false;
    }

    // Documento de identidade (arquivo)
    const docIdentidade = document.getElementById('docIdentidade');
    if (docIdentidade.files.length === 0) {
        showError(docIdentidade, 'Selecione um documento de identidade.');
        valid = false;
    }

    // CEP
    if (cep.value.trim() === '') {
        showError(cep, 'CEP é obrigatório.');
        valid = false;
    } else if (!/^\d{5}-\d{3}$/.test(cep.value)) {
        showError(cep, 'CEP inválido. Use o formato 00000-000.');
        valid = false;
    }

    // Rua
    const rua = document.getElementById('rua');
    if (rua.value.trim() === '') {
        showError(rua, 'Rua é obrigatória.');
        valid = false;
    }

    // Número
    const numero = document.getElementById('numero');
    const regexNumero = /^\d+$/;
    if (numero.value.trim() === '') {
        showError(numero, 'Número é obrigatório.');
        valid = false;
    } else if (!regexNumero.test(numero.value)) {
        showError(numero, 'Número inválido. Insira apenas números inteiros.');
        valid = false;
    }

    // Cidade
    const cidade = document.getElementById('cidade');
    if (cidade.value.trim() === '') {
        showError(cidade, 'Cidade é obrigatória.');
        valid = false;
    }

    // Estado 
    const estado = document.getElementById('estado');
    const regexEstado = /^[A-Za-z]{2}$/;
    if (estado.value.trim() === '') {
        showError(estado, 'Estado é obrigatório.');
        valid = false;
    } else if (!regexEstado.test(estado.value)) {
        showError(estado, 'Estado inválido. Utilize somente duas letras, ex.: MA, TO.');
        valid = false;
    }

    // Comprovante de residência (arquivo)
    const compResidencia = document.getElementById('compResidencia');
    if (compResidencia.files.length === 0) {
        showError(compResidencia, 'Selecione um comprovante de residência.');
        valid = false;
    }

    // Trilhas de aprendizagem
    const trilhaSelecionada = document.querySelector('input[name="trilhas"]:checked');
    if (!trilhaSelecionada) {
        const radioGroup = document.querySelector('.formulario__trilhas__radioButtons');
        showError(radioGroup, 'Selecione uma trilha de aprendizagem.');
        valid = false;
    }

    // Id de usuário
    const idUsuario = document.getElementById('idUsuario');
    if (idUsuario.value.trim() === '') {
        showError(idUsuario, 'Id de usuário é obrigatório.');
        valid = false;
    }

    // Senha – tamanho mínimo de 8 dígitos
    const senha = document.getElementById('senha');
    if (senha.value.trim() === '') {
        showError(senha, 'Senha é obrigatória.');
        valid = false;
    } else if (senha.value.length < 8) {
        showError(senha, 'Senha deve ter no mínimo 8 dígitos.');
        valid = false;
    }

    // Termos e Condições
    const termos = document.getElementById('termos');
    if (!termos.checked) {
        showError(termos, 'Você deve concordar com os termos.');
        valid = false;
    }

    if (valid) {
        saveDataOnLocalStorage();
        alert("Formulário enviado com sucesso!");
        window.location.href = 'home.html';
    }
});