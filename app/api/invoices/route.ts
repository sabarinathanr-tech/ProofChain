import { NextResponse } from 'next/server';
export async function GET() { return NextResponse.json({ resource: 'invoices', status: 'ready', data: [] }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'invoices', status: 'accepted', body }, { status: 201 }); }
