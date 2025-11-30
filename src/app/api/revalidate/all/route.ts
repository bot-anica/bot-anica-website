import { NextRequest } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

const SECRET = process.env.REVALIDATE_SECRET!;

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  // Вариант А — по тегам (самый мощный)
  revalidateTag('courses');        // обновит всё, где был fetch с tag 'courses'
  revalidateTag('footer');

  // Вариант Б — по путям
  revalidatePath('/', 'layout');           // обновит root layout → футер
  revalidatePath('/courses/[courseUrlParam]', 'page'); // обновит все курсы

  return Response.json({
    revalidated: true,
    now: new Date().toISOString(),
  });
}