// Adiciona um ouvinte de evento 'click' ao botão com id 'postar'
document.getElementById('postar').addEventListener('click', function() {
    // Obtém os valores dos campos de entrada de texto
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const videoUrl = document.getElementById('video-url').value;

    // Verifica se pelo menos um dos campos foi preenchido
    if (titulo || conteudo || videoUrl) {
        // Cria um novo elemento 'div' para o post
        const post = document.createElement('div');
        post.classList.add('post');
        
        // Adiciona o título ao post, se houver um valor
        if (titulo) {
            const tituloElement = document.createElement('h2');
            tituloElement.textContent = titulo;
            post.appendChild(tituloElement);
        }

        // Adiciona o conteúdo ao post, se houver um valor
        if (conteudo) {
            const conteudoElement = document.createElement('p');
            conteudoElement.textContent = conteudo;
            post.appendChild(conteudoElement);
        }

        // Adiciona o vídeo ao post, se houver uma URL
        if (videoUrl) {
            // Extrai o ID do vídeo do YouTube a partir da URL
            const videoId = new URL(videoUrl).searchParams.get('v');
            if (videoId) {
                // Cria um elemento 'div' para o vídeo
                const videoElement = document.createElement('div');
                videoElement.classList.add('post-video');
                // Cria um iframe para o vídeo e o adiciona ao post
                videoElement.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
                post.appendChild(videoElement);
            }
        }

        // Adiciona um botão de excluir ao post
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Excluir';
        // Adiciona um ouvinte de evento 'click' ao botão de excluir para remover o post
        deleteBtn.addEventListener('click', function() {
            post.remove();
        });
        post.appendChild(deleteBtn);

        // Adiciona o novo post à seção de posts no DOM
        document.getElementById('posts').appendChild(post);

        // Limpa os campos de entrada para o próximo post
        document.getElementById('titulo').value = '';
        document.getElementById('conteudo').value = '';
        document.getElementById('video-url').value = '';
    } else {
        // Exibe um alerta se nenhum campo for preenchido
        alert('Por favor, preencha pelo menos um campo.');
    }
});

// Função para salvar um post no LocalStorage
function savePost(titulo, conteudo) {
    // Obtém a lista de posts existentes do LocalStorage (ou um array vazio se não houver nenhum)
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    // Adiciona o novo post à lista de posts
    posts.push({ titulo, conteudo });
    // Salva a lista atualizada de posts no LocalStorage
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Função para carregar posts do LocalStorage e adicioná-los ao DOM
function loadPosts() {
    // Obtém a lista de posts do LocalStorage (ou um array vazio se não houver nenhum)
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    // Itera sobre a lista de posts e adiciona cada post ao DOM
    posts.forEach(postData => {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h2>${postData.titulo}</h2><p>${postData.conteudo}</p>`;
        document.getElementById('posts').appendChild(post);
    });
}

