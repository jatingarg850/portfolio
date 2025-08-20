import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Analytics from '@/lib/models/Analytics';
import { withAdminAuth } from '@/lib/auth';

export const GET = withAdminAuth(async (request: NextRequest) => {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const analytics = await Analytics.find({
      date: { $gte: startDate }
    }).sort({ date: -1 });
    
    // Calculate totals
    const totals = analytics.reduce((acc, day) => ({
      pageViews: acc.pageViews + day.pageViews,
      uniqueVisitors: acc.uniqueVisitors + day.uniqueVisitors,
      contactFormSubmissions: acc.contactFormSubmissions + day.contactFormSubmissions,
      discoveryCallRequests: acc.discoveryCallRequests + day.discoveryCallRequests,
    }), {
      pageViews: 0,
      uniqueVisitors: 0,
      contactFormSubmissions: 0,
      discoveryCallRequests: 0,
    });
    
    return NextResponse.json({ 
      success: true, 
      data: {
        analytics,
        totals,
        period: `${days} days`
      }
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
});

export const POST = withAdminAuth(async (request: NextRequest) => {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Update or create analytics for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const analytics = await Analytics.findOneAndUpdate(
      { date: today },
      { $inc: body },
      { upsert: true, new: true }
    );
    
    return NextResponse.json({ success: true, data: analytics });
  } catch (error) {
    console.error('Error updating analytics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update analytics' },
      { status: 500 }
    );
  }
});