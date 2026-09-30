const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);
}

function updateThemeUI(theme) {
  if (theme === 'dark') {
    themeIcon.setAttribute('data-lucide', 'sun');
    themeLabel.textContent = 'Light Mode';
  } else {
    themeIcon.setAttribute('data-lucide', 'moon');
    themeLabel.textContent = 'Dark Mode';
  }
  if (window.lucide) {
    lucide.createIcons();
  }
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeUI(newTheme);
  
  if (window.revenueChartInstance) {
    updateChartColors();
  }
});