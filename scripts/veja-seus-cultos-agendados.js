/*// URL da API que retorna os cultos agendados
  const apiURL = 'https://api.exemplo.com/cultos'; // Substitua pela URL da API

  // Função para buscar os cultos agendados
function fetchCultos() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
              // Verifica se há cultos agendados
              const cultosAgendados = data.cultos; // Supondo que 'cultos' seja a chave com a lista de cultos
            const mensagem = document.getElementById('nao-tem-cultos-agendados');

            if (cultosAgendados.length === 0) {
                  // Se não houver cultos agendados, exibe a mensagem
                mensagem.style.display = 'block';
            } else {
                  // Se houver cultos agendados, oculta a mensagem
                mensagem.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar cultos:', error);
        });
}

  // Chama a função para buscar os cultos ao carregar a página
document.addEventListener('DOMContentLoaded', fetchCultos);*/


//ESSE DAQUI A GENTE TEM QUE DEIXAR UMA MENSAGEM DE QUE NÃO TEM CULTOS AGENDADOS SE NA API CONSTAR QUE NÃO TEM, SO QUE SE TIVER CULTOS AGENDADOS, ESSA MENSAGEM SOME E NO LUGAR APARECE OS CULTOS AGENDADOS.