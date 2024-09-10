// Adiciona um ouvinte de eventos para o evento 'DOMContentLoaded', que é acionado quando o DOM está totalmente carregado e pronto
document.addEventListener('DOMContentLoaded', function () {

    // Define um objeto com datas como chaves e descrições de eventos como valores
    const liveDates = {
        '2024-09-10': 'culto às 18:00',
        '2024-09-15': 'Culto às 20:00',
        '2024-09-25': 'Culto às 21:00'
    };

    // Obtém referências aos elementos HTML onde o calendário e as informações sobre eventos serão exibidos
    const calendar = document.getElementById('calendar');
    const liveInfo = document.getElementById('live-info'); // Não é utilizado no código atual
    const liveDetails = document.getElementById('live-details');

    // Função para gerar o calendário
    function generateCalendar() {
        // Obtém a data atual
        const now = new Date();
        // Obtém o mês e o ano atuais
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        // Cria um objeto Date para o primeiro dia do mês atual
        const firstDay = new Date(currentYear, currentMonth, 1);
        // Cria um objeto Date para o último dia do mês atual
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        // Obtém o número de dias no mês atual
        const daysInMonth = lastDay.getDate();

        // Limpa o conteúdo do calendário para gerar um novo
        calendar.innerHTML = '';

        // Gera os dias do calendário
        for (let i = 1; i <= daysInMonth; i++) {
            // Cria um objeto Date para cada dia do mês atual
            const day = new Date(currentYear, currentMonth, i);
            // Converte a data para uma string no formato 'YYYY-MM-DD'
            const dayString = day.toISOString().split('T')[0];
            // Cria um elemento 'div' para representar o dia
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            // Define o texto do elemento como o número do dia
            dayElement.textContent = i;

            // Verifica se há um evento para o dia e adiciona uma classe e título se houver
            if (liveDates[dayString]) {
                dayElement.classList.add('live');
                dayElement.title = liveDates[dayString];
            }

            // Adiciona um ouvinte de eventos 'click' ao elemento do dia
            dayElement.addEventListener('click', function () {
                // Exibe as informações do evento se houver; caso contrário, exibe uma mensagem padrão
                if (liveDates[dayString]) {
                    liveDetails.textContent = liveDates[dayString];
                } else {
                    liveDetails.textContent = 'Nenhum culto agendado para este dia.';
                }
            });

            // Adiciona o elemento do dia ao calendário
            calendar.appendChild(dayElement);
        }
    }

    // Chama a função para gerar o calendário quando o DOM está pronto
    generateCalendar();
});
