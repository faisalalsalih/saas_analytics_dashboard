const Table = (() => {
  const body = document.getElementById('tableBody');
  const search = document.getElementById('tableSearch');
  const filter = document.getElementById('statusFilter');
  const badge = { completed: 'badge-success', pending: 'badge-warning', failed: 'badge-danger' };

  function render() {
    const q = search.value.trim().toLowerCase();
    const status = filter.value;
    const rows = mockData.transactions.filter((t) =>
      (status === 'all' || t.status === status) &&
      (t.customer.toLowerCase().includes(q) || t.email.toLowerCase().includes(q))
    );
    body.innerHTML = rows.length
      ? rows.map((t) => `
        <tr>
          <td><strong>${t.customer}</strong><br><small style="color:var(--text-muted)">${t.email}</small></td>
          <td>${t.plan}</td>
          <td>${t.amount}</td>
          <td><span class="badge ${badge[t.status]}">${t.status[0].toUpperCase() + t.status.slice(1)}</span></td>
          <td>${t.date}</td>
        </tr>`).join('')
      : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted)">No transactions match your search.</td></tr>`;
  }

  search.addEventListener('input', render);
  filter.addEventListener('change', render);
  return { render };
})();
