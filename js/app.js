document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Backdrop Overlay Setup
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  const sidebar = document.querySelector('.sidebar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  function toggleMobileSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileSidebar);
  }

  overlay.addEventListener('click', toggleMobileSidebar);

  // 2. Initialize Lucide Icons & Theme
  if (window.lucide) {
    lucide.createIcons();
  }
  initTheme();

  // 3. Initial Dashboard Load (Default: '30d')
  updateDashboard('30d');

  // 4. Initial Table Render
  renderTable(transactionsData);

  // 5. Time Range Filter Controls
  const rangeBtns = document.querySelectorAll('.range-btn');
  rangeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      rangeBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const period = e.target.dataset.range;
      updateDashboard(period);
    });
  });

  // 6. Table Filter Event Listeners
  document.getElementById('tableSearch').addEventListener('input', filterTable);
  document.getElementById('statusFilter').addEventListener('change', filterTable);
});

function updateDashboard(period) {
  const data = dashboardData[period];
  
  // Update KPI Card Numbers & Badges
  document.getElementById('kpiRevenue').textContent = data.kpis.revenue;
  document.getElementById('kpiRevenueTrend').textContent = data.kpis.revenueTrend;
  document.getElementById('kpiUsers').textContent = data.kpis.users;
  document.getElementById('kpiUsersTrend').textContent = data.kpis.usersTrend;
  document.getElementById('kpiChurn').textContent = data.kpis.churn;
  document.getElementById('kpiChurnTrend').textContent = data.kpis.churnTrend;

  // Render Analytics Chart
  renderRevenueChart(data.chartLabels, data.chartData);
}