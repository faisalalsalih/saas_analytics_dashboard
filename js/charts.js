let revenueChartInstance = null;

function renderRevenueChart(labels, data) {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.35)');
  gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

  if (revenueChartInstance) {
    revenueChartInstance.destroy();
  }

  revenueChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Revenue ($)',
        data: data,
        borderColor: '#3b82f6',
        borderWidth: 3,
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
        y: { grid: { color: 'rgba(148, 163, 184, 0.1)' }, ticks: { color: '#94a3b8' } }
      }
    }
  });
  window.revenueChartInstance = revenueChartInstance;
}

function updateChartColors() {
  const activeBtn = document.querySelector('.range-btn.active');
  const period = activeBtn ? activeBtn.dataset.range : '30d';
  renderRevenueChart(dashboardData[period].chartLabels, dashboardData[period].chartData);
}