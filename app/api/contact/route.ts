import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email
    // 2. Save to a database
    // 3. Integrate with a CRM
    
    // For now, we'll just log the data
    console.log('Contact form submission:', data);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Rate limiting headers
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  return new NextResponse(
    JSON.stringify({ message: 'Please use POST method' }),
    {
      status: 405,
      headers: {
        'Allow': 'POST',
        'Content-Type': 'application/json',
      },
    }
  );
} 