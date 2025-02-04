import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  // 포스트만 사용가능
  if (method !== 'POST') {
    return res
      .status(400)
      .json({ error: 'Invalid HTTP method. Only POST method is allowed.' });
  }

  try {
    if (!body) {
      return res.status(400).send('Bad reqeust (no body)');
    }

    const idToRevalidate = body.id;
    // seo 페이지와 seo 상세페이지를 재생성한다.
    /**
     * Revalidate a specific page and regenerate it using On-Demand Incremental Static Regeneration.
     * The path should be an actual path, not a rewritten path. E.g. for "/blog/[slug]" this should be "/blog/post-1".
     */
    if (idToRevalidate) {
      await res.revalidate('/seo');
      await res.revalidate(`/seo/${idToRevalidate}`);
      return res.json({ revalidated: true });
    }
  } catch (err) {
    return res.status(500).send('Error while revalidating');
  }
  return res.status(500).send('Error while revalidating');
}
