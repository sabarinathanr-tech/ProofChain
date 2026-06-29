import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
const values = [
  ['Evidence before escalation', 'Every shipment exception should have clear proof before a vendor dispute begins.'],
  ['Operations and finance together', 'Warehouse notes, procurement records, and finance recovery data belong in the same workflow.'],
  ['AI as a business tool', 'ProofChain uses AI to compare records and generate reports, not to distract teams with a chatbot.'],
];

export default function Page() {
  return (
    <main>
      <section className="section" style={{background:'white'}}>
        <Navbar />
        <div className="container" style={{paddingTop:64}}>
          <p className="eyebrow">About ProofChain</p>
          <h1>Supply chain truth should be easy to prove.</h1>
          <p className="metric" style={{ maxWidth: 760 }}>ProofChain is built for manufacturing companies, warehouses, distributors, procurement teams, and operations leaders that need faster shipment verification and stronger vendor dispute resolution.</p>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 24}}>
            {values.map(([title, body]) => <div className="card" key={title}><h3>{title}</h3><p className="metric">{body}</p></div>)}
          </div>
          <div className="card" style={{ marginTop: 20 }}>
            <h2>What ProofChain centralizes</h2>
            <p className="metric">Purchase orders, supplier invoices, delivery challans, warehouse inspection notes, shipment photos, vendor responses, AI findings, dispute timelines, reports, and analytics snapshots.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
