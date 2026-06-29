import { ModulePage } from '@/components/dashboard/ModulePage';
import { vendors } from '@/lib/demo-data';

export default function VendorsPage() {
  return <ModulePage title="Vendors" description="Monitor vendor reliability, delays, damage rate, disputes, and preferred status." actionLabel="Add vendor" rows={vendors} columns={[{ key: 'id', label: 'Vendor ID' }, { key: 'name', label: 'Name' }, { key: 'reliability', label: 'Reliability' }, { key: 'averageDelay', label: 'Avg delay' }, { key: 'damageRate', label: 'Damage rate' }, { key: 'openDisputes', label: 'Open disputes' }, { key: 'preferred', label: 'Preferred' }]} />;
}
