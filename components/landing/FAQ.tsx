const faqs = [
  ['Does ProofChain replace our TMS or ERP?', 'No. ProofChain complements existing systems by organizing verification evidence, dispute workflows, and vendor performance analytics.'],
  ['What can AI compare?', 'Purchase orders, supplier invoices, delivery challans, warehouse inspection notes, uploaded photos, quantities, SKUs, price differences, and delivery dates.'],
  ['Who uses it day to day?', 'Warehouse managers, procurement teams, supply chain leaders, finance analysts, vendor managers, and operations leaders.'],
  ['Can we deploy with AWS?', 'Yes. The app is already wired for PostgreSQL through Prisma and can use AWS RDS plus S3 for documents and photos.'],
];

export function FAQ() {
  return <section className="section" style={{background:'white'}}><div className="container"><p className="eyebrow">FAQ</p><h2>Common questions</h2><div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))'}}>{faqs.map(([question, answer]) => <div className="card" key={question}><h3>{question}</h3><p className="metric">{answer}</p></div>)}</div></div></section>;
}
