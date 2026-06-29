import { recentShipments } from '@/lib/constants';
export function RecentShipments() {
  return (
    <div className="card table-card">
      <div className="card-heading"><div><h3>Recent shipments</h3><p className="metric">Live operational exceptions and delivery status.</p></div><span className="status amber">Filtered: all</span></div>
      <div className="module-toolbar"><input aria-label="Search recent shipments" placeholder="Search by shipment, vendor, status" /><select aria-label="Risk filter"><option>All risks</option><option>High</option><option>Medium</option><option>Low</option></select></div>
      <div className="table-wrap"><table className="table"><thead><tr><th>ID</th><th>Vendor</th><th>Status</th><th>Risk</th></tr></thead><tbody>{recentShipments.map((s) => <tr key={s.id}><td><strong>{s.id}</strong></td><td>{s.vendor}</td><td>{s.status}</td><td><span className={'status ' + (s.risk === 'High' ? 'red' : s.risk === 'Medium' ? 'amber' : 'green')}>{s.risk}</span></td></tr>)}</tbody></table></div>
    </div>
  );
}
