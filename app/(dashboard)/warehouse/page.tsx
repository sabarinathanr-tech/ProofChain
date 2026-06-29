import { ModulePage } from '@/components/dashboard/ModulePage';
import { warehouseInspections } from '@/lib/demo-data';

export default function WarehousePage() {
  return (
    <ModulePage title="Warehouse Verification" description="Record received, missing, damaged, and extra quantities with inspection notes." actionLabel="Verify shipment" rows={warehouseInspections} columns={[{ key: 'id', label: 'Inspection' }, { key: 'shipment', label: 'Shipment' }, { key: 'received', label: 'Received' }, { key: 'missing', label: 'Missing' }, { key: 'damaged', label: 'Damaged' }, { key: 'extra', label: 'Extra' }, { key: 'status', label: 'Status' }, { key: 'notes', label: 'Notes' }]}> 
      <div className="workflow">
        <div className="card"><p className="eyebrow">Step 1</p><h3>Scan inbound shipment</h3><p className="metric">Attach dock photos, vehicle details, documents, and intake timestamps.</p></div>
        <div className="card"><p className="eyebrow">Step 2</p><h3>Count exceptions</h3><p className="metric">Capture received, missing, damaged, and extra quantity by SKU.</p></div>
        <div className="card"><p className="eyebrow">Step 3</p><h3>Lock evidence</h3><p className="metric">Send verified inspection records to AI analysis and dispute workflows.</p></div>
      </div>
    </ModulePage>
  );
}
