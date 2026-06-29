export function scoreDisputeRisk(evidenceCount: number, invoiceVariance: number) { return Math.min(99, Math.round(evidenceCount * 8 + invoiceVariance * 100)); }
