import { NextResponse } from 'next/server';
import { purchaseOrders } from '@/lib/demo-data';

export async function GET() { return NextResponse.json({ resource: 'purchase-orders', data: purchaseOrders }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'purchase-orders', status: 'accepted', data: body }, { status: 201 }); }
