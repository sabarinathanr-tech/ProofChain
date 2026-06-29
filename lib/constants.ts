import { shipments } from '@/lib/demo-data';

export const dashboardStats = [{ label: 'Open disputes', value: '28', delta: '12 ready' }, { label: 'At-risk shipments', value: '17', delta: '4 high' }, { label: 'Recovered value', value: '$186k', delta: '+18%' }, { label: 'Vendor SLA', value: '94%', delta: '+6%' }];
export const recentShipments = shipments.map(({ id, vendor, status, risk }) => ({ id, vendor, status, risk }));
export const aiAlerts = ['SH-1029 has invoice weight variance above contract tolerance.', 'PO-1042 is missing signed delivery photos.', 'Atlas Cold Chain improved on-time evidence submission for three weeks.'];
