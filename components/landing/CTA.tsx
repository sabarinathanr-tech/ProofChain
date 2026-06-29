import Link from 'next/link';
export function CTA() { return <section className="section"><div className="container card" style={{alignItems:'center',display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap'}}><div><p className="eyebrow">Ready</p><h2>Protect your next claim before it starts.</h2></div><Link className="button" href="/signup">Create workspace</Link></div></section>; }
