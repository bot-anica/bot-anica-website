import { NextRequest, NextResponse } from 'next/server';

import { getBaseUrl } from '@/utils/getBaseUrl';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiUrl = getBaseUrl() || 'http://localhost:3001';
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error('API_KEY is not defined in environment variables');
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }

    const response = await fetch(`${apiUrl}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(body),
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
    return NextResponse.json({ message: `Failed to create invoice: ${message}` }, { status: 500 });
  }
}
