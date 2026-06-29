import { dashboardStats } from '@/lib/constants';
export function StatsCards() { return <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(190px, 1fr))'}}>{dashboardStats.map((stat) => <div className="card" key={stat.label}><p className="metric">{stat.label}</p><h2>{stat.value}</h2><span className="status green">{stat.delta}</span></div>)}</div>; }
