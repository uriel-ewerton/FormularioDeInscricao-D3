// Salvamentos em localStorage
document.body.querySelector('.formulario__confirmacao__confirmar').addEventListener('click', function () {
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

    //alert('Informações salvas com sucesso!');
})