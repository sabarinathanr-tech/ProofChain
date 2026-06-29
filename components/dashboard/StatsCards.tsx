const stats = [
  { label: 'Total Shipments', value: '1,284', delta: '+142 this month', tone: 'green' },
  { label: 'Active Shipments', value: '86', delta: '17 at risk', tone: 'amber' },
  { label: 'Delivered', value: '1,091', delta: '94.2% success', tone: 'green' },
  { label: 'Delayed', value: '24', delta: '-8 vs last month', tone: 'red' },
];

export function StatsCards() {
  return <div className="kpi-grid">{stats.map((stat) => <div className="card stat-card" key={stat.label}><p className="metric">{stat.label}</p><strong>{stat.value}</strong><span className={`status ${stat.tone}`}>{stat.delta}</span></div>)}</div>;
}
