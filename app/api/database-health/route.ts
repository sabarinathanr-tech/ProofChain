import { NextResponse } from 'next/server';
import { prisma, hasDatabase } from '@/lib/prisma';

export async function GET() {
  if (!hasDatabase || !prisma) {
    return NextResponse.json({ connected: false, source: 'demo', message: 'DATABASE_URL is not configured.' });
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ connected: true, source: 'database', message: 'PostgreSQL connection is working.' });
  } catch (error) {
    return NextResponse.json({ connected: false, source: 'database', message: 'DATABASE_URL exists, but PostgreSQL is not reachable. Check RDS public access, security group, password, endpoint, and migrations.' }, { status: 200 });
  }
}
