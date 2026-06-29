import { NextResponse } from 'next/server';
import { disputes } from '@/lib/demo-data';

export async function GET() { return NextResponse.json({ resource: 'disputes', data: disputes }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'disputes', status: 'accepted', data: body }, { status: 201 }); }
