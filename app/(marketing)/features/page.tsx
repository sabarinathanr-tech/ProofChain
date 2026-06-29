import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
const featureGroups = [
  ['Shipment verification', 'Create shipments, attach documents, track carrier details, record warehouse arrival, and flag late or incomplete deliveries.'],
  ['Purchase order matching', 'Compare expected products, SKUs, quantities, prices, and delivery dates against invoices and delivery challans.'],
  ['Warehouse inspections', 'Capture received, missing, damaged, and extra quantities with inspection notes and photo evidence.'],
  ['AI discrepancy analysis', 'Generate missing-item summaries, price variance findings, confidence scores, and natural-language explanations.'],
  ['Dispute management', 'Build dispute timelines, evidence packets, vendor response history, AI summaries, comments, and exportable reports.'],
  ['Vendor intelligence', 'Track reliability, damage rate, delay patterns, dispute frequency, and preferred vendor eligibility.'],
];

export default function Page() {
  return (
    <main>
      <section className="section" style={{background:'white'}}>
        <Navbar />
        <div className="container" style={{paddingTop:64}}>
          <p className="eyebrow">Features</p>
          <h1>Everything needed to prove what happened to a shipment.</h1>
          <p className="metric" style={{ maxWidth: 760 }}>ProofChain connects procurement, warehouse, vendor, finance, and operations workflows into one evidence-first system.</p>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 24}}>
            {featureGroups.map(([title, body]) => <div className="card" key={title}><h3>{title}</h3><p className="metric">{body}</p></div>)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
