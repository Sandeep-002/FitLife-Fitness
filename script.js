function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
  
    if (screenId === 'screen-summary') {
      document.getElementById('goalSummary').innerText = document.getElementById('goal').value;
      document.getElementById('daysSummary').innerText = document.getElementById('days').value;
    }
  }
  
  document.getElementById('days').addEventListener('input', function () {
    document.getElementById('daysLabel').innerText = `${this.value} days/week`;
  });
  