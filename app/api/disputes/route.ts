import { NextResponse } from 'next/server';
import { disputes } from '@/lib/demo-data';
import { prisma } from '@/lib/prisma';

export async function GET() {
  if (!prisma) return NextResponse.json({ resource: 'disputes', data: disputes, source: 'demo' });

  try {
    const data = await prisma.dispute.findMany({
      include: { shipment: true, vendor: true, evidence: true },
      orderBy: { id: 'desc' },
    });

    return NextResponse.json({ resource: 'disputes', data, source: 'database' });
  } catch (error) {
    return NextResponse.json({ resource: 'disputes', data: disputes, source: 'demo', database: 'unavailable' });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ resource: 'disputes', status: 'accepted', data: body }, { status: 201 });
}
