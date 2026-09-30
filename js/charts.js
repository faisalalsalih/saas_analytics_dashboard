const Charts = (() => {
  let chart;
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  function build(rangeKey) {
    const data = mockData.ranges[rangeKey];
    const ctx = document.getElementById('revenueChart').getContext('2d');
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Revenue',
          data: data.revenue,
          borderColor: css('--accent-primary'),
          backgroundColor: css('--accent-primary') + '22',
          fill: true, tension: 0.35, borderWidth: 2, pointRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: css('--text-muted'), maxRotation: 0, autoSkip: true } },
          y: { grid: { color: css('--border-color') }, ticks: { color: css('--text-muted'), callback: (v) => '$' + v.toLocaleString() } }
        }
      }
    });
  }

  return { build };
})();
