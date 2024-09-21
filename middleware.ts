import { NextRequest, NextResponse } from 'next/server';

// 미들웨어를 활용해서 모바일 환경 & 데스크탑 환경을 나누는게 가능함.
// Express의 미들웨어랑 비슷함.
export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  req.cookies.get('my-cookie'); // 이렇게 쿠키정보를 가져오는것도 가능.
  req.cookies.set('my-cookie', 'test'); // 당연히 설정도 되겠죠? cookie의 보안을 빡쌔게 걸어서 클라이언트에서 쿠키를 못까보게하고 httpOnly같은걸
  // 걸어버리면 쿠키를 열어볼 수 있는건 오직 서버만 가능해진다. 이런상황에서 Next.js에서 쿠키를 확인해보는 기능이 유용하게 먹힐 수 있음.
  if (
    url?.pathname.includes('_next') ||
    /\./.test(url?.pathname) ||
    url?.pathname.includes('/api')
  )
    return;

  const ua = req.headers.get('user-agent');
  // 언어 우선순위 정보
  const localeInfo = req.headers.get('accept-language');
  console.log('locale:', localeInfo);
  const viewport = ua?.includes('Mobile') ? '/mobile' : '';
  url.pathname = `${viewport}${url.pathname}`;
  // eslint-disable-next-line consistent-return
  return NextResponse.rewrite(url);
}
