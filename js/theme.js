const Theme = (() => {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggleBtn');
  const saved = localStorage.getItem('pulse-theme');
  if (saved) root.setAttribute('data-theme', saved);

  function render() {
    const dark = root.getAttribute('data-theme') === 'dark';
    btn.innerHTML = `<i data-lucide="${dark ? 'sun' : 'moon'}"></i><span id="themeLabel">${dark ? 'Light Mode' : 'Dark Mode'}</span>`;
    if (window.lucide) lucide.createIcons();
  }

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('pulse-theme', next);
    render();
    document.dispatchEvent(new CustomEvent('themechange'));
  });

  return { render };
})();
