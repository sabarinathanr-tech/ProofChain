import { PageHeader } from '@/components/common/PageHeader';
import { aiFindings, disputes } from '@/lib/demo-data';

export default function AIAnalysisPage() {
  return (
    <>
      <PageHeader title="AI Analysis" description="Compare POs, invoices, delivery challans, warehouse photos, and inspection notes without a chatbot." action={<button className="button">Run analysis</button>} />
      <div className="insight-grid">{aiFindings.map((finding) => <div className="insight-card" key={finding.label}><p className="eyebrow">{finding.label}</p><strong>{finding.value}</strong><p className="metric">{finding.detail}</p></div>)}</div>
      <div className="split-grid">
        <div className="card"><h3>Evidence summary</h3><p className="metric">PO-1042 expected 1,240 units. Warehouse received 1,188 units and marked 14 damaged. Invoice INV-8821 includes a unit price above the agreed purchase order value. Carrier proof confirms late delivery by one day.</p><textarea className="textarea" defaultValue="Draft vendor email: We are opening a formal dispute for SH-1029 due to missing quantity, damaged units, and invoice variance. Attached evidence includes the purchase order, invoice, inspection notes, delivery record, and dock photos." /></div>
        <div className="card"><h3>Dispute readiness</h3><table className="table"><tbody>{disputes.slice(0, 2).map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.confidence}%</td><td>{item.status}</td></tr>)}</tbody></table><button className="button" style={{ marginTop: 14 }}>Generate dispute report</button></div>
      </div>
    </>
  );
}
