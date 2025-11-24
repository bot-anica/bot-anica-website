import { getBaseUrl } from '@/utils/getBaseUrl';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const baseUrl = getBaseUrl();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error('API_KEY is not defined in environment variables');
      return NextResponse.json({ message: 'Internal server error: API_KEY is not configured.' }, { status: 500 });
    }
    
    const response = await fetch(`${baseUrl}/payment-methods`, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch payment methods:', error);
    return NextResponse.json({ message: 'Failed to fetch payment methods' }, { status: 500 });
  }
}
