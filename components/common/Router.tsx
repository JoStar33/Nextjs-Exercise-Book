import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export default function Router() {
  const router = useRouter();
  React.useEffect(() => {
    // 경로가 바뀌기 시작하는 함수.
    router.events.on('routeChangeStart', () => {});
    // 경로가 완전히 바뀐후 시작하는 함수.
    router.events.on('hashChangeComplete', () => {});
    // 경로를 바꾸려고했으나 오류가 발생할경우 실행되는 함수.
    router.events.on('routeChangeError', () => {});
    // 브라우저의 기록을 변경하기 전에 실행되는 함수.
    router.events.on('beforeHistoryChange', () => {});
    // 해시는 변경되었으나 페이지는 변경되지 않았을 경우.
    router.events.on('hashChangeStart', () => {});
    // 해시가 변경되었지만 페이지가 변경되지 않은 경우.
    router.events.on('hashChangeComplete', () => {});
    return () => {
      // 주의!! 아래와 같이 이벤트를 해제해주는 작업을 해줘야함.
      router.events.off('hashChangeComplete', () => {});
    };
  }, []);
  return <S.Router>Router</S.Router>;
}

const S = {
  Router: styled.div``,
};
