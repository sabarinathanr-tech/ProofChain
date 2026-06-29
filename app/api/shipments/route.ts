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

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!prisma) return NextResponse.json({ resource: 'shipments', status: 'accepted', data: body, source: 'demo' }, { status: 201 });

  const data = await prisma.shipment.create({ data: body });
  return NextResponse.json({ resource: 'shipments', status: 'created', data, source: 'database' }, { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.id) return NextResponse.json({ error: 'Shipment id is required.' }, { status: 400 });
  if (!prisma) return NextResponse.json({ resource: 'shipments', status: 'updated', data: body, source: 'demo' });

  const { id, ...updates } = body;
  const data = await prisma.shipment.update({ where: { id }, data: updates });
  return NextResponse.json({ resource: 'shipments', status: 'updated', data, source: 'database' });
}

export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Shipment id is required.' }, { status: 400 });
  if (!prisma) return NextResponse.json({ resource: 'shipments', status: 'deleted', id, source: 'demo' });

  await prisma.shipment.delete({ where: { id } });
  return NextResponse.json({ resource: 'shipments', status: 'deleted', id, source: 'database' });
}
