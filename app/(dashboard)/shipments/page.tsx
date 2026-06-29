import { PageHeader } from '@/components/common/PageHeader';
import { ShipmentManager } from '@/components/dashboard/ShipmentManager';

export default function ShipmentsPage() {
  return (
    <>
      <PageHeader title="Shipments" description="Complete CRUD, live tracking, timeline, QR proof, and blockchain-style verification for every shipment." />
      <ShipmentManager />
    </>
  );
}
