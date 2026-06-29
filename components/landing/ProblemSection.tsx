const problems = [
  ['Missing delivery photos', 'Photos are often stored on phones or chat apps instead of the shipment record.'],
  ['Purchase order drift', 'Teams manually compare PO lines, invoices, challans, and received quantities after the issue has already escalated.'],
  ['Manual exception notes', 'Inspection notes rarely include enough context for finance or vendor recovery teams to defend a claim.'],
  ['Slow vendor follow-up', 'Every delay makes evidence harder to find and reduces the chance of a fast recovery.'],
];

export function ProblemSection() {
  return (
    <section className="section" style={{background:'white'}}>
      <div className="container">
        <p className="eyebrow">Why teams lose claims</p>
        <h2>Evidence is scattered across inboxes, docks, spreadsheets, and vendor portals.</h2>
        <p className="metric" style={{ maxWidth: 760 }}>ProofChain centralizes shipment verification so the right people can see what was ordered, what arrived, what changed, and which documents support the claim.</p>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 20}}>
          {problems.map(([item, description]) => <div className="card" key={item}><h3>{item}</h3><p className="metric">{description}</p></div>)}
        </div>
      </div>
    </section>
  );
}
