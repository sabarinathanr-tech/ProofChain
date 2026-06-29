import { NextResponse } from 'next/server';
import { vendors } from '@/lib/demo-data';
import { prisma } from '@/lib/prisma';

export async function GET() {
  if (!prisma) return NextResponse.json({ resource: 'vendors', data: vendors, source: 'demo' });

  try {
    const data = await prisma.vendor.findMany({
      include: { disputes: true, shipments: true },
      orderBy: { reliability: 'desc' },
    });

    return NextResponse.json({ resource: 'vendors', data, source: 'database' });
  } catch (error) {
    return NextResponse.json({ resource: 'vendors', data: vendors, source: 'demo', database: 'unavailable' });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ resource: 'vendors', status: 'accepted', data: body }, { status: 201 });
}
