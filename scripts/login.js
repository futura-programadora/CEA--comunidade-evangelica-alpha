// Selecione o formulário de login
const form = document.getElementById('loginForm');

// Adicione um evento de submissão ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Capture os dados dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifique se há um usuário registrado
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        // Armazene os dados de login no localStorage ou sessionStorage
        sessionStorage.setItem('loggedInUser', email);

        // Redirecione para a próxima página
        window.location.href = '../paginas/home.html'; // Substitua pelo caminho do arquivo para onde deseja redirecionar
    } else {
        alert('Email ou senha incorretos.');
    }
});
