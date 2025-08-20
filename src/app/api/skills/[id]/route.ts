import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Skill from '@/lib/models/Skill';
import { withAdminAuth } from '@/lib/auth';

export const PUT = withAdminAuth(async (request: NextRequest, user: any, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id } = params;
    
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

export const DELETE = withAdminAuth(async (request: NextRequest, user: any, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    
    const { id } = params;
    
    const skill = await Skill.findByIdAndDelete(id);
    
    if (!skill) {
      return NextResponse.json(
        { success: false, error: 'Skill not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete skill' },
      { status: 500 }
    );
  }
});