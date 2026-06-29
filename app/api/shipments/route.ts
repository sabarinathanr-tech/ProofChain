import { NextResponse } from 'next/server';
import { shipments } from '@/lib/demo-data';
import { prisma } from '@/lib/prisma';

export async function GET() {
  if (!prisma) return NextResponse.json({ resource: 'shipments', data: shipments, source: 'demo' });

  const data = await prisma.shipment.findMany({
    include: { purchaseOrder: true, vendor: true, warehouse: true },
    orderBy: { expectedArrival: 'desc' },
  });

  return NextResponse.json({ resource: 'shipments', data, source: 'database' });
}
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'shipments', status: 'accepted', data: body }, { status: 201 }); }
