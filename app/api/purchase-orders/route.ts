import { NextResponse } from 'next/server';
import { purchaseOrders } from '@/lib/demo-data';
import { prisma } from '@/lib/prisma';

export async function GET() {
  if (!prisma) return NextResponse.json({ resource: 'purchase-orders', data: purchaseOrders, source: 'demo' });

  try {
    const data = await prisma.purchaseOrder.findMany({
      include: { vendor: true, items: true },
      orderBy: { expectedDelivery: 'desc' },
    });

    return NextResponse.json({ resource: 'purchase-orders', data, source: 'database' });
  } catch (error) {
    return NextResponse.json({ resource: 'purchase-orders', data: purchaseOrders, source: 'demo', database: 'unavailable' });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ resource: 'purchase-orders', status: 'accepted', data: body }, { status: 201 });
}
