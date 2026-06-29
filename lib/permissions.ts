export function canAccess(role: string, area: string) { if (role === 'Vendor') return ['shipments', 'disputes'].includes(area); return true; }
