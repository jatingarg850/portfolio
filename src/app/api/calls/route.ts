import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Call from '@/lib/models/Call';
import { withAdminAuth } from '@/lib/auth';

export const GET = withAdminAuth(async (request: NextRequest) => {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    
  const query: Record<string, string> = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (type && type !== 'all') {
      query.type = type;
    }
    
    const calls = await Call.find(query).sort({ date: 1, time: 1 });
    
    return NextResponse.json({ success: true, data: calls });
  } catch (error) {
    console.error('Error fetching calls:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch calls' },
      { status: 500 }
    );
  }
});

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const call = new Call(body);
    await call.save();
    
    return NextResponse.json({ success: true, data: call }, { status: 201 });
  } catch (error) {
    console.error('Error creating call:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create call' },
      { status: 500 }
    );
  }
}