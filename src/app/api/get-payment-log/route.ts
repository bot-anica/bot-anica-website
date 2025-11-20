
import { NextRequest, NextResponse } from 'next/server';

import { getBaseUrl } from '@/utils/getBaseUrl';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const apiUrl = getBaseUrl() || 'http://localhost:3001';
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error('API_KEY is not defined in environment variables');
      return NextResponse.json({ message: 'Internal server error: API_KEY is missing' }, { status: 500 });
    }

    const response = await fetch(`${apiUrl}/payment-logs/last-by-email?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
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
    return NextResponse.json({ message: `Failed to fetch payment log: ${message}` }, { status: 500 });
  }
}
