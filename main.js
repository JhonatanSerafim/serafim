const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Carregar o tema atual do localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});