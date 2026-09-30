function renderTable(data) {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching transactions found.</td></tr>`;
    return;
  }

  data.forEach(item => {
    const row = document.createElement('tr');
    
    let badgeClass = 'badge-success';
    if (item.status === 'pending') badgeClass = 'badge-warning';
    if (item.status === 'failed') badgeClass = 'badge-danger';

    row.innerHTML = `
      <td>
        <strong>${item.customer}</strong><br/>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${item.email}</span>
      </td>
      <td>${item.plan}</td>
      <td><strong>${item.amount}</strong></td>
      <td><span class="badge ${badgeClass}">${item.status.toUpperCase()}</span></td>
      <td style="color: var(--text-muted);">${item.date}</td>
    `;
    tableBody.appendChild(row);
  });
}

function filterTable() {
  const searchTerm = document.getElementById('tableSearch').value.toLowerCase();
  const selectedStatus = document.getElementById('statusFilter').value;

  const filtered = transactionsData.filter(item => {
    const matchesSearch = item.customer.toLowerCase().includes(searchTerm) || 
                          item.email.toLowerCase().includes(searchTerm);
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  renderTable(filtered);
}