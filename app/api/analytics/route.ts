import { NextResponse } from 'next/server';
import { analytics } from '@/lib/demo-data';

export async function GET() { return NextResponse.json({ resource: 'analytics', data: analytics }); }
