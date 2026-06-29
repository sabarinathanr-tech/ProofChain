import { NextResponse } from 'next/server';
import { warehouseInspections } from '@/lib/demo-data';
import { prisma } from '@/lib/prisma';

export async function GET() {
  if (!prisma) return NextResponse.json({ resource: 'warehouse', data: warehouseInspections, source: 'demo' });

  const data = await prisma.warehouseInspection.findMany({
    include: { shipment: true, photos: true },
    orderBy: { id: 'desc' },
  });

  return NextResponse.json({ resource: 'warehouse', data, source: 'database' });
}
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'warehouse', status: 'accepted', data: body }, { status: 201 }); }
