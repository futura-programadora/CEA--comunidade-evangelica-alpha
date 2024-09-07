document.addEventListener('DOMContentLoaded', () => {
    const botaoParticipar = document.getElementById('botao-participar');
    const botaoLinkConvite = document.getElementById('botao-link-convite');
    
    // Simulando a lógica para ativar o botão quando o usuário for convidado
    // Isso pode ser substituído por uma lógica real que verifica o status do usuário
    const usuarioConvidado = true;

    if (usuarioConvidado) {
        botaoParticipar.disabled = false;
    }

    botaoParticipar.addEventListener('click', () => {
        alert('Você agora está participando da live!');
        // Adicione aqui a lógica para o usuário entrar na live como colaborador
    });

    botaoLinkConvite.addEventListener('click', () => {
        const linkConvite = document.querySelector('.secao-link input').value;
        if (linkConvite) {
            window.location.href = linkConvite;
        } else {
            alert('Por favor, insira um link válido.');
        }
    });
});

function sairdaConta(event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Exibe a caixa de diálogo com "OK" e "Cancelar"
    var resultado = window.confirm("Você deseja continuar?");
    
    // Verifica o valor retornado pelo confirm
    if (resultado) {
        // Usuário clicou em "OK", redireciona para um arquivo específico na raiz
        window.location.href = "/index.html"; // Caminho absoluto para o arquivo na raiz
    } else {
        // Usuário clicou em "Cancelar", exibe uma mensagem de erro
        window.alert('Error: Ação cancelada.');
    }
}

async function copyPixKey() {
    try {
        // Obtém a chave Pix do elemento com ID 'pix-key'
        var pixKey = document.getElementById('pix-key').textContent;
        // Escreve a chave Pix na área de transferência
        await navigator.clipboard.writeText(pixKey);
        // Exibe um alerta confirmando que a chave foi copiada
        alert('Chave Pix copiada para a área de transferência!');
    } catch (err) {
        // Exibe um alerta caso ocorra um erro ao copiar a chave
        alert('Falha ao copiar a chave Pix: ' + err);
    }
}