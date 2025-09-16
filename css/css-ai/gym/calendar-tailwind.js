const calendarDays = document.getElementById('calendar-days');
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
    day.className = 'p-2 cursor-pointer rounded hover:bg-blue-100';
    // 클릭 이벤트 등록
    day.addEventListener('click', () => {
      const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      console.log(selectedDate); // 선택한 날짜 출력
      // 필요하면 선택한 날짜 UI 업데이트 가능
    });
    calendarDays.appendChild(day);
  }
}

renderCalendar(currentDate);

document.getElementById('prev').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById('next').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});
