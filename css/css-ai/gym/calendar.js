const calendarDays = document.querySelector('.calendar-days');
const monthYear = document.getElementById('month-year');
let currentDate = new Date();

function renderCalendar(date) {
  calendarDays.innerHTML = '';
  const year = date.getFullYear();
  const month = date.getMonth();
  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 빈 칸
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    calendarDays.appendChild(empty);
  }

  // 날짜
  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    calendarDays.appendChild(day);
  }
}

renderCalendar(currentDate);

// 이전/다음 버튼
document.getElementById('prev').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});
document.getElementById('next').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});
