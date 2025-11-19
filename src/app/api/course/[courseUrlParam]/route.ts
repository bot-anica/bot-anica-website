import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: Promise<{ courseUrlParam: string }> }) {
  const { courseUrlParam } = await context.params;

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '';

  const backendResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/url/${courseUrlParam}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': process.env.API_KEY || '',
        'x-client-ip': ip,
      },
    }
  );

  const data = await backendResponse.json();

  return NextResponse.json(data, {
    status: backendResponse.status,
  });
}
