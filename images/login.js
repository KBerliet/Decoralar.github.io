// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtenha os valores dos campos de entrada
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Mensagem de erro
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        // Mostra a mensagem de erro se os campos estiverem vazios
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else {
        // Esconde a mensagem de erro
        errorMessage.style.display = 'none';

        // Aqui você pode adicionar a lógica para autenticação
        console.log('Usuário:', username);
        console.log('Senha:', password);

        // Exemplo de ação após a validação bem-sucedida (redirecionamento, etc.)
        alert('Login bem-sucedido!');
    }
});
