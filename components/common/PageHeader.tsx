export function PageHeader({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="page-title">
      <div>
        <p className="eyebrow">ProofChain command center</p>
        <h1>{title}</h1>
        <p className="metric">{description}</p>
      </div>
      {action}
    </div>
  );
}
