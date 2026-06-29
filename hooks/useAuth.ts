import { getCurrentUser } from '@/lib/auth';
export async function useAuth() { return getCurrentUser(); }
