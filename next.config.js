/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 다음과 같이 rewrites 적용시에 about이라는 path에 접속시 /react-query-test에서 보이는 화면이 보이도록 한다.
      {
        source: '/about',
        destination: '/react-query-test',
      },
      // 그뿐만이 아니다. slug값에 매칭되는 값들 또한 아래와같이 바꿔 적용시킬 수 있다.
      {
        source: '/about/:slug',
        destination: '/react-query-test/:slug',
      },
      //마지막으로 제일 재밌는 기능인 API가리기다. rewrites를 통해 API의 URL정보를 가려서 보여줄 수 있다.
      //보안상 API호출을 가려야할 경우, 아래와같이 API url을 변경시켜서 사용자에게 보여줄 수 있다.
      //대박!!!!!!!!!!
      {
        source: '/api/movies',
        destination: 'https://yts.mx/api/v2/list_movies.json',
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['yts.mx'],
    // unoptimized: true,
  },
};

module.exports = nextConfig;
