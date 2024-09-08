document.addEventListener('DOMContentLoaded', function () {
    const liveDates = {
        '2024-09-10': 'culto às 18:00',
        '2024-09-15': 'Culto às 20:00',
        '2024-09-25': 'Culto às 21:00'
    };

    const calendar = document.getElementById('calendar');
    const liveInfo = document.getElementById('live-info');
    const liveDetails = document.getElementById('live-details');

    function generateCalendar() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Clear the calendar
        calendar.innerHTML = '';

        // Generate calendar days
        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(currentYear, currentMonth, i);
            const dayString = day.toISOString().split('T')[0];
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;

            if (liveDates[dayString]) {
                dayElement.classList.add('live');
                dayElement.title = liveDates[dayString];
            }

            dayElement.addEventListener('click', function () {
                if (liveDates[dayString]) {
                    liveDetails.textContent = liveDates[dayString];
                } else {
                    liveDetails.textContent = 'Nenhum culto agendado para este dia.';
                }
            });

            calendar.appendChild(dayElement);
        }
    }

    generateCalendar();
});
