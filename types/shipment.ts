export type ShipmentRisk = 'Low' | 'Medium' | 'High';
export type Shipment = { id: string; vendor: string; status: string; risk: ShipmentRisk };
