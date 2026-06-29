import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
const plans = [
  ['Starter', '$299/mo', 'Single-site teams validating inbound shipments.', '1 warehouse, 5 users, PO and invoice upload, inspection records, basic exports'],
  ['Operations', '$799/mo', 'Growing manufacturers with multi-team dispute workflows.', '5 warehouses, 25 users, AI analysis, vendor scorecards, notifications, PDF/CSV exports'],
  ['Enterprise', 'Custom', 'Large supply chain networks with security and integration needs.', 'SSO, custom roles, private storage, RDS/S3 architecture, audit retention, onboarding support'],
];

export default function Page() {
  return (
    <main>
      <section className="section" style={{background:'white'}}>
        <Navbar />
        <div className="container" style={{paddingTop:64}}>
          <p className="eyebrow">Pricing</p>
          <h1>Plans for teams that need defensible shipment evidence.</h1>
          <p className="metric" style={{ maxWidth: 720 }}>Start with a demo workspace and connect production infrastructure when your AWS database, storage, and AI keys are ready.</p>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 24}}>
            {plans.map(([name, price, audience, includes]) => <div className="card" key={name}><h3>{name}</h3><h2>{price}</h2><p className="metric">{audience}</p><p>{includes}</p></div>)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
