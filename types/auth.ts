export type UserRole = 'Owner' | 'Operations Manager' | 'Warehouse Lead' | 'Finance Analyst' | 'Vendor';
export type AuthUser = { id: string; email: string; name: string; role: UserRole };
