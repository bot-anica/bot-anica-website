import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MONITOR_BOTS = [
  'UptimeRobot',
  'cron-job.org',
  'Pingdom',
  'Freshping',
  'StatusCake',
  'HetrixTools',
  'NodePing',
  'Healthchecks.io',
  'Render',
];

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const isMonitorBot = MONITOR_BOTS.some(bot => ua.includes(bot));

  if (isMonitorBot && request.nextUrl.pathname.startsWith('/_next') === false) {
    return new NextResponse('OK', { status: 200 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};