import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { method, body } = await req.json();

  // 포스트만 사용가능
  if (method !== 'POST') {
    return NextResponse.json(
      {
        error: 'Invalid HTTP method. Only POST method is allowed.',
      },
      { status: 400 },
    );
  }

  try {
    if (!body) {
      return NextResponse.json(
        { error: 'Bad reqeust (no body)' },
        { status: 400 },
      );
    }

    const idToRevalidate = await req.json();
    // seo 페이지와 seo 상세페이지를 재생성한다.
    /**
     * Revalidate a specific page and regenerate it using On-Demand Incremental Static Regeneration.
     * The path should be an actual path, not a rewritten path. E.g. for "/blog/[slug]" this should be "/blog/post-1".
     */
    if (idToRevalidate) {
      revalidatePath('/seo');
      revalidatePath(`/seo/${idToRevalidate}`);
      return NextResponse.json({ revalidated: true });
    }
  } catch (err) {
    return NextResponse.json(
      { error: 'Error while revalidating' },
      { status: 500 },
    );
  }
  return NextResponse.json(
    { error: 'Error while revalidating' },
    { status: 500 },
  );
}
