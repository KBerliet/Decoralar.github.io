// auth.js
 function authenticarUser(username, password) {
    // Apenas simula um login bem-sucedido
    console.log('Autenticando usuário:', username);
    console.log('Senha:', password);
    
    // Simulação de validação simples (username e password não devem estar vazios)
    if (username !== '' && password !== '') {
        alert('Login bem-sucedido! Redirecionando para a tela inicial...');
        window.location.href = 'index.html'; // Redireciona para a tela inicial após o login bem-sucedido
    } else {
        // Exemplo de mensagem de erro caso os campos estejam vazios
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    }
}
export { authenticarUser };