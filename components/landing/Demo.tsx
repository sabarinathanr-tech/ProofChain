import { recentShipments } from '@/lib/constants';
export function Demo() {
  return (
    <section className="section" style={{background:'white'}}>
      <div className="container">
        <p className="eyebrow">AI demonstration</p>
        <h2>From warehouse exception to evidence-backed dispute packet in minutes.</h2>
        <div className="workflow">
          <div className="card"><p className="eyebrow">1. Upload</p><h3>PO, invoice, challan, photos</h3><p className="metric">ProofChain groups every document and image against the shipment and vendor.</p></div>
          <div className="card"><p className="eyebrow">2. Compare</p><h3>Quantities, SKUs, price, dates</h3><p className="metric">AI highlights mismatches, missing information, and confidence by evidence type.</p></div>
          <div className="card"><p className="eyebrow">3. Resolve</p><h3>Dispute report and vendor email</h3><p className="metric">Teams export a clear claim packet instead of rebuilding the story manually.</p></div>
        </div>
        <div className="card" style={{overflowX:'auto'}}>
          <table className="table"><thead><tr><th>Shipment</th><th>Vendor</th><th>Status</th><th>Risk</th></tr></thead><tbody>{recentShipments.map((s) => <tr key={s.id}><td>{s.id}</td><td>{s.vendor}</td><td>{s.status}</td><td><span className={'status ' + (s.risk === 'High' ? 'red' : s.risk === 'Medium' ? 'amber' : 'green')}>{s.risk}</span></td></tr>)}</tbody></table>
        </div>
      </div>
    </section>
  );
}
