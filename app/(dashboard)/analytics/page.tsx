import { PageHeader } from '@/components/common/PageHeader';
import { analytics } from '@/lib/demo-data';

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader title="Analytics" description="Track shipment success, vendor reliability, warehouse accuracy, delays, disputes, and savings." />
      <div className="kpi-grid">{analytics.map((item) => <div className="card" key={item.label}><p className="metric">{item.label}</p><strong>{item.value}</strong><span className="status green">{item.delta}</span></div>)}</div>
      <div className="card"><h3>Monthly shipments</h3><div className="chart-bars" aria-label="Monthly shipment trend"><span style={{height:'46%'}} /><span style={{height:'58%'}} /><span style={{height:'63%'}} /><span style={{height:'72%'}} /><span style={{height:'68%'}} /><span style={{height:'86%'}} /><span style={{height:'91%'}} /></div></div>
    </>
  );
}
