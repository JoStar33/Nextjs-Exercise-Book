import { NextRequest, NextResponse } from 'next/server';

// 미들웨어를 활용해서 모바일 환경 & 데스크탑 환경을 나누는게 가능함.
export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (
    url?.pathname.includes('_next') ||
    /\./.test(url?.pathname) ||
    url?.pathname.includes('/api')
  )
    return;

  const ua = req.headers.get('user-agent');
  const viewport = ua?.includes('Mobile') ? '/mobile' : '';
  url.pathname = `${viewport}${url.pathname}`;
  // eslint-disable-next-line consistent-return
  return NextResponse.rewrite(url);
}
