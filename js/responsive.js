(() => {
  /* ---------- Mobile drawer ---------- */
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mq = window.matchMedia('(max-width: 1024px)');

  const setDrawer = (open) => {
    sidebar.classList.toggle('open', open);
    overlay.classList.toggle('active', open);
    document.body.classList.toggle('no-scroll', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    if (open) sidebar.querySelector('a, button')?.focus();
    else if (mq.matches) menuBtn.focus();
  };

  menuBtn.addEventListener('click', () => setDrawer(!sidebar.classList.contains('open')));
  overlay.addEventListener('click', () => setDrawer(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) setDrawer(false);
  });
  sidebar.querySelectorAll('.nav-item').forEach((link) =>
    link.addEventListener('click', () => mq.matches && setDrawer(false))
  );
  // Reset drawer state when resizing up to desktop
  mq.addEventListener('change', (e) => {
    if (!e.matches) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- Table data-labels for the phone card layout ---------- */
  const table = document.getElementById('transactionsTable');
  const tbody = document.getElementById('tableBody');
  const labelCells = () => {
    const heads = [...table.querySelectorAll('thead th')].map((th) => th.textContent.trim());
    tbody.querySelectorAll('tr').forEach((tr) =>
      [...tr.children].forEach((td, i) => {
        if (heads[i] && td.dataset.label !== heads[i]) td.dataset.label = heads[i];
      })
    );
  };
  new MutationObserver(labelCells).observe(tbody, { childList: true });
  labelCells();
})();
