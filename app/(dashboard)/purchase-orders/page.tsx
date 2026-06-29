import { ModulePage } from '@/components/dashboard/ModulePage';
import { purchaseOrders } from '@/lib/demo-data';

export default function PurchaseOrdersPage() {
  return <ModulePage title="Purchase Orders" description="Create, upload, search, and reconcile purchase orders against supplier evidence." actionLabel="New PO" rows={purchaseOrders} columns={[{ key: 'id', label: 'PO' }, { key: 'supplier', label: 'Supplier' }, { key: 'expectedDelivery', label: 'Expected' }, { key: 'items', label: 'Items' }, { key: 'quantity', label: 'Qty' }, { key: 'status', label: 'Status' }, { key: 'invoiceMatch', label: 'Invoice match' }]} />;
}
