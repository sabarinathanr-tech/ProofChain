import { ModulePage } from '@/components/dashboard/ModulePage';
const reports = [
  { id: 'RPT-W26', name: 'Weekly shipment report', type: 'PDF', status: 'Ready', owner: 'Operations' },
  { id: 'RPT-M06', name: 'Monthly vendor scorecard', type: 'Excel', status: 'Ready', owner: 'Procurement' },
  { id: 'RPT-Q2', name: 'Quarterly dispute recovery', type: 'CSV', status: 'Processing', owner: 'Finance' },
];

export default function ReportsPage() {
  return <ModulePage title="Reports" description="Export shipment, vendor, dispute, and recovery reports as PDF, Excel, or CSV." actionLabel="Generate report" rows={reports} columns={[{ key: 'id', label: 'Report' }, { key: 'name', label: 'Name' }, { key: 'type', label: 'Export' }, { key: 'status', label: 'Status' }, { key: 'owner', label: 'Owner' }]} />;
}
