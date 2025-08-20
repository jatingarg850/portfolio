import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Skill from '@/lib/models/Skill';
import { withAdminAuth } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}

export const POST = withAdminAuth(async (request: NextRequest) => {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const skill = new Skill(body);
    await skill.save();
    
    return NextResponse.json({ success: true, data: skill }, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create skill' },
      { status: 500 }
    );
  }
});