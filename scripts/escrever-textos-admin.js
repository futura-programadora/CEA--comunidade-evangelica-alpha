document.getElementById('postar').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const videoUrl = document.getElementById('video-url').value;

    if (titulo || conteudo || videoUrl) { // Verifica se pelo menos um campo foi preenchido
        // Cria um novo elemento de post
        const post = document.createElement('div');
        post.classList.add('post');
        
        // Adiciona o título ao novo post, se houver
        if (titulo) {
            const tituloElement = document.createElement('h2');
            tituloElement.textContent = titulo;
            post.appendChild(tituloElement);
        }

        // Adiciona o conteúdo ao novo post, se houver
        if (conteudo) {
            const conteudoElement = document.createElement('p');
            conteudoElement.textContent = conteudo;
            post.appendChild(conteudoElement);
        }

        // Adiciona o vídeo, se houver
        if (videoUrl) {
            const videoId = new URL(videoUrl).searchParams.get('v'); // Extrai o ID do vídeo do YouTube
            if (videoId) {
                const videoElement = document.createElement('div');
                videoElement.classList.add('post-video');
                videoElement.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
                post.appendChild(videoElement);
            }
        }

         // Adiciona o botão de excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', function() {
            post.remove();
        });
        post.appendChild(deleteBtn);

        // Adiciona o novo post à seção de posts
        document.getElementById('posts').appendChild(post);

        // Limpa os campos
        document.getElementById('titulo').value = '';
        document.getElementById('conteudo').value = '';
        document.getElementById('video-url').value = '';
    } else {
        alert('Por favor, preencha pelo menos um campo.');
    }
});


//FAZER ESSA PARTE FUNCIONAR!!!

function savePost(titulo, conteudo) {
    // Obter posts existentes do LocalStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    // Adicionar novo post à lista de posts
    posts.push({ titulo, conteudo });
    // Salvar lista atualizada de posts no LocalStorage
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    // Obter posts do LocalStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    // Iterar sobre a lista de posts e adicioná-los ao DOM
    posts.forEach(postData => {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h2>${postData.titulo}</h2><p>${postData.conteudo}</p>`;
        document.getElementById('posts').appendChild(post);
    });
}

