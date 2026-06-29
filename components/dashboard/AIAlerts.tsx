import { aiAlerts } from '@/lib/constants';
export function AIAlerts() { return <div className="card"><h3>AI alerts</h3>{aiAlerts.map((alert) => <p className="metric" key={alert}>- {alert}</p>)}</div>; }
