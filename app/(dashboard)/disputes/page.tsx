import { ModulePage } from '@/components/dashboard/ModulePage';
import { disputes } from '@/lib/demo-data';

export default function DisputesPage() {
  return <ModulePage title="Dispute Management" description="Build evidence-backed vendor claims with timelines, comments, files, and AI summaries." actionLabel="Create dispute" rows={disputes} columns={[{ key: 'id', label: 'Dispute' }, { key: 'shipment', label: 'Shipment' }, { key: 'vendor', label: 'Vendor' }, { key: 'reason', label: 'Reason' }, { key: 'valueAtRisk', label: 'Value' }, { key: 'status', label: 'Status' }, { key: 'confidence', label: 'AI confidence' }]} />;
}
