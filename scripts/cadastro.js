/*
const registrationForm = document.getElementById('registrationForm');

// Adiciona um evento de submissão ao formulário
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envia os dados para o servidor
    sendDataToServer(email, password);
});

// Função para enviar dados para o servidor
function sendDataToServer(email, password) {
    fetch('http://localhost:3000/api/cadastro', {//substituir pela API depois
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Usuário registrado com sucesso.') {
            // Redireciona para a tela de login
            window.location.href = '../index.html'; // Caminho do arquivo de login
        } else {
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}
*/
