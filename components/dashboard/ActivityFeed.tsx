const activity = [
  ['10:42', 'Invoice INV-883 matched to PO-1042'],
  ['09:18', 'Dock photo added to SH-1029'],
  ['08:55', 'Warehouse verified SH-1038'],
  ['Today', 'Vendor response due for DSP-2901'],
];

export function ActivityFeed() {
  return <div className="card"><h3>Recent activity</h3><div className="timeline">{activity.map(([time, item]) => <div className="timeline-item" key={item}><span>{time}</span><p>{item}</p></div>)}</div></div>;
}
