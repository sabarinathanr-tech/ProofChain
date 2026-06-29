const features = [
  ['AI claim readiness scoring', 'Scores each shipment by missing evidence, invoice mismatches, late delivery risk, damaged quantity, and vendor response history.'],
  ['Document comparison', 'Compares purchase orders, invoices, delivery challans, warehouse notes, and uploaded photos in one review flow.'],
  ['Warehouse exception timeline', 'Captures received, damaged, missing, and extra quantity events with inspection notes and photo proof.'],
  ['Vendor performance intelligence', 'Tracks reliability, average delay, damage rate, open disputes, completed shipments, and preferred-vendor status.'],
  ['Dispute packet generation', 'Turns findings into a vendor-ready evidence summary, claim timeline, and draft email for faster resolution.'],
  ['Reports and exports', 'Supports weekly, monthly, quarterly, shipment, vendor, and dispute reports for finance and operations teams.'],
];

export function Features() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Features</p>
        <h2>One operating layer for shipments, disputes, vendors, and proof.</h2>
        <p className="metric" style={{ maxWidth: 720 }}>ProofChain gives procurement, warehouse, finance, and operations teams the same evidence record, so every exception can be reviewed without chasing PDFs, photos, spreadsheets, and email threads.</p>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', marginTop: 20}}>
          {features.map(([feature, description]) => <div className="card" key={feature}><h3>{feature}</h3><p className="metric">{description}</p></div>)}
        </div>
      </div>
    </section>
  );
}
