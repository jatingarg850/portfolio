import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactSubmission from '@/lib/models/ContactSubmission';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Determine priority based on budget and timeline
    let priority = 'medium';
    if (body.budget.max > 10000 || body.timeline === 'ASAP (Rush job)') {
      priority = 'high';
    } else if (body.budget.max < 2000) {
      priority = 'low';
    }
    
    const submission = new ContactSubmission({
      ...body,
      priority,
      status: 'new'
    });
    
    await submission.save();
    
    return NextResponse.json({ 
      success: true, 
      data: submission,
      message: 'Contact form submitted successfully!' 
    }, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const submissions = await ContactSubmission.find()
      .sort({ createdAt: -1 })
      .limit(50);
    
    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contact submissions' },
      { status: 500 }
    );
  }
}