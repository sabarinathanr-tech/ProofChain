import { NextResponse } from 'next/server';
import { vendors } from '@/lib/demo-data';

export async function GET() { return NextResponse.json({ resource: 'vendors', data: vendors }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'vendors', status: 'accepted', data: body }, { status: 201 }); }
