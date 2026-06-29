export type SessionUser = { id: string; name: string; role: string };
export async function getCurrentUser(): Promise<SessionUser> { return { id: 'demo-user', name: 'Demo Operator', role: 'Operations Manager' }; }
