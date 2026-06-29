export type RiskLevel = 'Low' | 'Medium' | 'High';
export type WorkStatus = 'Draft' | 'In Transit' | 'Delivered' | 'Exception' | 'Verified' | 'Open' | 'Resolved' | 'Processing';

export type ShipmentRecord = {
  id: string;
  purchaseOrder: string;
  vendor: string;
  carrier: string;
  warehouse: string;
  expectedArrival: string;
  status: WorkStatus;
  risk: RiskLevel;
  value: string;
  discrepancy: string;
};

export const purchaseOrders = [
  { id: 'PO-1042', supplier: 'Northline Components', expectedDelivery: 'Jul 02, 2026', items: 18, quantity: 1240, status: 'Exception', invoiceMatch: '83%' },
  { id: 'PO-1048', supplier: 'Atlas Cold Chain', expectedDelivery: 'Jul 04, 2026', items: 9, quantity: 420, status: 'In Transit', invoiceMatch: '96%' },
  { id: 'PO-1051', supplier: 'Prime Dock Services', expectedDelivery: 'Jul 08, 2026', items: 14, quantity: 875, status: 'Draft', invoiceMatch: 'Pending' },
  { id: 'PO-1056', supplier: 'Vector Industrial', expectedDelivery: 'Jul 10, 2026', items: 22, quantity: 1880, status: 'Verified', invoiceMatch: '99%' },
];

export const shipments: ShipmentRecord[] = [
  { id: 'SH-1029', purchaseOrder: 'PO-1042', vendor: 'Northline Components', carrier: 'RoadAxis Logistics', warehouse: 'Detroit WH-03', expectedArrival: 'Jul 02, 2026', status: 'Exception', risk: 'High', value: '$42,800', discrepancy: '52 units missing, invoice price variance' },
  { id: 'SH-1031', purchaseOrder: 'PO-1048', vendor: 'Atlas Cold Chain', carrier: 'BluePallet Freight', warehouse: 'Dallas WH-02', expectedArrival: 'Jul 04, 2026', status: 'In Transit', risk: 'Medium', value: '$18,300', discrepancy: 'Temperature proof pending' },
  { id: 'SH-1038', purchaseOrder: 'PO-1056', vendor: 'Vector Industrial', carrier: 'Prime Dock Services', warehouse: 'Reno WH-01', expectedArrival: 'Jun 27, 2026', status: 'Verified', risk: 'Low', value: '$76,200', discrepancy: 'No mismatch detected' },
  { id: 'SH-1040', purchaseOrder: 'PO-1051', vendor: 'Prime Dock Services', carrier: 'TransBay', warehouse: 'Atlanta WH-01', expectedArrival: 'Jul 08, 2026', status: 'Processing', risk: 'Medium', value: '$31,900', discrepancy: 'Warehouse inspection not complete' },
];

export const vendors = [
  { id: 'VEN-018', name: 'Northline Components', reliability: 87, averageDelay: '2.8 days', damageRate: '3.4%', openDisputes: 4, preferred: false },
  { id: 'VEN-021', name: 'Atlas Cold Chain', reliability: 94, averageDelay: '0.9 days', damageRate: '1.1%', openDisputes: 1, preferred: true },
  { id: 'VEN-034', name: 'Prime Dock Services', reliability: 91, averageDelay: '1.4 days', damageRate: '1.7%', openDisputes: 2, preferred: true },
  { id: 'VEN-041', name: 'Vector Industrial', reliability: 98, averageDelay: '0.3 days', damageRate: '0.4%', openDisputes: 0, preferred: true },
];

export const disputes = [
  { id: 'DSP-2901', shipment: 'SH-1029', vendor: 'Northline Components', reason: 'Missing quantity and invoice variance', valueAtRisk: '$8,740', status: 'Open', confidence: 93 },
  { id: 'DSP-2897', shipment: 'SH-1031', vendor: 'Atlas Cold Chain', reason: 'Cold-chain evidence incomplete', valueAtRisk: '$2,100', status: 'Processing', confidence: 78 },
  { id: 'DSP-2888', shipment: 'SH-1038', vendor: 'Vector Industrial', reason: 'Resolved packaging damage claim', valueAtRisk: '$0', status: 'Resolved', confidence: 97 },
];

export const warehouseInspections = [
  { id: 'INS-7781', shipment: 'SH-1029', received: 1188, missing: 52, damaged: 14, extra: 0, status: 'Exception', notes: 'Two pallets arrived with broken straps and mismatched SKU labels.' },
  { id: 'INS-7784', shipment: 'SH-1038', received: 1880, missing: 0, damaged: 0, extra: 0, status: 'Verified', notes: 'Delivery matched PO and invoice. Photos archived.' },
  { id: 'INS-7790', shipment: 'SH-1040', received: 0, missing: 0, damaged: 0, extra: 0, status: 'Processing', notes: 'Inspection scheduled for inbound dock B.' },
];

export const aiFindings = [
  { label: 'Missing items', value: '52 units', detail: 'AI found a quantity gap between PO-1042, invoice INV-8821, and warehouse intake.' },
  { label: 'Price difference', value: '$1.48/unit', detail: 'Invoice unit cost exceeds the purchase order by 6.2%.' },
  { label: 'Late delivery', value: '1 day', detail: 'Carrier proof places arrival after the contractual delivery window.' },
  { label: 'Confidence score', value: '93%', detail: 'Evidence is supported by PO, invoice, photos, and inspection notes.' },
];

export const activities = [
  'AI generated dispute packet for SH-1029.',
  'Warehouse verified SH-1038 with zero exceptions.',
  'Atlas Cold Chain uploaded temperature certificate.',
  'Finance exported the June vendor recovery report.',
];

export const notifications = [
  { title: 'Shipment arrived', body: 'SH-1040 checked in at Atlanta WH-01.', severity: 'Medium' },
  { title: 'AI completed', body: 'Evidence analysis for SH-1029 is ready for review.', severity: 'High' },
  { title: 'Vendor responded', body: 'Atlas Cold Chain added cold-chain documents.', severity: 'Low' },
];

export const analytics = [
  { label: 'Shipment success rate', value: '94.2%', delta: '+4.1%' },
  { label: 'Average delay', value: '1.3 days', delta: '-0.6 days' },
  { label: 'Warehouse accuracy', value: '98.1%', delta: '+1.2%' },
  { label: 'Savings generated', value: '$186k', delta: '+18%' },
];
