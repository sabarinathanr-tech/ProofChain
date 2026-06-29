import { NextResponse } from 'next/server';
import { aiFindings } from '@/lib/demo-data';

export async function GET() { return NextResponse.json({ resource: 'ai-analysis', data: aiFindings }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ resource: 'ai-analysis', status: 'completed', input: body, data: aiFindings }, { status: 201 }); }
