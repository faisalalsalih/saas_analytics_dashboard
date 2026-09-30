(() => {
  const $ = (id) => document.getElementById(id);
  let current = '30d';

  function setKpis(rangeKey) {
    const k = mockData.ranges[rangeKey].kpi;
    $('kpiRevenue').textContent = k.revenue;
    $('kpiUsers').textContent = k.users;
    $('kpiChurn').textContent = k.churn;
    [['kpiRevenueTrend', k.revenueTrend, true], ['kpiUsersTrend', k.usersTrend, true], ['kpiChurnTrend', k.churnTrend, false]]
      .forEach(([id, text, upIsGood]) => {
        const el = $(id);
        const up = text.startsWith('+');
        el.textContent = text;
        el.className = 'badge ' + (up === upIsGood ? 'badge-success' : 'badge-danger');
      });
  }

  function setRange(rangeKey) {
    current = rangeKey;
    document.querySelectorAll('.range-btn').forEach((b) => b.classList.toggle('active', b.dataset.range === rangeKey));
    setKpis(rangeKey);
    Charts.build(rangeKey);
  }

  document.querySelectorAll('.range-btn').forEach((b) => b.addEventListener('click', () => setRange(b.dataset.range)));
  document.addEventListener('themechange', () => Charts.build(current));

  Theme.render();
  Table.render();
  setRange(current);
  if (window.lucide) lucide.createIcons();
})();
