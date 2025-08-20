import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Call from '@/lib/models/Call';
import { withAdminAuth } from '@/lib/auth';

export const GET = withAdminAuth(async (request: NextRequest, context?: unknown): Promise<Response> => {
  const id = (context as { params: { id: string } })?.params?.id;
  try {
    await connectDB();
    
  const call = await Call.findById(id);
    
    if (!call) {
      return NextResponse.json(
        { success: false, error: 'Call not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: call });
  } catch (error) {
    console.error('Error fetching call:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch call' },
      { status: 500 }
    );
  }
});

export const PATCH = withAdminAuth(async (request: NextRequest, context?: unknown): Promise<Response> => {
  const id = (context as { params: { id: string } })?.params?.id;
  try {
    await connectDB();
    
    const body = await request.json();
    
    const call = await Call.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );
    
    if (!call) {
      return NextResponse.json(
        { success: false, error: 'Call not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: call });
  } catch (error) {
    console.error('Error updating call:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update call' },
      { status: 500 }
    );
  }
});

export const DELETE = withAdminAuth(async (request: NextRequest, context?: unknown): Promise<Response> => {
  const id = (context as { params: { id: string } })?.params?.id;
  try {
    await connectDB();
    
  const call = await Call.findByIdAndDelete(id);
    
    if (!call) {
      return NextResponse.json(
        { success: false, error: 'Call not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Call deleted successfully' });
  } catch (error) {
    console.error('Error deleting call:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete call' },
      { status: 500 }
    );
  }
});