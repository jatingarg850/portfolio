import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';
import { withAdminAuth } from '@/lib/auth';

export const GET = withAdminAuth(async (request: NextRequest, context?: unknown): Promise<Response> => {
  const id = (context as { params: { id: string } })?.params?.id;
  try {
    await connectDB();
    
  const contact = await Contact.findById(id);
    
    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contact' },
      { status: 500 }
    );
  }
});

export const PATCH = withAdminAuth(async (request: NextRequest, context?: unknown): Promise<Response> => {
  const id = (context as { params: { id: string } })?.params?.id;
  try {
    await connectDB();
    
    const body = await request.json();
    
    const contact = await Contact.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update contact' },
      { status: 500 }
    );
  }
});

export const DELETE = withAdminAuth(async (request: NextRequest, context?: unknown): Promise<Response> => {
  const id = (context as { params: { id: string } })?.params?.id;
  try {
    await connectDB();
    
  const contact = await Contact.findByIdAndDelete(id);
    
    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
});