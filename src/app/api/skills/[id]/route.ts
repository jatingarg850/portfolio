import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Skill from '@/lib/models/Skill';
import { withAdminAuth } from '@/lib/auth';

export const PUT = withAdminAuth(async (request: NextRequest, user: unknown, context?: unknown): Promise<Response> => {
  try {
    await connectDB();
    
    // Extract ID from URL pathname
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Skill ID is required' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    const skill = await Skill.findByIdAndUpdate(id, body, { 
      new: true, 
      runValidators: true 
    });
    
    if (!skill) {
      return NextResponse.json(
        { success: false, error: 'Skill not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: skill });
  } catch (error) {
    console.error('Error updating skill:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update skill' },
      { status: 500 }
    );
  }
});

export const DELETE = withAdminAuth(async (request: NextRequest, user: unknown, context?: unknown): Promise<Response> => {
  try {
    await connectDB();
    
    // Extract ID from URL pathname
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Skill ID is required' },
        { status: 400 }
      );
    }
    
    console.log('Attempting to delete skill with ID:', id);
    
    const skill = await Skill.findByIdAndDelete(id);
    
    if (!skill) {
      return NextResponse.json(
        { success: false, error: 'Skill not found' },
        { status: 404 }
      );
    }
    
    console.log('Successfully deleted skill:', skill.name);
    return NextResponse.json({ success: true, message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete skill' },
      { status: 500 }
    );
  }
});