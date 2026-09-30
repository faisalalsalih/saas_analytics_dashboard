const dashboardData = {
  "7d": {
    kpis: { revenue: "$14,210", revenueTrend: "+6.4%", users: "12,450", usersTrend: "+2.1%", churn: "1.1%", churnTrend: "-0.1%" },
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    chartData: [1800, 2200, 1950, 2400, 2100, 1900, 1860]
  },
  "30d": {
    kpis: { revenue: "$48,290", revenueTrend: "+14.2%", users: "12,450", usersTrend: "+8.1%", churn: "1.2%", churnTrend: "-0.4%" },
    chartLabels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    chartData: [9800, 12400, 11900, 14190]
  },
  "12m": {
    kpis: { revenue: "$520,400", revenueTrend: "+28.5%", users: "12,450", usersTrend: "+22.4%", churn: "1.0%", churnTrend: "-0.8%" },
    chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chartData: [32000, 35000, 39000, 41000, 40000, 44000, 48000, 46000, 51000, 53000, 58000, 62000]
  }
};

const transactionsData = [
  { id: 1, customer: "Alex Mercer", email: "alex@acme.com", plan: "Enterprise", amount: "$499.00", status: "completed", date: "2 mins ago" },
  { id: 2, customer: "Sarah Connor", email: "sarah@cyber.io", plan: "Pro Tier", amount: "$99.00", status: "completed", date: "14 mins ago" },
  { id: 3, customer: "TechCorp LLC", email: "billing@techcorp.com", plan: "Enterprise", amount: "$499.00", status: "pending", date: "1 hour ago" },
  { id: 4, customer: "Liam Davies", email: "liam@design.co", plan: "Starter", amount: "$29.00", status: "failed", date: "3 hours ago" },
  { id: 5, customer: "Elena Rostova", email: "elena@startup.io", plan: "Pro Tier", amount: "$99.00", status: "completed", date: "5 hours ago" }
];