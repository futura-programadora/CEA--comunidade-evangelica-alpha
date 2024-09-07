


// TESTEEEEEEE, temso que mudar a lógica desse codigo, subtituir o alerta para onde o registro vai ficar para os usuarios verem.

document.getElementById('postar').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;

    if (titulo && conteudo) {
        // Aqui podemos adicionar a lógica para postar o texto
        
         // Cria um novo elemento de post
        const post = document.createElement('div');
        post.classList.add('post');
        
         // Adiciona o título e o conteúdo ao novo post
        post.innerHTML = `<h2>${titulo}</h2><p>${conteudo}</p>`;
        
         // Adiciona o novo post à seção de posts
        document.getElementById('posts').appendChild(post);

        document.getElementById('titulo').value = '';
        document.getElementById('conteudo').value = '';
    } else {
        alert('Por favor, preencha o título e o texto.');
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

