import { ModulePage } from '@/components/dashboard/ModulePage';
import { shipments } from '@/lib/demo-data';

export default function ShipmentsPage() {
  return <ModulePage title="Shipments" description="Track carrier details, delivery evidence, shipment status, and exception risk." actionLabel="Create shipment" rows={shipments} columns={[{ key: 'id', label: 'Shipment' }, { key: 'purchaseOrder', label: 'PO' }, { key: 'vendor', label: 'Vendor' }, { key: 'carrier', label: 'Carrier' }, { key: 'warehouse', label: 'Warehouse' }, { key: 'expectedArrival', label: 'Arrival' }, { key: 'status', label: 'Status' }, { key: 'risk', label: 'Risk' }]} />;
}
