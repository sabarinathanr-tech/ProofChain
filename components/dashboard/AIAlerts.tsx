import { aiAlerts } from '@/lib/constants';
export function AIAlerts() { return <div className="card"><h3>AI alerts</h3>{aiAlerts.map((alert) => <div className="alert-row" key={alert}><span>AI</span><p>{alert}</p></div>)}</div>; }
