document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastro-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;
        const endereco = document.getElementById('endereco').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const cep = document.getElementById('cep').value;

        if (!nome || !email || !senha || !confirmarSenha || !endereco || !cidade || !estado || !cep) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }
        alert('Cadastro realizado com sucesso!');
        form.submit(); 
    });
});
  
