import { ModulePage } from '@/components/dashboard/ModulePage';
import { notifications } from '@/lib/demo-data';

const rows = notifications.map((item, index) => ({ id: `NT-${7710 + index}`, ...item, channel: index === 1 ? 'Email + in-app' : 'In-app' }));

export default function NotificationsPage() {
  return <ModulePage title="Notifications" description="Review shipment arrivals, warehouse verification, AI completion, dispute, and report events." actionLabel="Configure" rows={rows} columns={[{ key: 'id', label: 'ID' }, { key: 'title', label: 'Event' }, { key: 'body', label: 'Message' }, { key: 'severity', label: 'Severity' }, { key: 'channel', label: 'Channel' }]} />;
}
