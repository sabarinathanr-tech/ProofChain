import { NextResponse } from 'next/server';
import { warehouseInspections } from '@/lib/demo-data';

export async function GET() { return NextResponse.json({ resource: 'warehouse', data: warehouseInspections }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'warehouse', status: 'accepted', data: body }, { status: 201 }); }
