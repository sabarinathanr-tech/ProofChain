import { NextResponse } from 'next/server';

const reports = [{ id: 'RPT-W26', name: 'Weekly shipment report', type: 'PDF' }, { id: 'RPT-M06', name: 'Monthly vendor scorecard', type: 'Excel' }];
export async function GET() { return NextResponse.json({ resource: 'reports', data: reports }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'reports', status: 'generated', data: body }, { status: 201 }); }
