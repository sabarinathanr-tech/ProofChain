const plans = [
  ['Starter', '$299', 'For one warehouse team', 'Shipment dashboard, PO upload, warehouse inspections, basic dispute reports'],
  ['Operations', '$799', 'For multi-site claim control', 'AI analysis, vendor scorecards, team roles, exports, notification workflows'],
  ['Enterprise', 'Custom', 'For connected vendor networks', 'SSO, custom retention, private storage, advanced permissions, priority onboarding'],
];

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <p className="eyebrow">Pricing</p>
        <h2>Start lean, scale with shipment volume and vendor complexity.</h2>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))'}}>
          {plans.map(([name, price, copy, details]) => <div className="card" key={name}><h3>{name}</h3><h2>{price}</h2><p className="metric">{copy}</p><p>{details}</p></div>)}
        </div>
      </div>
    </section>
  );
}
