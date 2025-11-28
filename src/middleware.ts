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

const UPTIME_IPS = [
  '3.212.128.62',
  '34.198.201.66',
  '52.22.236.30',
  '54.167.223.174',
  '52.87.72.16',
  '54.87.112.51',
  '3.20.63.178',
  '52.15.147.27',
  '3.12.251.153',
  '18.116.205.62',
  '3.133.226.214',
  '3.149.57.90',
  '45.55.123.175',
  '45.55.127.146',
  '129.212.132.140',
  '134.199.240.137',
  '138.197.53.117',
  '138.197.53.138',
  '138.197.54.143',
  '138.197.54.247',
  '138.197.63.92',
  '143.244.221.177',
  '144.126.251.21',
  '209.38.49.1',
  '209.38.49.206',
  '209.38.49.226',
  '209.38.51.43',
  '5.161.75.7',
  '5.161.73.160',
  '5.161.113.195',
  '5.161.117.52',
  '5.161.177.47',
  '5.161.194.92',
  '5.161.215.244',
  '178.156.181.172',
  '178.156.184.20',
  '178.156.185.127',
  '178.156.185.231',
  '178.156.187.238',
  '178.156.189.113',
  '178.156.189.249',
  '69.162.124.227',
  '69.162.124.235',
  '69.162.124.238',
  '216.144.248.18',
  '216.144.248.19',
  '216.144.248.21',
  '216.144.248.22',
  '216.144.248.23',
  '216.144.248.24',
  '216.144.248.25',
  '216.144.248.26',
  '216.144.248.27',
  '216.144.248.28',
  '216.144.248.29',
  '216.144.248.30',
  '216.245.221.83',
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') && pathname !== '/api/health'
  ) {
    return NextResponse.next();
  }

  const ua = request.headers.get('user-agent') || '';
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';

  const isBotByUA = MONITOR_BOTS.some(bot => ua.includes(bot));

  const isBotByIP = UPTIME_IPS.some(prefix => ip.startsWith(prefix));

  if ((isBotByUA || isBotByIP) && pathname !== '/favicon.ico') {
    return new NextResponse('OK', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store, max-age=0',
        'x-monitor': 'true',
      },
    });
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};