const mockData = {
  ranges: {
    "7d": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      revenue: [5200, 6100, 5800, 7200, 6900, 4800, 5600],
      kpi: { revenue: "$41,600", revenueTrend: "+6.4%", users: "12,120", usersTrend: "+2.3%", churn: "1.4%", churnTrend: "+0.1%" }
    },
    "30d": {
      labels: ["W1", "W2", "W3", "W4", "W5"],
      revenue: [9200, 10400, 11800, 12100, 4790],
      kpi: { revenue: "$48,290", revenueTrend: "+14.2%", users: "12,450", usersTrend: "+8.1%", churn: "1.2%", churnTrend: "-0.4%" }
    },
    "12m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      revenue: [31000, 33500, 36200, 38800, 41000, 43500, 44200, 46800, 47500, 49100, 52300, 55800],
      kpi: { revenue: "$519,700", revenueTrend: "+32.5%", users: "12,450", usersTrend: "+21.7%", churn: "1.2%", churnTrend: "-0.9%" }
    }
  },
  transactions: [
    { customer: "Ayesha Khan", email: "ayesha@northwind.io", plan: "Pro", amount: "$99.00", status: "completed", date: "Sep 28, 2026" },
    { customer: "Daniel Foster", email: "daniel@acme.co", plan: "Starter", amount: "$29.00", status: "pending", date: "Sep 28, 2026" },
    { customer: "Mei Lin", email: "mei@orbit.dev", plan: "Enterprise", amount: "$499.00", status: "completed", date: "Sep 27, 2026" },
    { customer: "Omar Siddiqui", email: "omar@luma.app", plan: "Pro", amount: "$99.00", status: "failed", date: "Sep 26, 2026" },
    { customer: "Sofia Rossi", email: "sofia@brightly.com", plan: "Starter", amount: "$29.00", status: "completed", date: "Sep 25, 2026" },
    { customer: "Liam Carter", email: "liam@stackr.io", plan: "Pro", amount: "$99.00", status: "pending", date: "Sep 24, 2026" },
    { customer: "Hina Malik", email: "hina@crestline.co", plan: "Enterprise", amount: "$499.00", status: "completed", date: "Sep 23, 2026" }
  ]
};
