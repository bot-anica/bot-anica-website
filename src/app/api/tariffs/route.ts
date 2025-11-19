
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const course = searchParams.get('course');
  const res = await fetch("https://api64.ipify.org?format=json");
  const { ip: userIp } = await res.json();

  if (!course) {
    return NextResponse.json({ message: 'Course is required' }, { status: 400 });
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error('API_KEY is not defined in environment variables');
      return NextResponse.json({ message: 'Internal server error: API_KEY is missing' }, { status: 500 });
    }

    const response = await fetch(`${apiUrl}/tariffs/course/${course}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'x-user-ip': userIp || '',
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(responseData, { status: response.status });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    let message = 'Unknown error';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ message: `Failed to fetch course tariffs: ${message}` }, { status: 500 });
  }
}
