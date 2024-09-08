/*
const loginForm = document.getElementById('loginForm');

// Adiciona um evento de submissão ao formulário
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envia os dados para o servidor para verificar o login
    loginUser(email, password);
});

// Função para enviar dados de login para o servidor e verificar credenciais
function loginUser(email, password) {
    fetch('http://localhost:3000/usuarios') // Substitua pela URL da sua API
        .then(response => response.json())
        .then(users => {
            // Verifica se o usuário existe e a senha está correta
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Usuário autenticado com sucesso
                // Redireciona para a próxima página
                window.location.href = './inicio.html'; // Caminho da página após o login
            } else {
                // Usuário ou senha incorretos
                alert('Email ou senha inválidos.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}*/
