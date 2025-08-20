import { NextResponse } from 'next/server';
import seedData from '@/lib/seed';

export async function POST() {
  try {
    await seedData();
    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully!' 
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}