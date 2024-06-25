 import { authenticarUser } from './loginModulo.js';   
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtenha os valores dos campos de entrada
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    authenticarUser(username, password);
});







