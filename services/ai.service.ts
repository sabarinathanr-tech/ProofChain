import { aiAlerts } from '@/lib/constants';
export async function getAIInsights() { return aiAlerts.map((title, index) => ({ id: 'AI-' + (index + 1), title, confidence: 88 + index })); }
